class Signup {
  login(email, password) {
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password);
    cy.get('[data-qa="login-button"]').click();
  }

  register(name, email) {
    cy.get('[data-qa="signup-name"]').type(name);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();
  }

  fillNewUserForm(
      password,
      day,
      month,
      year, 
      firstName, 
      lastName, 
      company, 
      address, 
      state, 
      city, 
      zip, 
      mobile
    ) {

    cy.get("#id_gender1").click();
    cy.get('[data-qa="password"]').type(password);
    cy.get('[data-qa="days"]').select(day);
    cy.get('[data-qa="months"]').select(month);
    cy.get('[data-qa="years"]').select(year);
    cy.get('[data-qa="first_name"]').type(firstName);
    cy.get('[data-qa="last_name"]').type(lastName);
    cy.get('[data-qa="company"]').type(company);
    cy.get('[data-qa="address"]').type(address);
    cy.get('[data-qa="country"]').select("United States");
    cy.get('[data-qa="state"]').type(state);
    cy.get('[data-qa="city"]').type(city);
    cy.get('[data-qa="zipcode"]').type(zip);
    cy.get('[data-qa="mobile_number"]').type(mobile);
    cy.get('[data-qa="create-account"]').click();
  }

  get loginTitle() {
    return cy.get(".login-form > h2").should("exist");
  }
}

export default Signup;