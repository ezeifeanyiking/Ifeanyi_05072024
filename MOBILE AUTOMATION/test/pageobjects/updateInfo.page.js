const Page = require("./page");

class UpdateInfoPage extends Page {
  // Define selectors using getter methods
  get firstNameInput() {
    return $("#firstNameEditText");
  }

  get lastNameInput() {
    return $("#lastNameEditText");
  }

  get updateInfoBtn() {
    return $("#updateBtn");
  }

  get firstNameText() {
    return $('//android.widget.TextView[@text="First name"]');
  }

  get lastNameText() {
    return $('//android.widget.TextView[@text="Last name"]');
  }

  get infoUpdateSuccess() {
    return $("#status_text");
  }

  get okBtn() {
    return $("#status_btn_text");
  }

  get toastMessage() {
    return $("//hierarchy/android.widget.Toast");
  }

  get updatedFirstName() {
    return $("#textView2");
  }

  // Method to enter first name
  async sendFirstName(firstname) {
    await (await this.firstNameInput).setValue(firstname);
  }

  // Method to enter last name
  async sendLastName(lastname) {
    await (await this.lastNameInput).setValue(lastname);
  }

  // Method to click update info button
  async clickUpdateInfoBtn() {
    await (await this.updateInfoBtn).click();
  }

  // Method to return first name text element
  async returnFirstNameText() {
    return this.firstNameText.getText();
  }

  // Method to return last name text element
  async returnLastNameText() {
    return this.lastNameText.getText();
  }

  // Method to return info update success element
  async returnInfoUpdateSuccess() {
    return this.infoUpdateSuccess.getText();
  }

  // Method to click OK button
  async clickOkBtn() {
    await (await this.okBtn).click();
  }

  // Method to return toast message element
  async returnToastMessage() {
    return this.toastMessage.getText();
  }

  // Method to return updated first name element
  async returnUpdatedFirstName() {
    return this.updatedFirstName.getText();
  }
}

module.exports = new UpdateInfoPage();
