class FreeRangeLogin {
    //Locators
    loginBottom(){
        return cy.get('.fa')
    }
 //Navegacion
 navegateLogin(){
    cy.visit("https://the-internet.herokuapp.com/login")
}

}
export default FreeRangeLogin