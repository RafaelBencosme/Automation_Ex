class Cart {
    selectProceedToCheckout() {
        cy.get('.col-sm-6 > .btn').click();
    }

    selectModalLoginRegister() {
        cy.get('.modal-body > :nth-child(2) > a > u').click();
    }
}

export default Cart;