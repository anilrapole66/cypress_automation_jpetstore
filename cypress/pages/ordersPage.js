class OrderPage {
  orderid() {
    cy.get("tbody > :nth-child(2) > :nth-child(1) > a").click();
    cy.contains("Payment Details").should("exist");
  }
}
export default new OrderPage();
