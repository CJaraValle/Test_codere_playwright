
# Project Setup Instructions

Follow the steps below to set up the project:

## Installation

1. **Install Playwright and dotenv:**
   
   npm install playwright dotenv

   --> Playwright is used for browser automation, and dotenv is used to manage environment variables.
2. **Install Playwright Test Runner:**
    npm install --save-dev @playwright/test

    --> The Playwright Test Runner is used to run and manage the tests.

3. **Install Allure Commandline:**

    npm install -g allure-commandline

    -->Allure Commandline is used to generate and display the Allure test reports.

## Generating Reports

1. **Generate the Report:**
    
    allure generate allure-results -o allure-report --clean
    
    -->This command generates a clean Allure report from the results in the allure-results directory.

2. **Open the Report:**

    allure open allure-report
    
    -->This command opens the generated Allure report in your default web browser.
