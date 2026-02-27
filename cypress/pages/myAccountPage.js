class MyaccountPage{
    goToMyOrders(){
        cy.get('#Catalog > a').click();
        
    }

}

export default new MyaccountPage();