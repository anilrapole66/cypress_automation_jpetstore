class SearchPage {
    selectItem(){
        cy.get('tbody > :nth-child(2) > :nth-child(1) > a').click();
    }

}
export default  new SearchPage();