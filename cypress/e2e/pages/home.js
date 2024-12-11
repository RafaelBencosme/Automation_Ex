class Home {
    selectProducts() {
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    }
}

export default Home;