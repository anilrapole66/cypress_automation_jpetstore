import homePage from "../pages/homePage";
import loginPage from "../pages/loginPage";
import registerPage from "../pages/registerPage";

describe("login test flow", () => {
  it("open jpetstore", () => {
    cy.visit("https://petstore.octoperf.com/actions/Catalog.action");
    
    homePage.openSignIn();
    loginPage.goToRegister();
    registerPage.enterDetails();
    
  });
});
