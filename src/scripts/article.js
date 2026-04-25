/**
 * article.js
 * Precedent.news — Article Page Script
 */

import { renderArticle, renderFeed } from './render.js';

document.addEventListener('DOMContentLoaded', () => {

  // Set live date
  const dateEl = document.querySelector('.masthead__date');
  if (dateEl) {
    const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.textContent = new Date().toLocaleDateString('en-US', opts);
  }

  // Render article from URL param
  renderArticle();

  // Render related stories
  renderFeed('related-feed', 3, 'default');

});
