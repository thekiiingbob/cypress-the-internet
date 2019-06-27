describe('key presses', () => {

    before(() => {
        cy.visit('/key_presses')
    })

    describe('type', () => {
        const alphabet = [
            'a', 'b', 'c', 'd', 'e', 
            'f', 'g', 'h', 'i', 'j',
            'k', 'l', 'm', 'n', 'o',
            'p', 'q', 'r', 's', 't',
            'u', 'v', 'w', 'x', 'y',
            'z'
        ]
    
        alphabet.forEach(letter => {
            it(`type the letter ${letter}`, () => {
                cy.get('#target').type(letter)
                cy.get('#result').should('have.text', `You entered: ${letter.toUpperCase()}`)
            })
        })
    })

})