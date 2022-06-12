/// <reference types='Cypress' />

describe('test contat us form via webdriveruni', () => {

    it('should be able to submit a succesful submission via contact us form', () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.document().should('have.prop', 'charset').and('eq', 'UTF-8'); //accesses the active document object and checks it contains a property equalling 'utf-8'
        cy.title().should('include', 'WebDriver | Contact Us'); //access document.title and check includes the string
        cy.url().should('include', '/contactus.html');
        cy.get('[name="first_name"]').type('Mohammad');
        cy.get('[name="last_name"]').type('Shafi');
        cy.get('[name="email"]').type('ibrahim-shafi@hotmail.co.uk');
        cy.get('textarea.feedback-input').type('this is a comment');
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!');
    });

    it('should not be able to submit a succesful submission via contact us form as all fields are required', () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Mohammad');
        cy.get('[name="last_name"]').type('Shafi');
        cy.get('textarea.feedback-input').type('this is a comment');
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error:');
    });

    //Triggering specific tests
    //using mocha -> it.only('step def', () => {});

});