class LoginPage {
  enterValidCredential() {
    cy.get('input[name="username"]').type("j2ee");
    cy.get('input[name="password"]')
      .type("{selectall}{backspace}")
      .type("j2ee");
  }
  enterLogin() {
    cy.get('input[value="Login"]').click();
    cy.contains("Welcome");
  }

  goToRegister(){
    cy.contains("a", "Register Now!").click();
  }
}
export default new LoginPage();
