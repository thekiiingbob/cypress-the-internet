it('slow resources, no stub', () => {
    cy.server()
    cy.route('/slow_external').as('slowExternal') // This takes ~30 seconds to complete
    cy.visit('/slow')
    cy.wait('@slowExternal', {timeout: 60000}).its('status').should('equal', 503)
})

it('slow resources, with stub', () => {
    cy.server()
    cy.route('/slow_external', {status: '200'}).as('slowExternal')
    cy.visit('/slow')
    cy.wait('@slowExternal').its('status').should('equal', 200)
})

it('stub with body', () => {
    const timestamp = Date.now()

    cy.server()
    cy.route({
        url: '/slow_external',
        status: 200,
        response: timestamp
    }).as('slowExternal')

    cy.visit('/slow')

    cy.wait('@slowExternal').
        its('status').
        should('equal', 200)

    cy.get('@slowExternal').
        its('response').
        should('have.property', 'body', timestamp)
})