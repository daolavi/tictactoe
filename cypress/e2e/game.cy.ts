describe('tictactoe game', () => {
  it('X wins when 3 X in a row', () => {
    cy.visit('/')
    cy.get('[data-cy="square-0"]').click()
    cy.get('[data-cy="square-3"]').click()
    cy.get('[data-cy="square-1"]').click()
    cy.get('[data-cy="square-4"]').click()
    cy.get('[data-cy="square-2"]').click()
    cy.get('.game-info').within(() => {
      cy.contains('Winner: X').should('be.visible')
    })
  })

  it('Board is empty when resetting game', () => {
    cy.visit('/')
    cy.get('[data-cy="square-0"]').click()
    cy.get('[data-cy="square-3"]').click()

    cy.get('.game-info').within(() => {
      cy.get('button').click()
    })

    cy.get('[data-cy="square-0"]').should('have.text', '')
    cy.get('[data-cy="square-3"]').should('have.text', '')
  })
})