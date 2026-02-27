class RegisterPage {
  enterDetails() {
    cy.get('input[name="username"]').type("Anil123");
    cy.get('input[name="password"]').type("Anil@123");
    cy.get('input[name="repeatedPassword"]').type("Anil@123");
    cy.get('input[name="account.firstName"]').type("Anil");
    cy.get('input[name="account.lastName"]').type("rapole");
    cy.get('input[name="account.email"]').type("anil@gmail.com");
    cy.get('input[name="account.phone"]').type("9876523457");
    cy.get('input[name="account.address1"]').type("1-40");
    cy.get('input[name="account.address2"]').type("atmakur");
    cy.get('input[name="account.city"]').type("sspet");
    cy.get('input[name="account.state"]').type("ts");
    cy.get('input[name="account.zip"]').type("sanga");
    cy.get('input[name="account.country"]').type("india");
    cy.get('input[name="newAccount"]').click();
  }
}

export default new RegisterPage();
