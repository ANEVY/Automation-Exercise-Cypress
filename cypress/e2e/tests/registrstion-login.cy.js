/// <reference types="cypress"/>

import Header from "../common/header";
import Registration from "../pages/registration";

const registration = new Registration();
const header = new Header();
describe("User registration and login", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/");
    //assert that the homepage has loaded successfully
    header.getLogoLink().should("exist");
  });
  it.only("Test01 Register and delete user", () => {
    header.getLoginLink().click();
    //assert that we are on the registration page
    registration
      .getSignUpFormHeader()
      .should("contain.text", "New User Signup!");
    // signup
    registration.signUp({ name: "neville", email: "neville+test@gmail.com" });
    //assert
    registration
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
    registration
      .getAccountCreatedHeader()
      .should("be.visible")
      .should("contain.text", "Account Created!");
    registration.getContinueButton().click();

    //assert that user is logged in
    header.getProfileLink().should("contain.text", "Logged in as");
    header.getDeleteAccountLink().click();
    cy.get("h2[data-qa='account-deleted']")
      .should("be.visible")
      .should("contain.text", "Account Deleted!");
  });

  it("Test02 Register and logout user", () => {
    cy.get("#header a[href='/login']").click();
    //assert that
    cy.get("#form .signup-form h2").should("contain.text", "New User Signup!");
    //enter key
    cy.get("input[data-qa='signup-name']").type("neville");
    cy.get("input[data-qa='signup-email']").type("neville+test@gmail.com");
    cy.get("button[data-qa='signup-button']").click();
    //assert
    cy.get("#form .login-form > h2").should(
      "contain.text",
      "Enter Account Information"
    );
    //enter details
    cy.get("#id_gender1").check();
    cy.get("input[data-qa='password']").type("12345678");
    cy.get("select[data-qa='days']").select("12");
    cy.get("select[data-qa='months']").select("6");
    cy.get("select[data-qa='years']").select("1998");
    cy.get("#newsletter").click();
    cy.get("#optin").click();
    cy.get("input[data-qa='first_name']").type("John");
    cy.get("input[data-qa='last_name']").type("Haris");
    cy.get("input[data-qa='company']").type("Quality Assurance LTD");
    cy.get("input[data-qa='address']").type("460 Commerce Parkway Fortville");
    cy.get("select[data-qa='country']").select("Canada");
    cy.get("input[data-qa='state']").type("Indiana");
    cy.get("input[data-qa='city']").type("Fortville");
    cy.get("input[data-qa='zipcode']").type("46040");
    cy.get("input[data-qa='mobile_number']").type("897-040-1859");
    cy.get("button[data-qa='create-account']").click();
    //assert
    cy.get("h2[data-qa='account-created']")
      .should("be.visible")
      .should("contain.text", "Account Created!");
    cy.get("a[data-qa='continue-button']").click();

    //assert
    cy.get(
      "#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(10) > a"
    ).should("contain.text", "Logged in as");

    cy.get("a[href='/logout']").click();
  });
  it("Test03 Register user with existing email", () => {
    cy.get("#header a[href='/login']").click();
    //assert that
    cy.get("#form .signup-form h2").should("contain.text", "New User Signup!");
    //enter key
    cy.get("input[data-qa='signup-name']").type("neville");
    cy.get("input[data-qa='signup-email']").type("neville+test@gmail.com");
    cy.get("button[data-qa='signup-button']").click();
    //assert
    cy.get("#form form > p")
      .should("exist")
      .should("contain.text", "Email Address already exist!");
  });
  it("Test04 Login and logout user", () => {
    cy.get("#header a[href='/login']").click();
    //assert that
    cy.get("#form .signup-form h2").should("contain.text", "New User Signup!");
    //enter key

    cy.get("input[data-qa='login-email']").type("neville+test@gmail.com");
    cy.get("input[data-qa='login-password']").type("12345678");
    cy.get("button[data-qa='login-button']").click();

    //assert
    cy.get(
      "#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(10) > a"
    ).should("contain.text", "Logged in as");

    cy.get("a[href='/logout']").click();
  });
  it("Test04 Login with invalid credentials", () => {
    cy.get("#header a[href='/login']").click();
    //assert that
    cy.get("#form .signup-form h2").should("contain.text", "New User Signup!");
    //enter key
    //assert
    cy.get("#form > form > p").should("not.exist");
    cy.get("input[data-qa='login-email']").type("crossg+test@gmail.com");
    cy.get("input[data-qa='login-password']").type("12r345678");
    cy.get("button[data-qa='login-button']").click();

    //assert
    cy.get("#form form > p")
      .should("exist")
      .should("contain.text", "Your email or password is incorrect!");
  });
  it("Test05 Login and delete user account", () => {
    cy.get("#header a[href='/login']").click();
    //assert that
    cy.get("#form .signup-form h2").should("contain.text", "New User Signup!");
    //enter key

    cy.get("input[data-qa='login-email']").type("neville+test@gmail.com");
    cy.get("input[data-qa='login-password']").type("12345678");
    cy.get("button[data-qa='login-button']").click();

    //assert
    cy.get(
      "#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(10) > a"
    ).should("contain.text", "Logged in as");
    cy.get("a[href='/delete_account']").click();
    cy.get("h2[data-qa='account-deleted']")
      .should("be.visible")
      .should("contain.text", "Account Deleted!");
  });
});
