const { Given, When,Then } = require("@badeball/cypress-cucumber-preprocessor");
const USER_ID_FIELD = "//input[@id='userId']";
const PASSWORD_BUTTON = "//input[@id='password']";
const SUBMIT_BUTTON = "(//span[contains(text(),'Login')])[1]";
const LOGIN_BUTTON = "//span[contains(text(),'Login')]";
const NEXT_BUTTON = "//span[contains(text(),'Next')]";

import LoginPage from "../page objects/LoginPage";

const loginPage =new LoginPage();

Given("I navigate to the login page", function () {
  
  cy.visit("10.91.8.40");
  cy.wait(1500);
});

When("I enter username", function () {
  cy.xpath("//input[@id='userId']").clear().type("operator");
});

When("I enter password", function () {
  cy.xpath("//input[@id='password']").type("2023");
 
});
When("I click on Next button", function () {
   
  cy.xpath("//span[contains(text(),'Next')]").click();

});
When("I Click on Login button", function () {
 
  cy.xpath("//span[contains(text(),'Login')]").click();
});
Then("Verify that it is showing expected succeesful message", function () {
 
cy.xpath("//h4[contains(text(),'Welcome to Seamless!!')]").should('have.text',"Welcome to Seamless!!");
});

When("I enter username {string}",  (firstName) =>{
  cy.xpath("//input[@id='userId']").clear().type(firstName);

});

When("I enter password {int}",  (password) =>{
  cy.xpath("//input[@id='password']").type(password);
  
});

Then("Verify that it is showing expected succeesful message {string}", (message)=> {
 
  cy.xpath("//h4[contains(text(),'Welcome to Seamless!!')]").should('have.text',message);
  });