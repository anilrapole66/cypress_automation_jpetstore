class HomePage {

  openSignIn() {
    cy.contains('Sign In').click()
  }

  goToFishCategory() {
    cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=FISH"] > img').click()
  }

  goToMyAccount(){
    cy.get('[href="/actions/Account.action?editAccountForm="]').click();
  }
}

export default new HomePage()