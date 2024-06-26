const {Given,When,Then} = require("@badeball/cypress-cucumber-preprocessor");
import URL_PATH from "../../common/Utill";
import LoginPage from "../../pages/LoginPage/LoginPage";
import groupHomePage from "../../pages/Group/groupHomePage";
import viewGroupPage  from "../../pages/Group/viewGroupPage";

When("Login to the portal using UserName {string} and Password {float}",
  (userId, password) => {
    LoginPage.login(userId,password)
  }
);

When("Navigate to Group main menu", () => {
  groupHomePage.clickOnGroupUsingLeftMenu();
})
Then("Verify the Title of the page {string}", (title) => {
  groupHomePage.VerifyTitle(title);
});
Then("Verify that Create ,view, edit and delete button is present in Groups homepage", () => {
  groupHomePage.VerifyTitle(title);
});

When("I am able to search existing Group by Group Name {string}", (groupName) => {
  groupHomePage.enterGroupNameToSearch(groupName);
  groupHomePage.clickToSearch();
  cy.wait(3000);
});

Then("Verfiy that Search Group is present inside the table {string}", (groupName) => {
groupHomePage.verifyGroupInsideTable(groupName)
});

