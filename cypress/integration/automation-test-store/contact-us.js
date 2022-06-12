/// <reference types='Cypress' />

describe('test contat us form via automation test store', () => {

    it.only('should be able to submit a succesful submission via contact us form', () => {
        cy.visit('https://automationteststore.com/');
        cy.get("[href$='contact']").click().then((tabName) => {
            cy.log(tabName.text());
        }); //the selector is any element with a href ending with contct (shown by $)
        cy.get('[name="first_name"]').type('Mohammad');
        cy.get('#ContactUsFrm_email').type('ibrahim-shafi@hotmail.co.uk');
        cy.get('#ContactUsFrm_enquiry').type('this is a comment');
        cy.get("button[title='Submit']").click();
    });

    it('should be able to submit a succesful submission via contact us form using xpath selectors', () => {
        cy.visit('https://automationteststore.com/');
        cy.xpath("//a[contains(@href, 'contact')]").click();
        cy.get('[name="first_name"]').type('Mohammad');
        cy.get('#ContactUsFrm_email').type('ibrahim-shafi@hotmail.co.uk');
        // cy.get(`/html//textarea[@id='ContactUsFrm_enquiry']`).type('this is a comment');
        // cy.get('.col-md-6 > .btn').click();
    });
});