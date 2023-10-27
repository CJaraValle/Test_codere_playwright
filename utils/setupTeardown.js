const { chromium } = require('playwright');

async function setupBrowser() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  return { browser, context };
}

async function teardownBrowser(browser) {
  await browser.close();
}

module.exports = {
  setupBrowser,
  teardownBrowser
};
