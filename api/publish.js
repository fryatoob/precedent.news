export default async function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const authHeader = req.headers.authorization;
  const secret = process.env.PUBLISH_SECRET;

  if (!authHeader || authHeader !== `Bearer ${secret}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  let article = req.body;

  if (typeof article === 'string') {
    let cleaned = article
      .replace(/^```json\s*/i, '')
      .replace(/^```\s*/i, '')
      .replace(/\s*```$/i, '')
      .trim();

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
        received: String(article).slice(0, 200)
      });
    }
  }

  const required = ['id', 'title', 'dek', 'category', 'section', 'date', 'body'];
  for (const field of required) {
    if (!article[field]) {
      return res.status(400).json({ error: `Missing required field: ${field}` });
    }
  }

  article.id = article.id
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  article.featured = article.featured || false;
  article.developing = article.developing || false;
  article.readTime = article.readTime || '5 min read';
  article.image = article.image || '';
  article.keyPoints = article.keyPoints || [];
  article.scenarios = article.scenarios || [];

  try {
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

    if (currentContent.includes(`id: "${article.id}"`)) {
      return res.status(409).json({
        error: 'Article with this ID already exists',
        id: article.id
      });
    }

    const newArticleStr = buildArticleString(article);

    const updatedContent = currentContent.replace(
      'export const articles = [',
      `export const articles = [\n${newArticleStr},`
    );

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

    const articleUrl = `https://precedent.news/pages/article.html?id=${article.id}`;

    return res.status(200).json({
      success: true,
      id: article.id,
      url: articleUrl,
      message: 'Article published. Vercel will redeploy in 30 seconds.'
    });

  } catch (err) {
    console.error('Publish error:', err);
    return res.status(500).json({
      error: 'Failed to publish article',
      detail: err.message
    });
  }
}

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
    image: "${escape(a.image)}",
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
