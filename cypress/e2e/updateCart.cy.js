/// <reference types="cypress"/>

import checkoutpage from "../pages/checkoutpage";
import homePage from "../pages/homePage";
import catalogPage from "../pages/catalogPage";
import cartPage from "../pages/cartPage";

describe("Profile updation flow", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/Catalog.action");
  });

  it("update Profile", () => {
    homePage.goToFishCategory();
    catalogPage.selectProduct();
    catalogPage.addToCart();
    cartPage.updateQuantity();

    
    checkoutpage.logout();
  });
});
