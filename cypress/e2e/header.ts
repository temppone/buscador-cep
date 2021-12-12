/// <reference path="../support/index.d.ts" />

import { transform } from "cypress/types/lodash";

describe('Cypress TS', () => {
    it('should be render header menu', () => {
        cy.visit('/');
        cy.get('header').within(() => {
            cy.findByRole('button', { name: '' }).click().wait(1000);
            cy.contains('Home');
            cy.contains('Buscar endereço');
            cy.contains('Buscar CEP')
            cy.getByDataCy('switch-button')
            cy.findByRole('button', { name: '' }).click();
        });
    });
});


