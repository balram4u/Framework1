@Group-Test @Regression
Feature:Validate search a Group by Name
Background: Pre conditions
  Given I navigate to the login page 

Scenario Outline: Validate whether Group can search Group data
When Login to the portal  using UserName '<UserName>' and Password <Password>
When Navigate to Group main menu
Then Verify the Url of the page 
Examples:
    | UserName | Password | 
    | Operator  | 2023   | 