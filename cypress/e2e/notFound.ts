/// <reference path="../support/index.d.ts" />

describe('NotFound', () => {
    it('should be render header menu', () => {
        cy.visit('/notfound');

        cy.findByText('404').should('be.visible');
        cy.findByText('Algo deu errado :(').should('be.visible');
        cy.findByText('Não conseguimos encontrar a página que você está procurando.').should('be.visible');
    });
});
