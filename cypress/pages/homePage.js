class HomePage {

  openSignIn() {
    cy.contains('Sign In').click()
  }

  goToSearch(){
    cy.get('[name="keyword"]').type(' {selectall}{backspace} ').type('fish');
    cy.get('[name="searchProducts"]').click();
  }

  goToFishCategory() {
    cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=FISH"] > img').click()
  }

  goToMyAccount(){
    cy.get('[href="/actions/Account.action?editAccountForm="]').click();
  }

}

export default new HomePage()