import { readFileSync } from 'fs';
import { join } from 'path';

export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.redirect('/');
  }

  try {
    // Load articles data
    const articlesPath = join(process.cwd(), 'src/data/articles.js');
    const articlesContent = readFileSync(articlesPath, 'utf8');

    // Extract the articles array using regex
    const match = articlesContent.match(/export const articles = (\[[\s\S]*?\]);[\s\S]*?export function/);
    
    let article = null;
    if (match) {
      // Use Function constructor to safely evaluate the array
      const arr = new Function(`return ${match[1]}`)();
      article = arr.find(a => a.id === id);
    }

    // Load the base HTML
    const htmlPath = join(process.cwd(), 'pages/article.html');
    let html = readFileSync(htmlPath, 'utf8');

    if (article) {
      const pageUrl = `https://precedent.news/pages/article.html?id=${article.id}`;
      const image = article.image || '';
      const title = article.title || 'Precedent.news';
      const dek = article.dek || 'Law, politics, and policy intelligence.';

      // Inject meta tags
      html = html
        .replace('<meta property="og:title" content="Precedent.news">', `<meta property="og:title" content="${title}">`)
        .replace('<meta property="og:description" content="Law, politics, and policy intelligence. Analysis and outcomes, not summaries.">', `<meta property="og:description" content="${dek}">`)
        .replace('<meta property="og:image" content="">', `<meta property="og:image" content="${image}">`)
        .replace('<meta property="og:url" content="">', `<meta property="og:url" content="${pageUrl}">`)
        .replace('<meta name="twitter:title" content="Precedent.news">', `<meta name="twitter:title" content="${title}">`)
        .replace('<meta name="twitter:description" content="Law, politics, and policy intelligence. Analysis and outcomes, not summaries.">', `<meta name="twitter:description" content="${dek}">`)
        .replace('<meta name="twitter:image" content="">', `<meta name="twitter:image" content="${image}">`)
        .replace('<title>Precedent.news</title>', `<title>${title} — Precedent.news</title>`);
    }

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
    return res.status(200).send(html);

  } catch (err) {
    console.error('Article handler error:', err);
    return res.redirect('/pages/article.html?id=' + id);
  }
}
