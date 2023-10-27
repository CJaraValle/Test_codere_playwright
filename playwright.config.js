module.exports = {

    testDir: './tests',
    timeout: 5000,
    browsers: ['chromium', 'firefox'],
    retries: 2,
    reporter: [
      [
        "allure-playwright",
        {
          detail: true,
          outputFolder: "allure-results",
          suiteTitle: false,
        },
      ],
    ],
    workers: 1,
    use: {
      headless: false,
      viewport: null,
        launchOptions: {
          args: ["--start-maximized"]
        }
    }
  };  