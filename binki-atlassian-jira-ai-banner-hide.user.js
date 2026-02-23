// ==UserScript==
// @name binki-atlassian-jira-ai-banner-hide
// @version 1.0.2
// @homepageURL https://github.com/binki/binki-atlassian-jira-ai-banner-hide
// @match https://*.atlassian.net/*
// ==/UserScript==

(async () => {
  const style = document.createElement('style');
  style.textContent = `div[data-testid="ai-proactive-container.ai-container"],
  /* see #1. Note that this div is more nested, but I fear that this could easily bleed into hiding the entire issue if the structure of the document changes too much. */
  div:has(> div > h2[id='smart-related-issues-panel.header.title']),
  /* see #2. Note that this is a more generalized element but in the foreseeable future probably only AI things are going to show up in here. */
  div[data-testid='side-nav-recommendation.jira-side-nav'] {
    display: none;
  }`;
  document.head.append(style);
})();
