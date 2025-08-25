// ==UserScript==
// @name binki-atlassian-jira-ai-banner-hide
// @version 1.0.0
// @homepageURL https://github.com/binki/binki-atlassian-jira-ai-banner-hide
// @match https://*.atlassian.net/*
// @require https://github.com/binki/binki-userscript-when-element-query-selector-async/raw/0a9c204bdc304a9e82f1c31d090fdfdf7b554930/binki-userscript-when-element-query-selector-async.js
// ==/UserScript==

(async () => {
  const style = document.createElement('style');
  style.textContent = `div[data-testid="ai-proactive-container.ai-container"] {
    display: none;
  }`;
  document.head.append(style);
})();
