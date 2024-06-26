const {Given,When,Then,
} = require("@badeball/cypress-cucumber-preprocessor");
import LoginPage from "../../pages/LoginPage/LoginPage";

Given("I navigate to the login page", function () {
  cy.visit("10.91.8.146");
});

When("I Click on Login button", function () {
  LoginPage.submitButton();
});

When("I enter username {string}", (firstName) => {
  LoginPage.enterUserId(firstName);
});

When("I enter password {int}", (password) => {
  LoginPage.enterPassword(password);
});

Then(
  "Verify that it is showing expected succeesful message {string}",
  (message) => {
    cy.xpath("//h4[contains(text(),'Welcome to Seamless!!')]").should(
      "have.text",
      message
    );
  }
);
