///<reference types="cypress"/>
describe('User can log in successfully', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html');
    })
    it('test1', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('.inventory_list').should('be.visible');
    });


});