const Page = require("./page");

class LandingPage extends Page {
  // Define selectors using getter methods
  get loginBtnEle() {
    return $("#loginBtn");
  }

  get getStartedBtnEle() {
    return $("#gettingStartedBtn");
  }

  // Method to click the login button
  async clickLoginBtn() {
    await this.loginBtnEle.click();
  }

  // Method to return the text of the login button
  async returnLoginTextInDashboard() {
    return await this.loginBtnEle.getText();
  }

  // Method to click the get started button
  async clickGetStartedBtn() {
    await this.getStartedBtnEle.click();
  }
}

module.exports = new LandingPage();
