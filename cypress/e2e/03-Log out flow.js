///<reference types="cypress"/>
describe('User can log out successfully', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('.inventory_list').should('be.visible');
    })
    it('test1', () => {
        cy.get('.bm-burger-button > button').click();
        cy.get('#logout_sidebar_link').click();
    });


});