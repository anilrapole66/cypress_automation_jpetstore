class CheckoutPage {

  confirmAddress() {
    cy.contains('Continue').click()
  }

  confirmOrder() {
    cy.contains('Confirm').click()
    cy.screenshot('order-confirmed')
  }

  verifyOrderPlaced() {
    cy.contains('Thank you, your order has been submitted.')
  }

  logout(){
    cy.get('[href="/actions/Account.action?signoff="]').click()
    
  }
}

export default new CheckoutPage()