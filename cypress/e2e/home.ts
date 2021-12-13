/// <reference path="../support/index.d.ts" />

describe('Home', () => {
    it('should be render header menu', () => {
        cy.visit('/');
        cy.findByText(/Bem vindo ao BuscadorCEP!/i).should('exist');
        cy.findByText(
            /O aplicativo BuscadorCEP! permite que você encontre códigos de endereçamento postais./i
        ).should('be.visible');
        cy.findByText(
            /Se você já tiver o CEP em mãos e gostaria de buscar seu endereço, o BuscadorCEP! Também vai te ajudar!/i
        ).should('be.visible');

        cy.getByDataCy('maps-home').should('be.visible');

        cy.findByRole('button', { name: /Buscar endereço/i }).should('be.visible');
        cy.findByRole('button', { name: /Buscar CEP/i }).should('be.visible');

    });
});
