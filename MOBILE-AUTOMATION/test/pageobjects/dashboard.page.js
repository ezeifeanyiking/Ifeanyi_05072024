const Page = require("./page");

/**
 * Sub page containing specific selectors and methods for a specific page
 */
class DashboardPage extends Page {
  /**
   * Define selectors using getter methods
   */
  get welcomeText() {
    return $("#textView2");
  }

  get logoutButton() {
    return $("#logOutBtn");
  }

  get changePassword() {
    return $("#changePassBtn");
  }

  get updateInfo() {
    return $("#updateInfoBtn");
  }

  /**
   * Methods to interact with the page
   */
  async returnWelcomeText() {
    return this.welcomeText.getText();
  }

  async clickLogOutButton() {
    await this.logoutButton.click();
  }

  async clickChangePassword() {
    await this.changePassword.click();
  }

  async clickUpdateInfo() {
    await this.updateInfo.click();
  }
}

module.exports = new DashboardPage();
