/// <reference types="cypress"/>

import Header from "../common/header";
import DeleteAccount from "../pages/delete-account";
import RegistrationAndLogin from "../pages/registration-login";

const registrationAndLogin = new RegistrationAndLogin();
const header = new Header();
const deleteAccount = new DeleteAccount();
describe("User registration and login", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/");
    //assert that the homepage has loaded successfully
    header.getLogoLink().should("exist");
  });
  it("Test01 Register and delete user", () => {
    header.getLoginLink().click();
    //assert that we are on the login page
    registrationAndLogin
      .getSignUpFormHeader()
      .should("contain.text", "New User Signup!");
    // signup
    registrationAndLogin.signUp({
      name: "neville",
      email: "neville+test@gmail.com",
    });
    //assert
    registrationAndLogin
      .getAccountInfoHeader()
      .should("contain.text", "Enter Account Information");
    //create account
    registration.createAccount({
      password: "12345678",
      days: "12",
      month: "6",
      years: "1998",
      firstName: "John",
      lastName: "Haris",
      company: "Quality Assurance LTD",
      address: "460 Commerce Parkway Fortville",
      country: "United States",
      state: "Indiana",
      city: "Fortville",
      zipcode: "46040",
      mobileNumber: "897-040-1859",
    });
    //assert that account was created
    registrationAndLogin
      .getAccountCreatedHeader()
      .should("be.visible")
      .should("contain.text", "Account Created!");
    registrationAndLogin.getContinueButton().click();

    //assert that user is logged in
    header.getProfileLink().should("contain.text", "Logged in as");
    //delete account
    header.getDeleteAccountLink().click();
    //assert that account was deleted successfully
    deleteAccount
      .getHeader()
      .should("be.visible")
      .should("contain.text", "Account Deleted!");
  });

  it("Test02 Register and logout user", () => {
    header.getLoginLink().click();
    //assert that login page was opened successfully
    registrationAndLogin
      .getSignUpFormHeader()
      .should("contain.text", "New User Signup!");
    //Sign up
    registrationAndLogin.signUp({
      name: "neville",
      email: "neville+test@gmail.com",
    });
    //assert that account was created
    registrationAndLogin
      .getAccountInfoHeader()
      .should("contain.text", "Enter Account Information");
    //create account
    registrationAndLogin.createAccount({
      password: "12345678",
      days: "12",
      month: "6",
      years: "1998",
      firstName: "John",
      lastName: "Haris",
      company: "Quality Assurance LTD",
      address: "460 Commerce Parkway Fortville",
      country: "United States",
      state: "Indiana",
      city: "Fortville",
      zipcode: "46040",
      mobileNumber: "897-040-1859",
    });
    //assert that account was created
    registrationAndLogin
      .getAccountCreatedHeader()
      .should("be.visible")
      .should("contain.text", "Account Created!");
    cy.get("a[data-qa='continue-button']").click();

    //assert user is logged in
    header.getProfileLink().should("contain.text", "Logged in as");
    //logout user
    header.getLogoutLink().click();
  });
  it("Test03 Register user with existing email", () => {
    header.getLoginLink().click();
    //assert that login page was opened successfully
    cy.get("#form .signup-form h2").should("contain.text", "New User Signup!");
    //Sign up
    registrationAndLogin.signUp({
      name: "neville",
      email: "neville+test@gmail.com",
    });
    //assert that user cannot register with existing email
    registrationAndLogin
      .getErrorElement()
      .should("exist")
      .should("contain.text", "Email Address already exist!");
  });
  it("Test04 Login and logout user", () => {
    header.getLoginLink().click();
    //assert that login page was opened successfully
    registrationAndLogin
      .getLoginFormHeader()
      .should("contain.text", "Login to your account");
    //Login
    registrationAndLogin.logIn({
      password: "12345678",
      email: "neville+test@gmail.com",
    });

    //assert that user is logged in
    header.getProfileLink().should("contain.text", "Logged in as");
    //logout user
    header.getLogoutLink().click();
  });
  it("Test05 Login with invalid credentials", () => {
    header.getLoginLink().click();
    //assert that login page was opened successfully
    registrationAndLogin
      .getLoginFormHeader()
      .should("contain.text", "Login to your account");
    //assert that error element does not exist
    registrationAndLogin.getErrorElement().should("not.exist");
    //Login
    registrationAndLogin.logIn({
      email: "crossg+test@gmail.com",
      password: "233233332",
    });

    //assert that user can not sign in with incorrect credentials
    registrationAndLogin
      .getErrorElement()
      .should("exist")
      .should("contain.text", "Your email or password is incorrect!");
  });
  it.only("Test06 Login and delete user account", () => {
    header.getLoginLink().click();
    //assert that login page was opened successfully
    registrationAndLogin
      .getLoginFormHeader()
      .should("contain.text", "Login to your account");
    //Login
    registrationAndLogin.logIn({
      password: "12345678",
      email: "neville+test@gmail.com",
    });

    //assert that user is logged in
    header.getProfileLink().should("contain.text", "Logged in as");
    //delete account
    header.getDeleteAccountLink().click();
    //assert that account was deleted successfully
    deleteAccount
      .getHeader()
      .should("be.visible")
      .should("contain.text", "Account Deleted!");
  });
});
