// ==UserScript==
// @name binki-atlassian-jira-ai-banner-hide
// @version 1.0.1
// @homepageURL https://github.com/binki/binki-atlassian-jira-ai-banner-hide
// @match https://*.atlassian.net/*
// ==/UserScript==

(async () => {
  const style = document.createElement('style');
  style.textContent = `div[data-testid="ai-proactive-container.ai-container"] {
    display: none;
  }`;
  document.head.append(style);
})();
