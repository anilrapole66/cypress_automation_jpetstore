class CartPage {

  updateQuantity(){
    cy.get('[name="EST-1"]').type('{selectall}{backspace}').type('3')
    cy.get('[name="updateCartQuantities"]').click()
    cy.get('[name="EST-1"]').should('have.value', '3')
    
  }

  proceedToCheckout() {
    cy.contains('Proceed to Checkout').click()
  }
}

export default new CartPage()