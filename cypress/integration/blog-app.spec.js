/// <reference types="cypress" />

describe('Blog application', () => {
  it('should render simple Aurelia blog application', () => {
    cy.visit('/')
      .get('.message')
      .should('exist')
      .should('have.text', 'This is blog app!')
      .should('have.css', 'background-color')
      .and('equal', 'rgb(173, 216, 230)');
  });
});
