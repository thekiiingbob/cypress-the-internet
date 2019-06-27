it('spy on alert', () => {
    cy.visit('/javascript_alerts')

    cy.window().then(win => {
        cy.spy(win, 'alert').as('alertSpy')
    })

    cy.contains('Click for JS Alert').click()
    cy.get('@alertSpy').should('have.been.calledWith', 'I am a JS Alert')
    cy.get('#result').should('have.text', 'You successfuly clicked an alert')
})

it('spy on alert, stub log', () => {
    cy.visit('/javascript_alerts')

    cy.window().then(win => {
        cy.spy(win, 'alert').as('alertSpy')
        cy.stub(win, 'log', () => {
            const result = win.document.getElementById('result');
            result.innerHTML = "I'm the captain now...";
        }).as('logStub')
    })

    cy.contains('Click for JS Alert').click()
    cy.get('@alertSpy').should('have.been.calledWith', 'I am a JS Alert')
    cy.get('@logStub').should('have.been.calledOnce')
    cy.get('#result').should('have.text', "I'm the captain now...")
})

it('stub function on window', () => {
    cy.visit('/javascript_alerts')

    cy.window().then(win => {
        cy.spy(win, 'alert').as('alertSpy')
        cy.spy(win, 'log').as('logSpy')

        cy.stub(win, 'jsAlert', () => {
            win.alert('Cypress rocks!')
            win.log('Did you see the alert?')
        }).as('jsAlertStub')
    })

    cy.contains('Click for JS Alert').click()
    cy.get('@alertSpy').should('have.been.calledWith', 'Cypress rocks!')
    cy.get('@logSpy').should('have.been.calledWith', 'Did you see the alert?')
    cy.get('@jsAlertStub').should('have.been.calledOnce')
    cy.get('#result').should('have.text', 'Did you see the alert?')
})


