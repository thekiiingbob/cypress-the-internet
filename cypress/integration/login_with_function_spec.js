function login(name, password) {
    cy.visit('/login')
    cy.get('#username').type(name)
    cy.get('#password').type(password)
    cy.get('button').click()
}

it('can login with inline function', () => {
    const name = 'tomsmith'
    const password = 'SuperSecretPassword!'
    
    // Login
    login(name, password)

    const expectedText = 'Welcome to the Secure Area. When you are done click logout below.'

    // Verify elements
    cy.get('.subheader').should('have.text', expectedText)
    cy.get('a.button').should('be.visible')
})