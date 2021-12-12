/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
          * Custom command to get element by data-cy values
          * @example cy.getByDataCy('selector')
          */
        getByDataCy(selector: string): Chainable<JQuery<HTMLElement>>
    }
}
