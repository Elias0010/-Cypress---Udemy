

describe('Test Suite', () => {
    beforeEach( () => {
        cy.visit(' https://the-internet.herokuapp.com/')
        })

it('Nueva Pestaña', () => {
cy.contains('Multiple Windows').click()
cy.contains('Click Here').invoke('removeAttr','target').click()


})
   
it('Validar IMG Dinamicos', () => {
    cy.contains('Dynamic Content').click()
    cy.get('.large-10').eq(3).should('be.visible')
    
    
    })

   /* it('Invoke', () => {
        cy.contains('Dynamic Content').should('be.hidden')
        .invoke('show')
        .should('be.visible')
        
        
        })*/

})

describe('Test Suite', () => {
    beforeEach( () => {
        cy.visit(' https://the-internet.herokuapp.com/') })


    it('Validar Checkbox', () => {
        cy.contains('Checkboxes').click()
        cy.get('[checked=""]').uncheck()
        cy.get('#checkboxes > :nth-child(1)').check()
        
        
        })
        it('Validar Alerta en ContextMenu', () => {
            cy.contains('Context Menu').click()
            cy.get('#hot-spot').rightclick()
            cy.on("window:alert",(alert)=>{
                expect(alert).to.equal("You selected a context menu")
            })
            
            
            
            })

            it('Validar que las Promesas se Resuelvan', () => {
               let waited = false

               function waitOneSecond() {

                return new Cypress.Promise((resolve, reject)=> {
                  setTimeout(()=> {
                    waited = true
                    resolve("foo")
                },1000)
                    
                })
                
            }
            cy.wrap(null).then(() => {

                return waitOneSecond().then((str) => {
                 expect(str).to.eq('foo')
                 expect(waited).to.be.true

                })
            })


})
})