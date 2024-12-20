import TopNavigation from "./Components/TopNavigation";
import Products from "./Pages/Products";
import Cart from "./pages/cart";
import Checkout from "./Pages/Checkout";
import Payment from "./pages/payment";
import Signup from "./pages/signup";
import { faker } from "@faker-js/faker";

describe("Automation_Exercise", () => {
  const topNav = new TopNavigation();
  const products = new Products();
  const cart = new Cart();
  const checkout = new Checkout();
  const payment = new Payment();
  const signUp = new Signup();

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

      const randomYear = faker.date.future(5);
      
      payment.fillPaymentMethod(
        faker.person.fullName(),
        faker.finance.creditCardCVV(),
        faker.finance.creditCardCVV(),
        faker.date.month(),
        randomYear.getFullYear()
      );
      payment.selectPay();

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

      signUp.register(
        faker.person.fullName(), 
        faker.internet.email()
      );

      signUp.fillNewUserForm(
        faker.internet.password(),
        faker.number.int({ min: 1, max: 28 }).toString(),
        faker.date.month(),
        faker.number.int({ min: 1950, max: 2025 }).toString(),
        faker.person.firstName(),
        faker.person.lastName(),
        faker.person.fullName(),
        faker.location.streetAddress(),
        faker.location.state(),
        faker.location.city(),
        faker.location.zipCode(),
        faker.phone.number("1+###-###-####")
      );

      topNav.selectCart();
      cart.selectProceedToCheckout();

      checkout.selectPlaceOrder();

      const randomYear = faker.date.future(5);

      payment.fillPaymentMethod(
        faker.person.fullName(),
        faker.finance.creditCardNumber(),
        faker.finance.creditCardCVV(),
        faker.date.month(),
        randomYear.getFullYear()
      );
      payment.selectPay();

      checkout.orderPlaced.should("exist");
      topNav.selectLogout();
      signUp.loginTitle.should("exist");
    });
  });
});