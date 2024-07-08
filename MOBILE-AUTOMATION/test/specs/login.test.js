const { expect } = require("@wdio/globals");
const LoginPage = require("../pageobjects/login.page");
const LandingPage = require("../pageobjects/landing.page");
const DashboardPage = require("../pageobjects/dashboard.page");

describe("Login Tests", () => {
  beforeEach(async () => {
    await browser.reloadSession();
  });

  it("should validate that the app launches within a reasonable period of time", async () => {
    await LandingPage.returnLoginTextInDashboard();
    await expect(LandingPage.loginBtnEle).toHaveText("Log In");
  });

  it("should validate that the user can launch the QA app", async () => {
    await expect(LandingPage.loginBtnEle).toHaveText("Log In");
  });

  it("should validate that the login button is displayed once the app is launched", async () => {
    await expect(LandingPage.loginBtnEle).toHaveText("Log In");
  });

  // it("should validate that the login button is clickable", async () => {
  //   await expect(LandingPage.loginBtnEle).toBeClickable();
  //   await LandingPage.clickLoginBtn();
  // });

  // it("should confirm that the password length cannot be less than five characters", async () => {
  //   await LoginPage.sendEmail("test@example.com");
  //   await LoginPage.sendPassword("1234");
  //   await LoginPage.clickLoginBtn();
  //   await expect(LoginPage.returnLoginErrorMessage()).toHaveText(
  //     "Password is incorrect."
  //   );
  //   await LoginPage.clickDoneBtn();
  // });

  // it("should validate that the username follows email format only", async () => {
  //   await LoginPage.clearEmailInput();
  //   await LoginPage.clearPasswordInput();
  //   await LoginPage.sendEmail("test@example.com");
  //   await LoginPage.sendPassword("validpassword");
  //   await LoginPage.clickLoginBtn();
  //   await expect(DashboardPage.returnWelcomeText()).toHaveText("Hi");
  //   await DashboardPage.clickLogOutButton();
  // });

  // it("should validate that the username follows allowed character restrictions", async () => {
  //   await LoginPage.sendEmail("test@example.com");
  //   await LoginPage.sendPassword("validpassword");
  //   await LoginPage.clickLoginBtn();
  //   await expect(DashboardPage.returnWelcomeText()).toHaveText("Hi");
  //   await DashboardPage.clickLogOutButton();
  // });

  // it("should validate that user cannot log in with email address that does not follow email format", async () => {
  //   await LandingPage.clickLoginBtn();
  //   await LoginPage.sendEmail("invalidemail");
  //   await LoginPage.sendPassword("validpassword");
  //   await LoginPage.clickLoginBtn();
  //   await expect(LoginPage.returnInvalidEmailError()).toHaveText(
  //     "'Email' is not a valid email address."
  //   );
  // });

  // it("should validate that the user cannot proceed to log in with empty values for username and password", async () => {
  //   await LoginPage.clearEmailInput();
  //   await LoginPage.clearPasswordInput();
  //   await LoginPage.clickLoginBtn();
  //   await expect(LoginPage.returnUsernameOrPasswordEmptyErrorsEle()).toHaveText(
  //     "must not be empty"
  //   );
  // });

  // it("should validate that the user cannot log in with an invalid username and password", async () => {
  //   await LoginPage.clearEmailInput();
  //   await LoginPage.clearPasswordInput();
  //   await LoginPage.sendEmail("invalid@example.com");
  //   await LoginPage.sendPassword("invalidpassword");
  //   await LoginPage.clickLoginBtn();
  //   await expect(LoginPage.invalidEmailOrPassword).toHaveText("Error");
  // });

  // it("should confirm that the login button is disabled until both the username and password fields are filled", async () => {
  //   await LoginPage.clearEmailInput();
  //   await LoginPage.clearPasswordInput();
  //   await LoginPage.sendEmail("test@example.com");
  //   await expect(LoginPage.returnLoginButtonEle()).not.toBeClickable();
  // });

  // it("should validate that users can log in with a valid username and password", async () => {
  //   await LoginPage.clearEmailInput();
  //   await LoginPage.sendEmail("test@example.com");
  //   await LoginPage.sendPassword("validpassword");
  //   await LoginPage.clickLoginBtn();
  //   await expect(DashboardPage.returnWelcomeText()).toHaveText("Hi");
  // });
});
