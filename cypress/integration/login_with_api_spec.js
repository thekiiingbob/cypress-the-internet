it('can login with api', () => {
    const name = 'tomsmith'
    const password = 'SuperSecretPassword!'
    
    cy.loginWithAPI(name, password)

    const expectedText = 'Welcome to the Secure Area. When you are done click logout below.'

    // Verify elements
    cy.get('.subheader').should('have.text', expectedText)
    cy.get('a.button').should('be.visible')
})