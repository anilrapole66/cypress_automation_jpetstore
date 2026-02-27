Cypress.Commands.add("login", () => {

  cy.session("jpetstore-session", () => {

    cy.request({
      method: "POST",
      url: "/Account.action",
      form: true,
      body: {
        username: "Anil123",
        password: "Anil@123",
        signon: "Login"
      }
    }).then((resp) => {
      expect(resp.status).to.eq(200)
    });

  }, {
    validate() {
      cy.visit("/Catalog.action");
      cy.contains("Welcome").should("exist");
    }
  });

});