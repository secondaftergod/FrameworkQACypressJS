Feature: Validate the login page

  Background:
    Given I navigate to the login page

  Scenario: When I navigate to the login page
    Then I should see "Swag Labs" displayed as the page title

  Scenario Outline: Login with invalid username and password
    And Provide the username "<username>" and password "<password>"
    Then Login is failed with invlid username and password,message "Epic sadface: Username and password do not match any user in this service"
    Examples:
      | username | password |
      | abcd     | 1234     |
      | 35473    | afsdf    |

  Scenario: Login with empty username 
    And Provide the username "standard_user" and empty password
    Then Login is failed with invlid username and password,message "Epic sadface: Password is required"

  Scenario: Login with empty username 
    And Provide the password "secret_sauce" and empty username
    Then Login is failed with invlid username and password,message "Epic sadface: Username is required"
      
  Scenario: Login with valid credentials
    Then Provide the username "standard_user" and password "secret_sauce"
    
