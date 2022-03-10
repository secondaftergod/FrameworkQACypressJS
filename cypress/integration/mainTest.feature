Feature: Check buy list
    
    Background:
    Given I navigate to the login page
    Then Provide the username "standard_user" and password "secret_sauce"

    Scenario:Check title on Main page
    Then I should see "Products" displayed as the page title

    Scenario:Check items on page
    Then I should see all items
