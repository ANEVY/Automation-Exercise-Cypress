class Registration {
  signUp({ name, email }) {
    cy.get("input[data-qa='signup-name']").type(name);
    cy.get("input[data-qa='signup-email']").type(email);
    cy.get("button[data-qa='signup-button']").click();
  }
  createAccount({
    password,
    days,
    month,
    years,
    firstName,
    lastName,
    company,
    address,
    country,
    state,
    city,
    zipcode,
    mobileNumber,
  }) {
    cy.get("#id_gender1").check();
    cy.get("input[data-qa='password']").type(password);
    cy.get("select[data-qa='days']").select(days);
    cy.get("select[data-qa='months']").select(month);
    cy.get("select[data-qa='years']").select(years);
    cy.get("#newsletter").click();
    cy.get("#optin").click();
    cy.get("input[data-qa='first_name']").type(firstName);
    cy.get("input[data-qa='last_name']").type(lastName);
    cy.get("input[data-qa='company']").type(company);
    cy.get("input[data-qa='address']").type(address);
    cy.get("select[data-qa='country']").select(country);
    cy.get("input[data-qa='state']").type(state);
    cy.get("input[data-qa='city']").type(city);
    cy.get("input[data-qa='zipcode']").type(zipcode);
    cy.get("input[data-qa='mobile_number']").type(mobileNumber);
    cy.get("button[data-qa='create-account']").click();
  }
  getSignUpFormHeader() {
    return cy.get("#form .signup-form h2");
  }
  getAccountInfoHeader() {
    return cy.get("#form .login-form > h2.title");
  }
  getAccountCreatedHeader() {
    return cy.get("h2[data-qa='account-created']");
  }
  getContinueButton() {
    return cy.get("a[data-qa='continue-button']");
  }
}
export default Registration;
