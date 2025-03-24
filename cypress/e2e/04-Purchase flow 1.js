///<reference types="cypress"/>
describe('User can buy an item', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('.inventory_list').should('be.visible');
        cy.clearCookies();
    })
    it('User can add item to the card', () => {
        cy.get('.inventory_list > :nth-child(1)').should('be.visible');
        cy.get('#item_4_img_link > .inventory_item_img').should('be.visible');
        cy.get('#item_4_title_link > .inventory_item_name').should('be.visible');
        cy.get('#item_4_title_link > .inventory_item_name').should('be.visible');
        cy.get(':nth-child(1) > .pricebar > .btn_primary').should('have.text', 'ADD TO CART');
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click();
        cy.get('.btn_secondary').should('have.text', 'REMOVE');
        cy.get('.fa-layers-counter').should('have.text','1')
        cy.get('.shopping_cart_container').click();
        cy.get('#cart_contents_container').should('be.visible');
    })
    it('User can do checkout ', () => {
        cy.get('.shopping_cart_container').click();
        cy.get('#cart_contents_container').should('be.visible');
        cy.get('.cart_quantity').should("have.text", 1);
        cy.get('.cart_quantity').should('be.visible');
        cy.get('.inventory_item_name').should('be.visible');
        cy.get('.item_pricebar > .btn_secondary').should('have.text', 'REMOVE');
        cy.get('.cart_footer > .btn_secondary').should('have.text', 'Continue Shopping');
        cy.get('.btn_action').should('have.text', 'CHECKOUT').click();
        cy.get('[data-test="firstName"]').type('Standart');
        cy.get('[data-test="lastName"]').type('user');
        cy.get('[data-test="postalCode"]').type('10000')
        cy.get('.cart_cancel_link').should('be.visible')
        cy.get('.btn_primary').click();
        cy.get('.summary_info > :nth-child(2)').should('be.visible');
        cy.get('.summary_subtotal_label').should('be.visible');
        cy.get('.summary_tax_label').should('be.visible');
        cy.get('.summary_total_label').should('be.visible');
        cy.get('.btn_action').click();
        cy.get('#checkout_complete_container').should('include.text', 'THANK YOU FOR YOUR ORDER')
        .should('include.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get\n' +
            '                there!\n' +
            '            ')
            .find('img') // Находим картинку
            .should('have.attr', 'src') // Проверяем, что атрибут src существует
            .and('not.be.empty') // И не пустой

     })


});