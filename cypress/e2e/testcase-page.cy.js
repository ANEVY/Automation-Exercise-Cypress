/// <reference types="cypress" />
describe("Verify test case page", () => {
  it("Verify that user can access the test case page", () => {
    cy.visit("http://automationexercise.com");
    //assert that the homepage has loaded successfully
    cy.get("#header img[alt='Website for automation practice']").should(
      "exist"
    );
    cy.get("#header a[href='/test_cases']").click();
    cy.get("#form h2.title")
      .should("exist")
      .should("contain.text", "Test Cases");
  });
});
