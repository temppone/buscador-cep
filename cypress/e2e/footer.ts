/// <reference path="../support/index.d.ts" />

describe('Footer', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should display the footer', () => {
        cy.get('footer').should('exist');
    });

    it('should display the footer text', () => {
        cy.get('footer').contains('© 2021');
    });
}
);
