class MyaccountPage{
    updateInfo(){
        cy.get('[name="account.email"]').type("{selectall}{backspace}").type("anil1@gmail.com");
        cy.get('[name="editAccount"]').click();

    }

    goToMyOrders(){
        cy.get('#Catalog > a').click();

    }

}

export default new MyaccountPage();