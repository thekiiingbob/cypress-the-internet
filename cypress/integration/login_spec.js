it('can login', () => {
    const name = 'tomsmith'
    const password = 'SuperSecretPassword!'
    
    // Login
    cy.visit('/login')

    // Perform login
    cy.get('#username').type(name)
    cy.get('#password').type(password)
    cy.get('button').click() // WTF Dave?!? No ID?

    const expectedText = 'Welcome to the Secure Area. When you are done click logout below.'

    // Verify elements
    cy.get('.subheader').should('have.text', expectedText)
    cy.get('a.button').should('be.visible')
})