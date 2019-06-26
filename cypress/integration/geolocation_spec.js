it('geolocation shows current location', () => {
    const longitude = '28.417839'
    const latitude = '-81.581235'

    cy.visit('/geolocation', {
        onBeforeLoad(win) {
            cy.stub(win.navigator.geolocation, 'getCurrentPosition')
                .callsFake((cb) => {
                    return cb({coords: { latitude, longitude }});
                });
        }
    })


    cy.get('#demo').
        should('be.visible').
        and('have.text', 'Click the button to get your current latitude and longitude')

    cy.get('#content button').click()

    cy.get('#lat-value').should('have.text', latitude)
    cy.get('#long-value').should('have.text', longitude)
    cy.get('#map-link a').should('have.attr', 'href', `http://maps.google.com/?q=${latitude},${longitude}`)
})