/**
 * article.js
 * Precedent.news — Article Page Script
 */
import { renderArticle, renderFeed } from './render.js';
import { getById } from '../data/articles.js';

document.addEventListener('DOMContentLoaded', () => {
  // Set live date
  const dateEl = document.querySelector('.masthead__date');
  if (dateEl) {
    const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.textContent = new Date().toLocaleDateString('en-US', opts);
  }

  // Set og/twitter meta tags dynamically
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (id) {
    const article = getById(id);
    if (article) {
      const pageUrl = `https://precedent.news/pages/article.html?id=${article.id}`;

      document.title = `${article.title} — Precedent.news`;

      document.querySelector('meta[property="og:title"]').setAttribute('content', article.title);
      document.querySelector('meta[property="og:description"]').setAttribute('content', article.dek);
      document.querySelector('meta[property="og:url"]').setAttribute('content', pageUrl);
      document.querySelector('meta[name="twitter:title"]').setAttribute('content', article.title);
      document.querySelector('meta[name="twitter:description"]').setAttribute('content', article.dek);

      if (article.image) {
        document.querySelector('meta[property="og:image"]').setAttribute('content', article.image);
        document.querySelector('meta[name="twitter:image"]').setAttribute('content', article.image);
      }
    }
  }

  // Render article from URL param
  renderArticle();

  // Render related stories
  renderFeed('related-feed', 3, 'default');
});
