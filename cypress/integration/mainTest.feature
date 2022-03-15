Feature: Check buy list
    
    Background:
    Given I navigate to the login page
    Then Provide the username "standard_user" and password "secret_sauce"

    Scenario:Check title on Main page
    Then I should see "Products" displayed as the page title

    Scenario:Check items on page
    And I should see all "6" items
    Scenario:Check buy buttons on page and order all items and check basket
    And Check all "6" is visible buttons
    And Click buy all items on page
    Then Check "6" items in basket
    And Check "6" remove buttons
    And Click remove all items on page
    Then Check items in basket after delete

    Scenario:Check sort A-Z
    Then Check items A-Z

    Scenario:Check sort Z-A
    Then Check items Z-A

    Scenario:Check sort price Low-High
    Then Check price Low-High

    Scenario:Check sort price High-Low
    Then Check price High-Low