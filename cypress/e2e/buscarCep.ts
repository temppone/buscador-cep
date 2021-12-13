/// <reference path="../support/index.d.ts" />

describe('Buscar endereço', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('should search cep with success', () => {
        cy.findByRole('button', { name: 'Buscar CEP' }).click();

        cy.url().should('include', '/buscar-cep').wait(3000);
        cy.findByText('UF').type('Minas Gerais').trigger('keydown', { keyCode: 40 }).type('{enter}').wait(3000);
        cy.findByText('Cidade').type('Juiz de Fora').trigger('keydown', { keyCode: 40 }).type('{enter}').wait(3000);
        cy.findByText('Logradouro').type('Rua')
        cy.findByRole('button', { name: 'Buscar' }).click().wait(3000);
        cy.findByText('Feito!').should('exist');
    })

    it('should search cep with error', () => {
        cy.findByRole('button', { name: 'Buscar CEP' }).click();

        cy.url().should('include', '/buscar-cep').wait(3000);
        cy.findByText('Logradouro').type('Rua')
        cy.findByRole('button', { name: 'Buscar' }).click().wait(3000);
        cy.findByText('O estado é obrigatório').should('exist');
        cy.findByText('A cidade é obrigatória').should('exist');
    })

    it('should display buttons', () => {
        cy.findByRole('button', { name: 'Buscar CEP' }).click();

        cy.findByRole('button', { name: 'Voltar' }).should('be.visible').click();
        cy.url().should('include', '/');
    })
})
