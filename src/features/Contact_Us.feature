Feature: Webdriveruniversity.com - Contact Us Page

#   Scenario: Valid Contact Us Form Submission
#     Given I navigate to Webdriveruniversity homepage
#     When I click on the contact us button
#     And I switch to the new browser tab
#     And I type a first name
#     And I type a last name
#     And I enter an email address
#     And I type a comment
#     And I click on the submit button
#     Then I should be presented with a successful contact us submission message

#   Scenario: Invalid Contact Us Form Submission
#     Given I navigate to Webdriveruniversity homepage
#     When I click on the contact us button
#     And I switch to the new browser tab
#     And I type a first name
#     And I type a last name
#     # And I enter an email address
#     And I type a comment
#     And I click on the submit button
#     Then I should be presented with an unsuccessful contact us message

  Scenario: Valid Contact Us Form Submission - Using Specific Data
    Given I navigate to Webdriveruniversity homepage
    When I click on the contact us button
    And I switch to the new browser tab
    And I type a specific first name "Hong"
    And I type a specific last name "Van"
    And I enter an specific email address "hong_van@example.com"
    And I type specific text "Hello World" and a number 2 withing the comment input field
    And I click on the submit button
    Then I should be presented with a successful contact us submission message

