class TopNavigation {
    selectLogout(){
        cy.get('.nav > :nth-child(4) > a').click();
    }

    selectProducts() {
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    }

    selectCart(){
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    }
}

export default TopNavigation;