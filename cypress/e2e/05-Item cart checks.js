///<reference types="cypress"/>
describe('User can buy an item', () => {
    before(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('.inventory_list').should('be.visible');
    });
    beforeEach(()=>{
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload();
    });

    it('User can go to the item card and return', () => {
        cy.get('#item_4_title_link > .inventory_item_name').click();
        cy.get('.inventory_details_back_button').should('be.visible').click({ force: true });
        cy.get('.inventory_list').should('be.visible');
    });
    it('User can go to the item card and remove item to the card', () => {
        cy.get('#item_4_title_link > .inventory_item_name').click();
        cy.get('.inventory_details_img').should('be.visible');
        cy.get('.inventory_details_name').should('be.visible');
        cy.get('.inventory_details_desc').should('be.visible');
        cy.get('.inventory_details_desc').should('be.visible');
        cy.get('.btn_primary').click();
        cy.get('.btn_secondary').should('have.text','REMOVE');
        cy.get('.fa-layers-counter').should('have.text','1');
        cy.get('.btn_secondary').click({ force: true });
        cy.get('.btn_primary').should('have.text','ADD TO CART');


    })
    it('User can go to the item card and add item to the card', () => {
        cy.get('.inventory_details_name').click();
        cy.get('.inventory_details_img').should('be.visible');
        cy.get('.inventory_details_name').should('be.visible');
        cy.get('.inventory_details_desc').should('be.visible');
        cy.get('.inventory_details_desc').should('be.visible');
        cy.get('.btn_primary').click();
        cy.get('.btn_secondary').should('have.text','REMOVE');
        cy.get('.fa-layers-counter').should('have.text','1');
        cy.get('.shopping_cart_container').click();
        cy.get('#cart_contents_container').should('be.visible');
    });

});