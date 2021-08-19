Cypress.Commands.add('submitFormFunction', () => {
  cy.get('[type="submit"]').contains('Pay').click()
})