/* eslint-disable no-undef */
describe('add', () => {

  it('adds the two inputs correctly', () => {
    cy.visit('/')
    cy.get('input').first().type(3)
    cy.get('input').eq(1).type(4)
    cy.get('.primary-btn').click()
    cy.get('#result').contains(7)
  })
})