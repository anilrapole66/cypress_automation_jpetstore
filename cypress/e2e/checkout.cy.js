import HomePage from '../pages/homePage'
import CatalogPage from '../pages/catalogPage'
import CartPage from '../pages/cartPage'
import CheckoutPage from '../pages/checkoutpage'
import checkoutpage from '../pages/checkoutpage'

describe('JPetStore Checkout Flow', () => {

  beforeEach(() => {
    cy.login()
    cy.visit('/Catalog.action')
  })

  it('User completes purchase successfully', () => {

    HomePage.goToFishCategory()

    CatalogPage.selectProduct()
    CatalogPage.addToCart()

    CartPage.proceedToCheckout()

    CheckoutPage.confirmAddress()
    CheckoutPage.confirmOrder()

    CheckoutPage.verifyOrderPlaced()

    checkoutpage.logout()

  })

})