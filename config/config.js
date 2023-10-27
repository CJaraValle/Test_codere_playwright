require('dotenv').config();

module.exports = {
  baseUrl: process.env.BASE_URL,
  validCredentials: {
    username: process.env.VALID_USERNAME,
    password: process.env.VALID_PASSWORD
  },
  invalidCredentials: {
    username: process.env.INVALID_USERNAME,
    password: process.env.INVALID_PASSWORD
  }
};