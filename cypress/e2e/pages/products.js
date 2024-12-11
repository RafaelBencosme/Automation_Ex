class Products {
    selectProduct3() {
        cy.get(':nth-child(5) > .product-image-wrapper > .choose > .nav > li > a').click();
    }

    get product3Information() {
        return cy.get('.product-information');
    }

    setRandomQuantity() {
        const quantity = Math.floor(Math.random() * 20) + 1 ;
        cy.get('#quantity').clear().type(quantity);
    }

    selectAddToCart(){
        cy.get(':nth-child(5) > .btn').click();
    }

    selectPopupViewCart() {
        cy.get('u').click();
    }
}

export default Products;