describe('Automation_Excercice', () => {
    beforeEach(()=> {
        cy.visit('/');
    });
    
    it('Should be able to add to cart', () =>{
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.get(':nth-child(5) > .product-image-wrapper > .choose > .nav > li > a').click();
        cy.get('.product-information').should('exist');

        const quantity = Math.floor(Math.random() * 20) + 1 ;

        cy.get('#quantity').clear().type(quantity);
        cy.get(':nth-child(5) > .btn').click();
        cy.get('u').click();
        cy.get('.col-sm-6 > .btn').click();

        cy.get('.modal-body > :nth-child(2) > a > u').click();

        cy.get('[data-qa="login-email"]').type('faker@fakemail.com');
        cy.get('[data-qa="login-password"]').type('fakepassword');
        cy.get('[data-qa="login-button"]').click();

        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        cy.get('.col-sm-6 > .btn').click();
        cy.get(':nth-child(7) > .btn').click();

        cy.get('[data-qa="name-on-card"]').type('fake name');
        cy.get('[data-qa="card-number"]').type('fake card');
        cy.get('[data-qa="cvc"]').type('cvc');
        cy.get('[data-qa="expiry-month"]').type('exp');
        cy.get('[data-qa="expiry-year"]').type('year');
        cy.get('[data-qa="pay-button"]').click();

        cy.get('[data-qa="order-placed"] > b').should('exist');

        cy.get('.nav > :nth-child(4) > a').click();

        cy.get('.login-form > h2').should('exist');

        }); 
    });