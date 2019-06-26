describe('large dom', () => {
    before(() => {
        cy.visit('/large')
    })

    describe('nested', () => {
        it('can locate all N.1 values', () => {
            cy.get('.item-1').as('items').should('have.length', 50)
            
            cy.get('@items').each(el => {
                cy.wrap(el).invoke('attr', 'id').should('match', /sibling-\d+\.1/)
            })
        })

        it('can locate all N.2 values by filtering', () => {
            cy.get('#siblings').find('.large-12').as('items').should('have.length', 150)
            
            cy.get('@items').filter('.item-2').each(el => {
                cy.wrap(el).invoke('attr', 'id').should('match', /sibling-\d+\.2/)
            })
        })

        it('can locate all N.3 values, starting from N.2', () => {
            cy.get('.item-2').as('items').should('have.length', 50)
            
            cy.get('@items').each(el => {
                cy.wrap(el).next().invoke('attr', 'id').should('match', /sibling-\d+\.3/)
            })
        })
    
        it('can locate all N.1 values, starting from the N.3', () => {
            cy.get('.item-3').as('items').should('have.length', 50)
            
            cy.get('@items').each(el => {
                cy.wrap(el).parent().invoke('attr', 'id').should('match', /sibling-\d+\.1/)
            })
        })
    })

})