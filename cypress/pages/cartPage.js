class CartPage {

  proceedToCheckout() {
    cy.get('[name="EST-1"]').type('0')
    cy.contains('Proceed to Checkout').click()
  }
}

export default new CartPage()