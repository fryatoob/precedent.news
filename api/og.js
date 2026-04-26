/**
 * render.js
 * Precedent.news — Article Rendering Engine
 *
 * Reads from articles.js and renders HTML components
 * into the DOM. Called by page-specific scripts.
 */

import { articles, getFeatured, getDeveloping, getLatest, getBySection, getById } from '../data/articles.js';

/* ----------------------------------------------------------
   Helpers
   ---------------------------------------------------------- */

function formatDate(dateStr) {
  return dateStr;
}

function categoryColor(category) {
  const map = {
    'Law': 'var(--orange)',
    'Courts': 'var(--orange)',
    'Politics': 'var(--orange)',
    'Congress': 'var(--orange)',
    'Business': 'var(--orange)',
    'AI Policy': 'var(--orange)'
  };
  return map[category] || 'var(--orange)';
}


/* ----------------------------------------------------------
   Card templates
   ---------------------------------------------------------- */

export function renderCard(article, variant = 'default') {
  if (variant === 'compact') {
    return `
      <article class="card card--compact">
        <div class="card__body">
          <span class="cat">${article.category}</span>
          <h3 class="card__headline">
            <a href="/pages/article.html?id=${article.id}">${article.title}</a>
          </h3>
          <span class="ts">${article.readTime} &middot; ${article.date}</span>
        </div>
      </article>
    `;
  }

  if (variant === 'large') {
    return `
      <article class="card card--lg">
        <span class="cat" style="margin-bottom: 8px; display: block;">${article.category}</span>
        <h2 class="card__headline">
          <a href="/pages/article.html?id=${article.id}">${article.title}</a>
        </h2>
        <p class="card__dek">${article.dek}</p>
        <div class="card__meta meta">
          <span class="ts">${article.readTime}</span>
          <span class="meta__divider"></span>
          <span class="ts">${article.date}</span>
          ${article.developing ? '<span style="font-family:var(--font-ui);font-size:9px;color:var(--orange);letter-spacing:1px;text-transform:uppercase;border:1px solid var(--orange);padding:1px 6px;">Developing</span>' : ''}
        </div>
      </article>
    `;
  }

  // Default
  return `
    <article class="card">
      <span class="cat" style="margin-bottom: 8px; display: block;">${article.category}</span>
      <h3 class="card__headline">
        <a href="/pages/article.html?id=${article.id}">${article.title}</a>
      </h3>
      <p class="card__dek">${article.dek}</p>
      <div class="card__meta meta">
        <span class="ts">${article.readTime}</span>
        <span class="meta__divider"></span>
        <span class="ts">${article.date}</span>
      </div>
    </article>
  `;
}

export function renderSidebarStory(article) {
  return `
    <div class="sidebar-story">
      <span class="cat">${article.category}</span>
      <h3 class="sidebar-story__headline">
        <a href="/pages/article.html?id=${article.id}">${article.title}</a>
      </h3>
      <span class="ts">${article.date}</span>
    </div>
  `;
}


/* ----------------------------------------------------------
   Hero
   ---------------------------------------------------------- */

export function renderHero(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const featured = getFeatured();
  const developing = getDeveloping();

  container.innerHTML = `
    <div class="hero__grid">
      <div class="hero__lead">
        <div class="hero__kicker">${featured.category}</div>
        <h1 class="hero__headline">
          <a href="/pages/article.html?id=${featured.id}">${featured.title}</a>
        </h1>
        <p class="hero__dek">${featured.dek}</p>
        <div class="hero__byline meta">
          <span class="ts">${featured.readTime}</span>
          <span class="meta__divider"></span>
          <span class="ts">${featured.date}</span>
          <a href="/pages/article.html?id=${featured.id}" class="hero__read-more">Full analysis</a>
        </div>
      </div>
      <div class="hero__divider"></div>
      <aside class="hero__sidebar">
        <div class="hero__sidebar-title">Also Developing</div>
        ${developing.slice(0, 3).map(renderSidebarStory).join('')}
      </aside>
    </div>
  `;
}


/* ----------------------------------------------------------
   Latest feed
   ---------------------------------------------------------- */

export function renderFeed(containerId, limit = 3, variant = 'default') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const latest = getLatest(limit);

  container.innerHTML = latest.map(a => renderCard(a, variant)).join('');
}


/* ----------------------------------------------------------
   Section feed
   ---------------------------------------------------------- */

export function renderSection(containerId, section, limit = 4) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const items = getBySection(section, limit);
  if (items.length === 0) {
    container.innerHTML = '<p class="ts" style="padding:20px 0;">No stories in this section yet.</p>';
    return;
  }

  container.innerHTML = items.map(a => renderCard(a, 'compact')).join('');
}


/* ----------------------------------------------------------
   Full article page
   ---------------------------------------------------------- */

export function renderArticle() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  if (!id) {
    window.location.href = '/';
    return;
  }

  const article = getById(id);

  if (!article) {
    document.getElementById('article-content').innerHTML = `
      <div style="padding: 80px 0; text-align: center;">
        <p class="ts">Article not found.</p>
      </div>
    `;
    return;
  }

  // Update page title
  document.title = `${article.title} — Precedent.news`;

  // Random author
  const author = ['Vince Vanchetti', 'Claire Maddox', 'James Okafor'][Math.floor(Math.random() * 3)];

  // Render header
  const headerEl = document.getElementById('article-header');
  if (headerEl) {
    headerEl.innerHTML = `
      <div class="article-header__kicker">
        <span class="cat">${article.category}</span>
        ${article.developing ? '<span style="font-family:var(--font-ui);font-size:9px;color:var(--orange);letter-spacing:1px;text-transform:uppercase;border:1px solid var(--orange);padding:1px 6px;">Developing</span>' : ''}
      </div>
      <h1 class="article-header__headline">${article.title}</h1>
      <p class="article-header__dek">${article.dek}</p>
      <div class="article-header__meta meta">
        <span class="ts">${article.readTime}</span>
        <span class="article-header__meta-divider"></span>
        <span class="ts">${article.date}</span>
        <span class="article-header__meta-divider"></span>
        <span class="ts">By ${author}</span>
        <span class="article-header__meta-divider"></span>
        <span class="ts">Precedent.news</span>
      </div>
      ${article.image ? `
        <div class="article-header__image">
          <img src="${article.image}" alt="${article.title}" style="width:100%;max-height:480px;object-fit:cover;display:block;margin-top:var(--s8);border:2px solid var(--gray-10);">
        </div>
      ` : ''}
    `;
  }

  // Render body
  const bodyEl = document.getElementById('article-content');
  if (bodyEl) {
    const keyPoints = article.keyPoints?.map(p => `
      <li class="key-points__item">${p}</li>
    `).join('') || '';

    const scenarios = article.scenarios?.filter(s => s.type && s.label && s.body).map(s => `
      <div class="scenario ${s.type === 'likely' ? 'scenario--likely' : ''}">
        <div class="scenario__label">${s.label}</div>
        <p class="scenario__body">${s.body}</p>
      </div>
    `).join('') || '';

    bodyEl.innerHTML = `
      ${article.keyPoints?.length ? `
        <div class="key-points">
          <div class="key-points__title">Key Points</div>
          <ul class="key-points__list">${keyPoints}</ul>
        </div>
      ` : ''}

      <div class="article-section">
        <span class="article-section__label">What Happened</span>
        <div class="article-section__body">
          <p>${article.body.whatHappened}</p>
        </div>
      </div>

      <div class="article-section">
        <span class="article-section__label">Analysis</span>
        <div class="article-section__body">
          <p>${article.body.analysis}</p>
        </div>
      </div>

      <div class="article-section">
        <span class="article-section__label">Why It Matters</span>
        <div class="article-section__body">
          <p>${article.body.whyItMatters}</p>
        </div>
      </div>

      ${scenarios ? `
        <div class="scenarios">
          <div class="scenarios__title">What Happens Next</div>
          ${scenarios}
        </div>
      ` : ''}

      <div style="margin-top: 48px; padding-top: 24px; border-top: 2px solid var(--black); text-align: center;">
        <p style="font-family: var(--font-ui); font-size: 10px; color: var(--gray-50); letter-spacing: 2px; text-transform: uppercase;">
          Precedent.news &mdash; Analysis and outcomes, not summaries.
        </p>
      </div>
    `;
  }
}


/* ----------------------------------------------------------
   Briefing bar
   ---------------------------------------------------------- */

export function renderBriefingBar(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const latest = getLatest(1)[0];
  if (!latest) return;

  container.innerHTML = `
    <div class="briefing-bar__inner wrap">
      <div class="briefing-bar__label">Precedent Briefing</div>
      <div class="briefing-bar__content">
        <p class="briefing-bar__text">
          <strong>${latest.category}:</strong> ${latest.dek}
          <a href="/pages/article.html?id=${latest.id}">Full analysis &rarr;</a>
        </p>
      </div>
    </div>
  `;
}


/* ----------------------------------------------------------
   Ticker
   ---------------------------------------------------------- */

export function renderTicker(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const items = getLatest(6);
  const tickerHTML = items.map(a =>
    `<span class="ticker__item">${a.category}: ${a.title}</span>`
  ).join('');

  // Duplicate for seamless loop
  container.innerHTML = `
    <div class="ticker__track">
      ${tickerHTML}
      ${tickerHTML}
    </div>
  `;
}
