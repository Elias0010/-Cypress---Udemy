import FreeRangeLogin from '../../../Pages/FreeRangeHome'
 const herokuapp = new FreeRangeLogin
 //Constante herokuapp para la clase FreeRangeLogin creada
describe('Ejemplos con fixture', () => {

    before(function () {
        herokuapp.navegateLogin()
        cy.fixture('credenciales').then(function (testdata){
            this.testdata = testdata
    })
})
it('Validate Successful Login', function () {

    cy.get('#username').type(this.testdata.username)
    cy.get('#password').type(this.testdata.password)
    herokuapp.loginBottom().contains('Login').click()
 
    cy.url().should('contain','/secure')
})





})