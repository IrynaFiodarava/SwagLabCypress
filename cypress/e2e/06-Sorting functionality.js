///<reference types="cypress"/>
describe('Sorting of items', () => {
    before(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('.inventory_list').should('be.visible');
    })
    it('User sorts the items in alphabetical order (A to Z)', () => {
        // Select sorting option "Name (A to Z)"
        cy.get('.product_sort_container').select('Name (A to Z)');

        // Wait for items to update after sorting
        cy.get('.inventory_item_name').should('have.length.greaterThan', 0);

        // Verify that items are sorted in ascending alphabetical order
        cy.get('.inventory_item_name').then(($names) => {
            const names = $names.map((index, name) => Cypress.$(name).text().trim()).get();

            // Copy the array and manually sort it in ascending order
            const sortedNames = [...names].sort();

            // Check that the actual order matches the expected sorted order
            expect(names).to.deep.equal(sortedNames);
        });
    });

    it('User sorts the items in reverse alphabetical order (Z to A)', () => {
        // Select sorting option "Name (Z to A)"
        cy.get('.product_sort_container').select('Name (Z to A)');

        // Wait for items to update after sorting
        cy.get('.inventory_item_name').should('have.length.greaterThan', 0);

        // Verify that items are sorted in descending alphabetical order
        cy.get('.inventory_item_name').then(($names) => {
            const names = $names.map((index, name) => Cypress.$(name).text().trim()).get();

            // Copy the array and manually sort it in descending order
            const sortedNames = [...names].sort().reverse();

            // Check that the actual order matches the expected sorted order
            expect(names).to.deep.equal(sortedNames);
        });
    });

    it('User sort the items low to high price', () => {

        cy.get('.product_sort_container').select('Price (low to high)');
        cy.get('.inventory_list')
        .find('.inventory_item_price')
        .then(($prices) => {
            const prices = $prices.map((index, price) => {
                return parseFloat(price.innerText.replace('$', '').trim());
            }).get();

            const sortedPrices = [...prices].sort((a, b) => a - b);

            expect(prices).to.deep.equal(sortedPrices);
        });
    });
    it('User sorts the items from high to low price', () => {

        cy.get('.product_sort_container').select('Price (high to low)');

        // Wait for items to update after sorting
        cy.get('.inventory_item').should('have.length.greaterThan', 0);

        // Verify that prices are sorted in descending order
        cy.get('.inventory_item_price').then(($prices) => {
            const prices = $prices.map((index, price) =>
                parseFloat(Cypress.$(price).text().replace('$', '').trim())
            ).get();

            // Copy the array and manually sort it in descending order
            const sortedPrices = [...prices].sort((a, b) => b - a);

            // Check that the actual order matches the expected sorted order
            expect(prices).to.deep.equal(sortedPrices);
        });
    });



});