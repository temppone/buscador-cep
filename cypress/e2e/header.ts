/// <reference path="../support/index.d.ts" />

describe('Header', () => {
    it('should be render header menu', () => {
        cy.visit('/');
        cy.get('header').within(() => {
            cy.findByRole('button', { name: '' }).click().wait(1000);
            cy.contains('Home');
            cy.contains('Buscar endereço');
            cy.contains('Buscar CEP');
            cy.getByDataCy('switch-button').click();
            cy.findByRole('button').click().wait(1000);
        });
    });
});
