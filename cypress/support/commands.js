Cypress.Commands.add('login', (name, password) => {
    cy.visit('/login')
    cy.get('#username').type(name)
    cy.get('#password').type(password)
    cy.get('button').click()
})

Cypress.Commands.add('loginWithAPI', (name, password) => {
    cy.request({
        method: 'POST',
        url: '/authenticate',
        form: true,
        body: { username: name, password: password}
    })
    cy.visit('/secure')
})