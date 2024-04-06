/// <reference types="Cypress"/>
describe("Verify Subscription", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/");
    //assert that the homepage has loaded successfully
    cy.get("#header img[alt='Website for automation practice']").should(
      "exist"
    );
  });
  it("Verify Subscription in home page", () => {});
});
