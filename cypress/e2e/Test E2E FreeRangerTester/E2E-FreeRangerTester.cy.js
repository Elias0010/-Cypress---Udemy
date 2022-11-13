describe ('Suite Test of FreeRangerTester', () => { 
beforeEach( () => {
cy.visit('https://www.freerangetesters.com/')
})

it('Test Case - Interface ', () => {
cy.contains('Empezá a aprender!').should('exist')
cy.title().should('include','Aprender Testing | Free Range Testers')
cy.xpath('//*[@id="comp-l02x1m8d2label"]').click()
cy.get(' [data-testid="linkElement"] > ._1Qjd7').should('have.length', 12)


})


/*it('Test Case - checked ', () => {
    
    cy.get('').should('be.checked')
    
    
    })

    it('Test Case - disable ', () => {
    
        cy.get('').should('be.disabled')
        
        
        })*/
    


})
