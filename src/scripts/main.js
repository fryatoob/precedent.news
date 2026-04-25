/**
 * main.js
 * Precedent.news — Homepage Script
 */

import { renderHero, renderFeed, renderSection, renderBriefingBar, renderTicker } from './render.js';

document.addEventListener('DOMContentLoaded', () => {

  // Set live date in masthead
  const dateEl = document.querySelector('.masthead__date');
  if (dateEl) {
    const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.textContent = new Date().toLocaleDateString('en-US', opts);
  }

  // Render all dynamic sections
  renderTicker('ticker-track');
  renderHero('hero-container');
  renderBriefingBar('briefing-bar');
  renderFeed('latest-feed', 3);
  renderSection('courts-feed', 'courts', 4);
  renderSection('politics-feed', 'politics', 4);

  // Scroll-triggered reveals for static elements
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-reveal]').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`;
    observer.observe(el);
  });

});
