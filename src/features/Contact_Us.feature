Feature: Webdriveruniversity.com - Contact Us Page

Background: Pre conditions
    Given I navigate to Webdriveruniversity homepage
    When I click on the contact us button
    And I switch to the new browser tab

  Scenario: Valid Contact Us Form Submission
    And I type a first name
    And I type a last name
    And I enter an email address
    And I type a comment
    And I click on the submit button
    Then I should be presented with a successful contact us submission message

  Scenario: Invalid Contact Us Form Submission
    And I type a first name
    And I type a last name
    # And I enter an email address
    And I type a comment
    And I click on the submit button
    Then I should be presented with an unsuccessful contact us message

  Scenario: Valid Contact Us Form Submission - Using Specific Data
    And I type a specific first name "Hong"
    And I type a specific last name "Van"
    And I enter an specific email address "hong_van@example.com"
    And I type specific text "Hello World" and a number 2 within the comment input field
    And I click on the submit button
    Then I should be presented with a successful contact us submission message

  Scenario: Contact Us Form Submission - Using Random Data
    And I type a random first name
    And I type a random last name
    And I enter anrandom  email address
    And I type a comment
    And I click on the submit button
    Then I should be presented with a successful contact us submission message

  Scenario Outline: Validate Contact Us Page
    And I type a first name <firstName> and last name <lastName>
    And I type an email address '<emailAddress>' and a comment '<comment>'
    And I click on the submit button
    Then I should be presented with a header text '<message>'

    Examples:
      | firstName | lastName | emailAddress     | comment       | message                     |
      | John      | Jones    | john@example.com | Hello World 1 | Thank You for your Message! |
      | Mai       | Van      | mai@example.com  | Hello World 2 | Thank You for your Message! |
      | Lung      | Chi      | lung             | Hello World 3 | Invalid email address       |