class CatalogPage {

  selectProduct() {
    cy.contains('FI-SW-01').click()
  }

  addToCart() {
    cy.contains('Add to Cart').click()
  }
}

export default new CatalogPage()