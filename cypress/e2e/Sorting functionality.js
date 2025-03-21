///<reference types="cypress"/>
describe('Sorting of items', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('.inventory_list').should('be.visible');
    })
    //it('test1', () => {
        //cy.get('.product_sort_container').select('Name (Z to A)');
//Этот тест нужно доделать добавив провеки на резуальтат сортировки по имени
    //Дополнительно нужно сделать последний тест на возврат на дефолтную сортировку

   // });'
    it('User sort the items low to hight price', () => {
    // Получаем все цены в списке товаров
        cy.get('.product_sort_container').select('Price (low to high)');
        cy.get('.inventory_list')
        .find('.inventory_item_price') // Пример класса для цены товара
        .then(($prices) => {
            const prices = $prices.map((index, price) => {
                return parseFloat(price.innerText.replace('$', '').trim()); // Убираем символ доллара и пробелы, если это нужно
            }).get();

            // Сортируем цены по возрастанию
            const sortedPrices = [...prices].sort((a, b) => a - b);

            // Сравниваем, что массив цен после сортировки равен отсортированному массиву
            expect(prices).to.deep.equal(sortedPrices);
        });
    });
    //it('test3', () => {
// Получаем все цены в списке товаров
/*cy.get('.inventory_list')
    .find('.inventory_item_price') // Пример класса для цены товара
    .then(($prices) => {
        const prices = $prices.map((index, price) => {
            return parseFloat(price.innerText.replace('$', '').trim()); // Убираем символ доллара и пробелы, если это нужно
        }).get();

        // Сортируем цены по возрастанию
        const sortedPrices = [...prices].sort((a, b) => a - b);

        // Сравниваем, что массив цен после сортировки равен отсортированному массиву
        expect(prices).to.deep.equal(sortedPrices);
    });*/


});