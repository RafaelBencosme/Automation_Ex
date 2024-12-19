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

      const randomNameOnCard = faker.person.fullName();
      const randomCardNumber = faker.finance.creditCardCVV();
      const randomCVC = faker.finance.creditCardCVV();
      const expirationMonth = faker.date.month();
      const randomYear = faker.date.future(5);
      const expirationYear = randomYear.getFullYear();

      payment.fillPaymentMethod(
        randomNameOnCard,
        randomCardNumber,
        randomCVC,
        expirationMonth,
        expirationYear
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

      const randomName = faker.person.fullName();
      const randomEmail = faker.internet.email();
      signUp.register(randomName, randomEmail);

      const randomPassword = faker.internet.password();
      const day = faker.number.int({ min: 1, max: 28 }).toString();
      const month = faker.date.month();
      const year = faker.number.int({ min: 1950, max: 2025 }).toString();
      const randomFirstName = faker.person.firstName();
      const randomLastName = faker.person.lastName();
      const randomCompany = faker.person.fullName();
      const randomAddress = faker.location.streetAddress();
      const randomState = faker.location.state();
      const randomCity = faker.location.city();
      const randomZip = faker.location.zipCode();
      const randomMobile = faker.phone.number("1+###-###-####");

      signUp.fillNewUserForm(
        randomPassword,
        day,
        month,
        year,
        randomFirstName,
        randomLastName,
        randomCompany,
        randomAddress,
        randomState,
        randomCity,
        randomZip,
        randomMobile
      );

      topNav.selectCart();
      cart.selectProceedToCheckout();

      checkout.selectPlaceOrder();

      const randomNameOnCard = faker.person.fullName();
      const randomCardNumber = faker.finance.creditCardCVV();
      const randomCVC = faker.finance.creditCardCVV();
      const expirationMonth = faker.date.month();
      const randomYear = faker.date.future(5);
      const expirationYear = randomYear.getFullYear();

      payment.fillPaymentMethod(
        randomNameOnCard,
        randomCardNumber,
        randomCVC,
        expirationMonth,
        expirationYear
      );
      payment.selectPay();

      checkout.orderPlaced.should("exist");
      topNav.selectLogout();
      signUp.loginTitle.should("exist");
    });
  });
});