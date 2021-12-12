/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to visit google.com
         *@example cy.google()
            */
        google(): Chainable<Element>;
    }
}
