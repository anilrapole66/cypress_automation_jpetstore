/// <reference types="cypress"/>
import loginPage from "../pages/loginPage";
import checkoutpage from "../pages/checkoutpage";

describe("login test flow", () => {
  it.only("open jpetstore", () => {
    cy.visit(
      "https://petstore.octoperf.com/actions/Account.action?signonForm=",
    );
    loginPage.enterValidCredential();
    loginPage.enterLogin();
    checkoutpage.logout();
  });
});
