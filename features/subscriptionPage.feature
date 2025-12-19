Feature: Subscription page validation

# Background: 
# Given User completes onboarding process

#
  #Given User is in last step for onboarding process
 # When User clicks submit button  ( Check notes)
 # Then Both Free and Premium should show Daily Meal Plan as available


 #Background:
    #Given User completes onboarding process
    #And User is in last step for onboarding process

  Scenario Outline: Verify feature availability on Subscription page
  Given User completes onboarding process
    Then "<Feature>" should be "<Availability>"

    Examples:
      | Feature                                   | Availability   |
      | Daily Meal Plan                           | both           |
      | Weekly Meal Plan                          | premium only   |
      | Personalized Exercise Plan                | premium only   |
      | 10-Day Quick Reversal Plan                | premium only   |
      | 30-Day Blood Sugar Reduction Plan         | premium only   |
      | Glucose Level Graph                       | both           |
      | BMI Calculation                           | both           |
      | Downloadable Meal Plan PDF                | premium only   |
      | Reminders (Medication, Appointments, Health Tasks) | premium only |


 Scenario: Verify Continue Free button visibility
 Given User completes onboarding process
  Then Continue Free button should be visible

Scenario: Verify Upgrade to Premium button visibility
  Given User completes onboarding process
  Then Upgrade to Premium button should be visible

Scenario: Verify Free Account label
Given User completes onboarding process
  Then Free Account label should be displayed

Scenario: Verify Premium Account label
Given User completes onboarding process
  Then Premium Account label should be displayed

Scenario: Verify upgrade message header
Given User completes onboarding process
  Then Upgrade message header should be displayed

Scenario: Verify terms and conditions text
Given User completes onboarding process
  Then Terms and Conditions text should be visible

 Scenario: Verify Continue Free button navigation
 Given User completes onboarding process
  When User clicks Continue Free button
  Then User should be navigated to Home page

Scenario: Verify Upgrade to Premium button navigation
Given User completes onboarding process
  When User clicks  Upgrade to Premium button
  Then User should be navigated to upgrade page
#Navigate to Upgrade page from different sections of the app (3 ways)

Scenario: Navigate to Upgrade page from Home page using View Full Plan
  Given User is logged in with Free account
  When User clicks View Full Plan on Home page
  Then User should be redirected to the subscription payment screen


Scenario: Navigate to Upgrade page from Exercise tab using View Full Schedule
  Given User is logged in with Free account
  When User navigates to Exercise tab
  When User clicks View Full Schedule
  Then User should be redirected to the subscription payment screen

Scenario: Navigate to Upgrade page from Dashboard
  Given User is logged in with Free account
  When User clicks Upgrade to Premium on Dashboard
  Then User should be redirected to the subscription payment screen

