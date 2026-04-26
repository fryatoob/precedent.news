import { readFileSync } from 'fs';
import { join } from 'path';

export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.redirect('/');
  }

  try {
    const articlesPath = join(process.cwd(), 'src/data/articles.js');
    const articlesContent = readFileSync(articlesPath, 'utf8');

    const match = articlesContent.match(/export const articles = (\[[\s\S]*?\]);[\s\S]*?export function/);
    
    let article = null;
    if (match) {
      const arr = new Function(`return ${match[1]}`)();
      article = arr.find(a => a.id === id);
    }

    const htmlPath = join(process.cwd(), 'pages/article.html');
    let html = readFileSync(htmlPath, 'utf8');

    if (article) {
      const pageUrl = `https://precedent.news/api/og?id=${article.id}`;
      const image = article.image || '';
      const title = article.title || 'Precedent.news';
      const dek = article.dek || 'Law, politics, and policy intelligence.';

      html = html
        .replace('<title>Precedent.news</title>', `<title>${title} — Precedent.news</title>`)
        .replace(
          '</head>',
          `<meta property="og:site_name" content="Precedent.news">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${dek}">
  <meta property="og:image" content="${image}">
  <meta property="og:url" content="${pageUrl}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@precedentbrief">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${dek}">
  <meta name="twitter:image" content="${image}">
</head>`
        );
    }

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
    return res.status(200).send(html);

  } catch (err) {
    console.error('OG handler error:', err);
    return res.redirect('/pages/article.html?id=' + id);
  }
}
