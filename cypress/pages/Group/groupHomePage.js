import URL_PATH from "../../common/Utill";
const GROUP_TITLE = "//h4[contains(text(),'Manage groups')]";
const LEFT_MENU_GROUP = "//p[text()='GROUP']";
const CREATE_GROUP_BUTTON = "//span[text()='Create Group']";
const LEFT_MENU_GROUPS = "//p[text()='GROUPS']";

const DELETE_BUTTON = "//div[@role='group']/button";
const DELETE_YES_BUTTON = "//span[contains(text(),'Yes')][1]";
const EDIT_BUTTON = "//a[contains(@href,'/edit/')]";
const VIEW_BUTTON = "//div[@class='MuiButtonGroup-root']/a[1]";

const SEARCH_BY_GROUP_NAME = "//input[@name='name']";
const SELECT_STATUS_TYPE = "//select[@name='status']";
const CLICK_ON_SEARCH = "//button[@id='search-groups-button']";
const VERIFY_GROUP_NAME_ON_TABLE = "//div[@data-field='name'][@aria-colindex='1']";

class groupHomePage {
  static clickOnGroupUsingUrl() {
    cy.log("visit create group home page for first time");
    cy.visit(URL_PATH.createGroup);
  }

  static VerifyTitle(title) {
    cy.log("Verifying Group title");
    cy.wait(50);
    cy.xpath(GROUP_TITLE).should("have.text", title);
  }

  static clickOnGroupUsingLeftMenu() {
    cy.log("User going to click on Group main menu");
    cy.xpath(LEFT_MENU_GROUP).should("be.visible").click({ force: true });
    cy.wait(20);
    cy.xpath(LEFT_MENU_GROUP).click({ force: true });
    cy.wait(20);
    cy.xpath(LEFT_MENU_GROUPS).click({ force: true });
    cy.wait(20);
  }

  static enterGroupNameToSearch(groupName) {
    cy.xpath(SEARCH_BY_GROUP_NAME).type(groupName);
  }

  static selectStatusType(status) {
    cy.log("select status by type");
    cy.xpath(SELECT_STATUS_TYPE).select(status).should("be.visible");
  }

  static clickToSearch() {
    cy.log("Click on search button to Search group");
    cy.xpath(CLICK_ON_SEARCH).click();
  }
  static verifyGroupInsideTable(groupName) {
    cy.log('Here we are verifying the Group name inside the table');
    cy.wait(2000);
    cy.xpath(VERIFY_GROUP_NAME_ON_TABLE).invoke('attr', 'data-value').should('contain', groupName);
  }
  
  static clickViewButton() {
    cy.log('click the View button inside the table to view the Group');
    cy.xpath(VIEW_BUTTON).click();
  }
  static verifyViewButton() {
    cy.log('Verify that View button inside the table to view the Group');
    cy.xpath(VIEW_BUTTON).should('be.visible');
  }
  static clickEditButton() {
    cy.log('Now clicking on edit button');
   cy.xpath(EDIT_BUTTON).should('be.visible');

  }
  static verifyEditButton() {
    cy.log('Verify edit button inside the table to view the Group');
    cy.xpath(EDIT_BUTTON).should("be.visible");
  }
  static deleteButton() {
    cy.log('click delete button');
    cy.xpath(DELETE_BUTTON).click();
  }
  static verifyDeleteButton() {
    cy.log('Verify delete button inside the table to view the Group');
    cy.xpath(DELETE_BUTTON).should("not.exist");
  }
  static deleteShouldNotVisible() {
    cy.log('validate delete option should not be visible');
    cy.xpath(DELETE_BUTTON).should('not.exist');
  }
}
export default groupHomePage;
