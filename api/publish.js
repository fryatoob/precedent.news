/**
 * api/publish.js
 * Precedent.news — Automated Publishing Endpoint
 *
 * Receives a POST request from Make with article data,
 * commits it to GitHub via the API, and Vercel auto-deploys.
 *
 * Environment variables required (set in Vercel dashboard):
 *   GITHUB_TOKEN     — Personal access token with repo write access
 *   GITHUB_OWNER     — Your GitHub username (e.g. "fryatoob")
 *   GITHUB_REPO      — Your repo name (e.g. "precedent-news")
 *   PUBLISH_SECRET   — A secret string Make sends to authenticate requests
 *
 * Request format (from Make):
 *   POST /api/publish
 *   Authorization: Bearer YOUR_PUBLISH_SECRET
 *   Content-Type: application/json
 *
 *   {
 *     "id": "article-slug",
 *     "title": "Full headline",
 *     "dek": "Subheadline",
 *     "category": "Law",
 *     "section": "law",
 *     "date": "April 24, 2026",
 *     "readTime": "6 min read",
 *     "featured": false,
 *     "developing": true,
 *     "keyPoints": ["Point 1", "Point 2", "Point 3"],
 *     "body": {
 *       "whatHappened": "...",
 *       "analysis": "...",
 *       "whyItMatters": "..."
 *     },
 *     "scenarios": [
 *       { "type": "likely", "label": "Most Likely Outcome", "body": "..." },
 *       { "type": "alternative", "label": "Alternative Path", "body": "..." }
 *     ]
 *   }
 */

export default async function handler(req, res) {

  // Only accept POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Authenticate the request
  const authHeader = req.headers.authorization;
  const secret = process.env.PUBLISH_SECRET;

  if (!authHeader || authHeader !== `Bearer ${secret}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Parse the article data
  // Claude sometimes wraps JSON in markdown or adds extra text
  // This handles raw JSON strings, wrapped JSON, and pre-parsed objects
  let article = req.body;

  if (typeof article === 'string') {
    // Strip markdown code fences if present
    let cleaned = article
      .replace(/^```json\s*/i, '')
      .replace(/^```\s*/i, '')
      .replace(/\s*```$/i, '')
      .trim();

    // Extract just the JSON object if there's extra text around it
    const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      cleaned = jsonMatch[0];
    }

    try {
      article = JSON.parse(cleaned);
    } catch (e) {
      return res.status(400).json({
        error: 'Invalid JSON in request body',
        detail: e.message,
        received: article.slice(0, 200)
      });
    }
  }

  // Validate required fields
  const required = ['id', 'title', 'dek', 'category', 'section', 'date', 'body'];
  for (const field of required) {
    if (!article[field]) {
      return res.status(400).json({ error: `Missing required field: ${field}` });
    }
  }

  // Sanitize the ID — lowercase, hyphens only, no special chars
  article.id = article.id
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  // Set defaults
  article.featured = article.featured || false;
  article.developing = article.developing || false;
  article.readTime = article.readTime || '5 min read';
  article.keyPoints = article.keyPoints || [];
  article.scenarios = article.scenarios || [];

  try {
    // 1. Fetch the current articles.js from GitHub
    const { GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO } = process.env;
    const filePath = 'src/data/articles.js';
    const apiBase = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${filePath}`;

    const getRes = await fetch(apiBase, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      }
    });

    if (!getRes.ok) {
      throw new Error(`GitHub GET failed: ${getRes.status}`);
    }

    const fileData = await getRes.json();
    const currentContent = Buffer.from(fileData.content, 'base64').toString('utf8');

    // 2. Check if article ID already exists — prevent duplicates
    if (currentContent.includes(`id: "${article.id}"`)) {
      return res.status(409).json({
        error: 'Article with this ID already exists',
        id: article.id
      });
    }

    // 3. Build the new article object as a JS string
    const newArticleStr = buildArticleString(article);

    // 4. Insert the new article at the top of the array
    const updatedContent = currentContent.replace(
      'export const articles = [',
      `export const articles = [\n${newArticleStr},`
    );

    // 5. Commit to GitHub
    const encodedContent = Buffer.from(updatedContent).toString('base64');
    const commitMessage = `Add article: ${article.title.slice(0, 60)}`;

    const putRes = await fetch(apiBase, {
      method: 'PUT',
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: commitMessage,
        content: encodedContent,
        sha: fileData.sha,
        branch: 'main',
      })
    });

    if (!putRes.ok) {
      const errText = await putRes.text();
      throw new Error(`GitHub PUT failed: ${putRes.status} — ${errText}`);
    }

    // 6. Return success with the article URL
    const articleUrl = `https://precedent.news/pages/article.html?id=${article.id}`;

    return res.status(200).json({
      success: true,
      id: article.id,
      url: articleUrl,
      message: 'Article published. Vercel will redeploy in ~30 seconds.'
    });

  } catch (err) {
    console.error('Publish error:', err);
    return res.status(500).json({
      error: 'Failed to publish article',
      detail: err.message
    });
  }
}


/**
 * Builds a clean JS object string for insertion into articles.js
 */
function buildArticleString(a) {
  const escape = str => str?.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$') || '';

  const keyPoints = (a.keyPoints || [])
    .map(p => `    "${escape(p)}"`)
    .join(',\n');

  const scenarios = (a.scenarios || [])
    .map(s => `    {
      type: "${s.type}",
      label: "${escape(s.label)}",
      body: "${escape(s.body)}"
    }`)
    .join(',\n');

  return `  {
    id: "${a.id}",
    title: "${escape(a.title)}",
    dek: "${escape(a.dek)}",
    category: "${a.category}",
    section: "${a.section}",
    date: "${a.date}",
    readTime: "${a.readTime}",
    featured: ${a.featured},
    developing: ${a.developing},
    keyPoints: [
${keyPoints}
    ],
    body: {
      whatHappened: "${escape(a.body.whatHappened)}",
      analysis: "${escape(a.body.analysis)}",
      whyItMatters: "${escape(a.body.whyItMatters)}"
    },
    scenarios: [
${scenarios}
    ]
  }`;
}
