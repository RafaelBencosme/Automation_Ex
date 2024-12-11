class Checkout {
    selectPlaceOrder() {
        cy.get(':nth-child(7) > .btn').click();
    }
    
    selectLogout(){
        cy.get('.nav > :nth-child(4) > a').click();
    }
    
    get orderPlaced() {
        return cy.get('[data-qa="order-placed"] > b')
    }

}

export default Checkout;