/// <reference types="Cypress"/>
describe("Verify Subscription", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/");
    //assert that the homepage has loaded successfully
    cy.get("#header img[alt='Website for automation practice']").should(
      "exist"
    );
  });
  it("Verify Subscription in home page", () => {
    cy.get("form.searchform")
      .scrollIntoView({ easing: "linear" })
      .should("be.visible");
    cy.get("#footer .single-widget h2")
      .should("be.visible")
      .should("contain.text", "Subscription");
    cy.get("#susbscribe_email").type("neville+test@gmail.com");
    cy.get("#subscribe").click();
    //assert
    cy.get("#footer .form-row .alert")
      .should("be.visible")
      .should("contain.text", "You have been successfully subscribed!");
  });
  it("Verify Subscription in Cart page", () => {
    cy.get("#header a[href='/view_cart']").click();
    cy.get("form.searchform")
      .scrollIntoView({ easing: "linear" })
      .should("be.visible");
    cy.get("#footer .single-widget h2")
      .should("be.visible")
      .should("contain.text", "Subscription");
    cy.get("#susbscribe_email").type("neville+test@gmail.com");
    cy.get("#subscribe").click();
    //assert
    cy.get("#footer .form-row .alert")
      .should("be.visible")
      .should("contain.text", "You have been successfully subscribed!");
  });
});
