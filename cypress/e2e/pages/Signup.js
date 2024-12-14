import { faker } from "@faker-js/faker";

class Signup {
  login(email, password) {
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password);
    cy.get('[data-qa="login-button"]').click();
  }

  register() {
    const randomName = faker.person.fullName();
    const randomEmail = faker.internet.email();

    cy.get('[data-qa="signup-name"]').type(randomName);
    cy.get('[data-qa="signup-email"]').type(randomEmail);
    cy.get('[data-qa="signup-button"]').click();
  }

  fillNewUserForm() {
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

    cy.get("#id_gender1").click();
    cy.get('[data-qa="password"]').type(randomPassword);
    cy.get('[data-qa="days"]').select(day);
    cy.get('[data-qa="months"]').select(month);
    cy.get('[data-qa="years"]').select(year);
    cy.get('[data-qa="first_name"]').type(randomFirstName);
    cy.get('[data-qa="last_name"]').type(randomLastName);
    cy.get('[data-qa="company"]').type(randomCompany);
    cy.get('[data-qa="address"]').type(randomAddress);
    cy.get('[data-qa="country"]').select("United States");
    cy.get('[data-qa="state"]').type(randomState);
    cy.get('[data-qa="city"]').type(randomCity);
    cy.get('[data-qa="zipcode"]').type(randomZip);
    cy.get('[data-qa="mobile_number"]').type(randomMobile);
    cy.get('[data-qa="create-account"]').click();
  }

  get loginTitle() {
    return cy.get(".login-form > h2").should("exist");
  }
}

export default Signup;
