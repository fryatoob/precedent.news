/**
 * article.js
 * Precedent.news — Article Page Script
 */
import { renderArticle, renderFeed } from './render.js';

document.addEventListener('DOMContentLoaded', () => {
  const dateEl = document.querySelector('.masthead__date');
  if (dateEl) {
    const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.textContent = new Date().toLocaleDateString('en-US', opts);
  }

  renderArticle();
  renderFeed('related-feed', 3, 'default');
});
