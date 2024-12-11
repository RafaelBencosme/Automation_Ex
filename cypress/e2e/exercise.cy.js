import TopNavigation from "./Components/TopNavigation";
import Products from "./Pages/Products";
import Cart from "./pages/cart";
import Signup from "./pages/signup";
import Checkout from "./Pages/Checkout";
import Payment from "./pages/payment";

describe("Automation_Excercice", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should be able to add to cart", () => {
    const topNav = new TopNavigation();
    topNav.selectProducts();

    const products = new Products();
    products.selectProduct3();
    products.product3Information.should("exist");

    products.setRandomQuantity();
    products.selectAddToCart();
    products.selectPopupViewCart();

    const cart = new Cart();
    cart.selectProceedToCheckout();
    cart.selectModalLoginRegister();

    const signup = new Signup();
    signup.login("faker@fakemail.com", "fakepassword");

    topNav.selectCart();
    cart.selectProceedToCheckout();

    const checkout = new Checkout();
    checkout.selectPlaceOrder();

    const payment = new Payment();
    payment.fillPaymentMethod("fake name", "fake card", "cvc", "month", "year");
    checkout.orderPlaced.should("exist");
    topNav.selectLogout();
    signup.loginTitle.should("exist");
  });
});