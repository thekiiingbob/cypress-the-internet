it('modal appears', () => {
    cy.clearCookies()
    cy.visit('/entry_ad')
    cy.get('#modal').as('modal').should('be.visible')
    cy.get('@modal').find('.modal-title').should('contain', 'This is a modal window')
})

it('can bypass welcome modal', () => {
    cy.setCookie('viewedOuibounceModal', 'true')
    cy.visit('/entry_ad')
    cy.get('#modal').should('not.be.visible')
})

