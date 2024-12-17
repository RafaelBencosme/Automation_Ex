import TopNavigation from "./Components/TopNavigation";
import Products from "./Pages/Products";
import Cart from "./pages/cart";
import Checkout from "./Pages/Checkout";
import Payment from "./pages/payment";
import Signup from "./pages/signup";

describe("Automation_Exercise", () => {
  const topNav = new TopNavigation();
  const products =new Products();
  const cart =  new Cart();
  const signUp = new Signup();
  const checkout = new Checkout();
  const payment = new Payment();

  beforeEach(() => {
    cy.visit("/");
  });

  describe("Complete Purchase", () => {
    it("Should be able to add to cart and log in", () => {
      topNav.selectProducts();

      products.selectProduct3();
      products.product3Information.should("exist");

      products.setRandomQuantity();
      products.selectAddToCart();
      products.selectPopupViewCart();

      cart.selectProceedToCheckout();
      cart.selectModalLoginRegister();

      signUp.login("faker@fakemail.com", "fakepassword");

      topNav.selectCart();
      cart.selectProceedToCheckout();

      checkout.selectPlaceOrder();

      payment.fillPaymentMethod(
        "fake name",
        "fake card",
        "cvc",
        "month",
        "year"
      );
      checkout.orderPlaced.should("exist");
      topNav.selectLogout();
      signUp.loginTitle.should("exist");
    });

    it("Should be able to add to cart and create a user", () => {
      topNav.selectProducts();

      products.selectProduct3();
      products.product3Information.should("exist");

      products.setRandomQuantity();
      products.selectAddToCart();
      products.selectPopupViewCart();

      cart.selectProceedToCheckout();
      cart.selectModalLoginRegister();

      const signup = new Signup();
      signup.register();
      signup.fillNewUserForm();
      
      topNav.selectCart();
      cart.selectProceedToCheckout();

      checkout.selectPlaceOrder();

      payment.fillPaymentMethod(
        "fake name",
        "fake card",
        "cvc",
        "month",
        "year"
      );
      checkout.orderPlaced.should("exist");
      topNav.selectLogout();
      signUp.loginTitle.should("exist");
    });
  });
});