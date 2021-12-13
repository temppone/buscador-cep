/// <reference path="../support/index.d.ts" />

describe('Buscar endereço', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('should search address with success', () => {
        cy.findByRole('button', { name: 'Buscar endereço' }).click();

        cy.url().should('include', '/buscar-endereco')

        cy.findByLabelText(/Cep/i).type('36015370');
        cy.findByRole('button', { name: 'Buscar' }).click().wait(2000);


        cy.findByLabelText(/Logradouro/i).should('have.value', 'Rua Barão de Cataguases');
        cy.findByLabelText(/UF/i).should('have.value', 'MG');
        cy.findByLabelText(/Cidade/i).should('have.value', 'Juiz de Fora');
        cy.findByLabelText(/Bairro/i).should('have.value', 'Santa Helena');

        cy.findByRole('button', { name: "Imprimir" }).should('be.visible');
        cy.findByRole('button', { name: /Nova busca/i }).click();
    })

    it('should search address with error', () => {
        cy.findByRole('button', { name: 'Buscar endereço' }).click();

        cy.url().should('include', '/buscar-endereco')

        cy.findByLabelText(/Cep/i)
        cy.findByRole('button', { name: 'Buscar' }).click().wait(2000);
        cy.findByText('CEP é obrigatório');


        cy.findByLabelText(/Cep/i).type('2938382');
        cy.findByRole('button', { name: 'Buscar' }).click().wait(2000);
        cy.findByText('Deve ter pelo menos 8 caracteres.')
    })
});
