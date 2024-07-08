const Page = require("test/pageobjects/page");

/**
 * Sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * Define selectors using getter methods
   */
  get emailInputField() {
    return $("#email_input");
  }

  get passwordInputField() {
    return $("#password_input");
  }

  get loginErrorMessage() {
    return $("#status_text");
  }

  get doneBtn() {
    return $("#status_btn_text");
  }

  get loginBtn() {
    return $("#loginBtn");
  }

  get usernameOrPasswordEmptyErrors() {
    return $('//*[contains(@text, "empty")]');
  }

  get invalidEmailError() {
    return $("#textinput_error");
  }

  get invalidEmailOrPassword() {
    return $("#title");
  }

  /**
   * Methods to interact with the page
   */
  async sendEmail(email) {
    await this.emailInputField.setValue(email);
  }

  async sendPassword(password) {
    await this.passwordInputField.setValue(password);
  }

  async returnLoginErrorMessage() {
    return this.loginErrorMessage;
  }

  async clearEmailInput() {
    await this.emailInputField.clearValue();
  }

  async clearPasswordInput() {
    await this.passwordInputField.clearValue();
  }

  async clickDoneBtn() {
    await this.doneBtn.click();
  }

  async clickLoginBtn() {
    await this.loginBtn.click();
  }

  async returnUsernameOrPasswordEmptyErrorsEle() {
    return this.usernameOrPasswordEmptyErrors;
  }

  async returnInvalidEmailError() {
    return this.invalidEmailError;
  }

  async returnLoginButtonEle() {
    return this.loginBtn;
  }
}

module.exports = new LoginPage();
