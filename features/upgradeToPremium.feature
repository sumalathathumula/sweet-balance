Feature:Upgrade to Premium payment screen validation

#Page Title & Header
Scenario: Verify Upgrade to Premium page title
  Given User is in upgrade to premium page
  Then Page title should be "Upgrade to Premium"

Scenario: Verify upgrade page main description
  Given User is in upgrade to premium page
  Then User should see "Get personalized insights and advanced features to better manage your diabetes."

#Premium Features Section
Scenario: Verify premium features section text
  Given User is in upgrade to premium page
  Then User should see text "Premium Features"

  
Scenario Outline: Verify premium feature is displayed
  Given User is in upgrade to premium page
  Then User should see "<Feature>"

Examples:
  | Feature                    |
  | Personalized meal plans    |
  | Advanced analytics         |
  | Priority support           |

#Pricing Details
Scenario: Verify pricing information
  Given User is in upgrade to premium page     
  Then User should see "$9.99/month"

Scenario: Verify cancel anytime message
  Given User is in upgrade to premium page
  Then User should see cancel anytime text below the pricing details

#Payment Form
Scenario: Verify payment card section heading
  Given User is in upgrade to premium page
  Then User should see heading "Card Number"

Scenario: Verify card input fields
  Given User is in upgrade to premium page
  Then User should see card number field
  Then User should see expiration field
  Then User should see cvv field

Scenario: Verify payment button
  Given User is in upgrade to premium page
  Then User should see "Pay $9.99 USD" button

#Payment ValidationsScenario: Verify User able to do payment with empty fields
  Given User is in upgrade to premium page
  When User clicks the "Pay $9.99 USD" button without entering any card details
  Then User should see validation messages for all required fields

Scenario: Verify User able to do payment with invalid card number
  Given User is in upgrade to premium page
  When User clicks the "Pay $9.99 USD" button with invalid card number
  Then error message should be displayed

Scenario: Verify User able to do payment with expired card
  Given User is in upgrade to premium page
  When User clicks the "Pay $9.99 USD" button with expired card
  Then error message should be displayed

# Scenario: Verify User able to do payment with valid payment details
#   Given User is in upgrade to premium page
#   When User clicks the "Pay $9.99 USD" button with valid payment details
#   Then User should be redirected to the confirmation or home page with premium access enabled

