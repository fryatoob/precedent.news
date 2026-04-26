/**
 * article.js
 * Precedent.news — Article Page Script
 *
 * Reads article ID from URL params, renders full article,
 * and loads related stories at the bottom.
 */

import { renderArticle, renderFeed } from './render.js';

document.addEventListener('DOMContentLoaded', () => {

  // Set live date in masthead
  const dateEl = document.querySelector('.masthead__date');
  if (dateEl) {
    const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.textContent = new Date().toLocaleDateString('en-US', opts);
  }

  // Render article from URL param ?id=article-slug
  renderArticle();

  // Render related stories at bottom
  renderFeed('related-feed', 3, 'default');

});
