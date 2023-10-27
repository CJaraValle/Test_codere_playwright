const { baseUrl } = require('../../config/config');
const { log, errorLog } = require('../../utils/logger');
const { SuccessfulLogin, FailedLogin, LoginLocators } = require('../locators/loginLocators');

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    try {
      const response = await this.page.goto(`${baseUrl}`, { waitUntil: 'load', timeout: 20000 });
      if (response.status() === 200) {
        log('The web page was loaded.'); 
      }else{
        errorLog('website not available.');
        throw new Error('website not available.');
      }
    } catch (error) {
      errorLog(error.message);
      throw error; 
    }
  }

  async login(username, password) {
    try {
      await this.page.click(LoginLocators.btnAceptar); 
      await this.page.waitForSelector(LoginLocators.btnAcces,{ state: 'visible' });
      await this.page.click(LoginLocators.btnAcces); 
      await this.page.fill(LoginLocators.txtUsername, username);
      await this.page.fill(LoginLocators.txtPassword, password);
      await this.page.click(LoginLocators.btnLogin);
    } catch (error) {
      errorLog(error);
      throw new Error('Login attempt failed.');
    }
  }

  async validateLoginSuccess() {
    try {
      await this.page.waitForSelector(LoginLocators.txtMyBets, { state: 'visible' });
      const successMessage = 'Login Successful';
        return successMessage;
    } catch (error) {
      errorLog(error);
      throw new Error('Login success validation failed.');
    }
  }
  
  async validateLoginFailure() {
    try {
      await this.page.waitForSelector('text="Error de inicio de sesión"', { state: 'visible' });
      const errorMessage = "Error de inicio de sesión";
      return errorMessage;
    } catch (error) {
      errorLog(error);
      throw new Error('Login failure validation failed.');
    }
  }
}

module.exports = LoginPage;