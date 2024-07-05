const { expect } = require("@wdio/globals");
const LandingPage = require("../pageobjects/landing.page");
const LoginPage = require("../pageobjects/login.page");
const DashboardPage = require("../pageobjects/dashboard.page");
const UpdateInfoPage = require("../pageobjects/updateInfo.page");

describe("Update Info Tests", () => {
  beforeEach(async () => {
    await browser.reloadSession();
    // Initialize pages
    await LandingPage.open();
  });

  it("should confirm that the First Name and Last Name field is displayed", async () => {
    await LandingPage.clickLoginBtn();
    await LoginPage.sendEmail(browser.config.testData.username);
    await LoginPage.sendPassword(browser.config.testData.password);
    await LoginPage.clickLoginBtn();
    await DashboardPage.clickUpdateInfo();
    await expect(await UpdateInfoPage.returnFirstNameText()).toHaveText(
      "First name"
    );
    await expect(await UpdateInfoPage.returnLastNameText()).toHaveText(
      "Last name"
    );
  });

  it("should validate that the User can Successfully Update their info", async () => {
    await UpdateInfoPage.sendFirstName(browser.config.testData.firstname);
    await UpdateInfoPage.sendLastName(browser.config.testData.lastname);
    await UpdateInfoPage.clickUpdateInfoBtn();
    await expect(await UpdateInfoPage.returnInfoUpdateSuccess()).toHaveText(
      "Information updated successfully."
    );
  });

  it("should validate First Name in the Dashboard after a Successful Update", async () => {
    await UpdateInfoPage.clickOkBtn();
    await expect(await UpdateInfoPage.returnUpdatedFirstName()).toHaveText(
      browser.config.testData.firstname
    );
  });

  it("should validate the First Name and Last Name field Shall not be less than 5 (five) Characters Each", async () => {
    await DashboardPage.clickUpdateInfo();
    await UpdateInfoPage.sendFirstName(
      browser.config.testData.incompleteFirstname
    );
    await UpdateInfoPage.sendLastName(
      browser.config.testData.incompleteLastName
    );
    await UpdateInfoPage.clickUpdateInfoBtn();
    await expect(
      await UpdateInfoPage.returnInfoUpdateSuccess()
    ).not.toBeDisplayed();
  });

  it("should validate that the user Cannot Update Info With Empty Values for the Both First Name and Last Name", async () => {
    await UpdateInfoPage.clickOkBtn();
    await DashboardPage.clickUpdateInfo();
    await UpdateInfoPage.clickUpdateInfoBtn();
    await expect(
      await UpdateInfoPage.returnToastMessage()
    ).toHaveTextContaining("empty");
  });
});
