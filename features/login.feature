@mobile @negative
Feature: Halo Oglasi login

  Scenario: Login with invalid credentials
    Given I open My Profile
    Then I tap login button
    When I log in with email "test123@gmail.com" and password "invalidpassword"
    Then the invalid login message is visible