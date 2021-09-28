/// <reference types="Cypress" />

describe("visit a page", () => {
    beforeEach(function () {
        // ...
    });

    it("the page is loaded", () => {
        cy.intercept('GET', '/todos').as('todo');

        cy.visit("/");
        cy.get('#email').type('hughes.brian@company.com');
        cy.get('#password').type('admin');
        cy.get('.fuse-mat-button-large').click();

        cy.getBySelector('display name').should('include.text', 'Brian Hughes');
        cy.getBySelector('email').should('include.text', 'hughes.brian@company.com');
        
        cy.wait('@todo').its('response.statusCode').should('equal', 200);
    });
});
