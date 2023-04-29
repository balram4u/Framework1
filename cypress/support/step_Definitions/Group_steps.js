const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
import LoginPage from "../page objects/LoginPage";
const loginPage = new LoginPage();
When("Login to the portal  using UserName {string} and Password {float}",
  (username, password) => {
    cy.xpath("//input[@id='userId']").clear().type(username);
    cy.xpath("//span[contains(text(),'Next')]").click();
    cy.xpath("//input[@id='password']").type(password);
    cy.xpath("//span[contains(text(),'Login')]").click();
  }
);

When("Navigate to Group main menu", () => {
  loginPage.navigate("home/group/groups");
});


Then("Verify the Url of the page", () => {
  cy.url().should("include", "/home/group/groups");
  //cy.url.should('contain', "/home/group/groups");
});
