const LoginPage = {
    url: '/login',
    usernameField: '#username',
    passwordField: '#password',
    loginButton: 'button'
}

const SecurePage = {
    header: '.subheader',
    someButton: 'a.button'
}

function login(name, password) {
    cy.get(LoginPage.usernameField).type(name)
    cy.get(LoginPage.passwordField).type(password)
    cy.get(LoginPage.loginButton).click()
}

it('can login with page object', () => {
    const name = 'tomsmith'
    const password = 'SuperSecretPassword!'
    
    cy.visit(LoginPage.url)
    login(name, password)

    const expectedText = 'Welcome to the Secure Area. When you are done click logout below.'

    cy.get(SecurePage.header).should('have.text', expectedText)
    cy.get(SecurePage.someButton).should('be.visible')
})