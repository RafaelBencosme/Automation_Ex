class Signup {
    login(email, password) {
        cy.get('[data-qa="login-email"]').type(email);
        cy.get('[data-qa="login-password"]').type(password);
        cy.get('[data-qa="login-button"]').click();
    }

    get loginTitle() {
       return cy.get('.login-form > h2').should('exist');
    }
}

export default Signup;