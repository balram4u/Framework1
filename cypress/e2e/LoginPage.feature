@Login-Test @Regression
Feature: I want to test the login page
Background: Pre conditions
  Given I navigate to the login page
   @Login-Operator    
       Scenario: Verify login as a Operator on the Unified Portal Application
            
              When I enter username
              When I click on Next button
              When I enter password
              When I Click on Login button
              Then Verify that it is showing expected succeesful message
@Login-Distributor
       Scenario: Verify login as a Distributor on the Unified Portal Application - Using specific date
       
              When I enter username "dist1"
              When I click on Next button
              When I enter password 2023
              When I Click on Login button
              Then Verify that it is showing expected succeesful message
@Smoke-Test
       Scenario Outline: Verify login on the Unified Portal Application using different Resellers
              
              When I enter username '<username>'
              When I click on Next button
              When I enter password <password>
              When I Click on Login button
              Then Verify that it is showing expected succeesful message '<Message>'
              Examples:
                     | username    | password | Message               |
                     | Operator    | 2023     | Welcome to Seamless!! |
                     | Dist1       | 2023     | Welcome to Seamless!! |
                     | Sub-dist2-1 | 2023     | Welcome to Seamless!! |
