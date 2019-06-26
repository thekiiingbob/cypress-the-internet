it('element exists, but hidden', () => {
    cy.visit('/dynamic_loading/1')

    cy.get('#finish').
        find('h4').
        as('hello').
        should('exist').
        and('not.be.visible')

    cy.get('#start').find('button').click()

    cy.get('@hello').
        should('be.visible').
        and('have.text', "Hello World!")
})

it('element does not exist', () => {
    cy.visit('/dynamic_loading/2')

    cy.get('#finish').
        should('not.exist').
        and('not.be.visible')

    cy.get('#start').find('button').click()

    cy.get('#finish').
        find('h4').
        should('be.visible').
        and('have.text', "Hello World!")
})