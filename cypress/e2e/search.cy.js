/// <reference types="cypress"/>

import cartPage from "../pages/cartPage";
import catalogPage from "../pages/catalogPage";
import checkoutpage from "../pages/checkoutpage";
import homePage from "../pages/homePage";
import searchPage from "../pages/searchPage";

describe("search pets flow", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/Catalog.action");
  });

  it('searching an pet', ()=>{
    homePage.goToSearch();
    searchPage.selectItem();
    catalogPage.addToCart();
    cartPage.proceedToCheckout();
    checkoutpage.confirmAddress();
    checkoutpage.confirmOrder();
    checkoutpage.logout();



  })

})