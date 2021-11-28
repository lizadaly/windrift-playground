describe('Full test of the Time Machine story', () => {
    it('Checks that the story works', () => {
        cy.visit('/house-of-dust')
        cy.contains('A house of').should('exist')
    })
})
