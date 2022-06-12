/// <reference types='Cypress' />

describe('inspect items using chainings', () => {

    it('click item 1 using chaining', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.prdocutname').contains('Skinsheen').click();
    });

    it.only('click the first item using chaining', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click().then((itemName) => {
            console.log('item selected: ' + itemName.text());
        }); 
    });
    //using eq(n) to find the element with index of n

});
