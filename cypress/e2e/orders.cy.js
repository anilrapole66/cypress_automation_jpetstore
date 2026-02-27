import homePage from "../pages/homePage";
import myAccountPage from "../pages/myAccountPage";
import ordersPage from "../pages/ordersPage";
import checkoutpage from "../pages/checkoutpage";

describe("showing orders", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/Catalog.action");
  });

  it("verify order", () => {
    homePage.goToMyAccount();
    myAccountPage.goToMyOrders();
    ordersPage.orderid();
    checkoutpage.logout()

  });
});
