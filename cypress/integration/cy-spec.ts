it('loads examples', () => {
  const baseUrl = 'http://localhost:4200';
  cy.visit(baseUrl);
  cy.contains('Here are some links to help you get started');
});

it('first test', () => {
  const baseUrl = 'http://localhost:4200';
  cy.visit(baseUrl);
  cy.contains('New Component').click();
  cy.get('.terminal > pre').should('contain.text', 'ng generate component xyz');
  cy.contains('Angular Material').click();
  cy.get('.terminal > pre').should('contain.text', 'ng add @angular/material');
});
