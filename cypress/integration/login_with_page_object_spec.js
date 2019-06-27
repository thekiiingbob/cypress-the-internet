class LoginPage {
    // Elements
    static usernameField() { return cy.get('#username') }
    static passwordField() { return cy.get('#password') }
    static loginButton() { return cy.get('button') }

    // Actions
    static visit() {
        cy.visit('/login')
    }

    static login(name, password) {
        this.usernameField().type(name)
        this.passwordField().type(password)
        this.loginButton().click()
    }
}

class SecurePage {
    static header() { return cy.get('.subheader') }
    static someButton() { return cy.get('a.button') }
}

it('can login with page object', () => {
    const name = 'tomsmith'
    const password = 'SuperSecretPassword!'
    
    LoginPage.visit()
    LoginPage.login(name, password)

    const expectedText = 'Welcome to the Secure Area. When you are done click logout below.'

    SecurePage.header().should('have.text', expectedText)
    SecurePage.someButton().should('be.visible')
})