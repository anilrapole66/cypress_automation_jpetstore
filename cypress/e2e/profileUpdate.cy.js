/// <reference types="cypress"/>

import checkoutpage from "../pages/checkoutpage";
import homePage from "../pages/homePage";
import myAccountPage from "../pages/myAccountPage";

describe('Profile updation flow', ()=>{
    beforeEach (()=>{

        cy.login();
        cy.visit('/Catalog.action');

    })

it('update Profile', ()=>{

    homePage.goToMyAccount();
    myAccountPage.updateInfo();
    checkoutpage.logout();

})

})