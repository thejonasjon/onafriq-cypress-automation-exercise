Feature: Order Tops under Women > Tops

  Background: Navigate to the Website
    Given I visit url and have login successfully

  Scenario: Successfully order flow
    When I fetch and sort featured items
    And I ScrollUp - Navigate to Women >> Dress >> Tops section
    And I will add "Fancy Green Top" and "Summer White Top" to cart
    And I view cart, confirm product and I proceed to checkout
    And I will review and add a comment to my order
    And I will place the order with card details name, number, cvc, month, year
    Then I should see the order confirmation message