class Payment {
    fillPaymentMethod(nameOnCard, cardNumber, cvc, expirymMonth, expiryYear){
        cy.get('[data-qa="name-on-card"]').type(nameOnCard);
        cy.get('[data-qa="card-number"]').type(cardNumber);
        cy.get('[data-qa="cvc"]').type(cvc);
        cy.get('[data-qa="expiry-month"]').type(expirymMonth);
        cy.get('[data-qa="expiry-year"]').type(expiryYear);
        cy.get('[data-qa="pay-button"]').click();
    }
}

export default Payment;