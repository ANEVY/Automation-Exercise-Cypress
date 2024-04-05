/// <reference types="Cypress" />
describe("Verify that user can view products and add products", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/");
    //assert that the homepage has loaded successfully
    cy.get("#header img[alt='Website for automation practice']").should(
      "exist"
    );
  });
  it("", () => {});
});
