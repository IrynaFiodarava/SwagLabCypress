///<reference types="cypress"/>
describe('User can log in unsuccessfully', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html');
    })
    it('Empty fields test', () => {
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required');

    });
    it('Empty field password test', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Password is required');
    });
    it('Empty fields test', () => {

        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required');
    });
    it.only('Empty fields test', () => {
        cy.get('[data-test="username"]').type('standard_userbla');
        cy.get('[data-test="password"]').type('secret_saucebla');
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');

    });

});