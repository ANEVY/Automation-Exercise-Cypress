/// <reference types="Cypress" />
describe("Contact us form", () => {
  beforeEach(() => {
    cy.visit("http://automationexercise.com");
    //assert that the homepage has loaded successfully
    cy.get("#header img[alt='Website for automation practice']").should(
      "exist"
    );
  });
  it("Verify that contact form submit successfully", () => {
    cy.get("#header a[href='/contact_us']").click();
    // assert that 'GET IN TOUCH' is visible
    cy.get("#contact-page .contact-form h2.title")
      .should("be.visible")
      .should("contain.text", "Get In Touch");
    cy.get("input[data-qa='name']").type("John Doe");
    cy.get("input[data-qa='email']").type("john@gmail.com");
    cy.get("input[data-qa='subject']").type(
      "Testing contact form using Cypress"
    );
    cy.get("textarea[data-qa='message']").type(
      "I am glad you guys created this website for automation practice"
    );
    cy.get("input[name='upload_file']").selectFile(
      "cypress/fixtures/images/cypress-tree.jpg"
    );
    cy.get("input[data-qa='submit-button']").click();
    cy.on("window:confirm", (t) => {
      expect(t).to.contains("Press OK to proceed!");
    });
    //assert
    cy.get("#contact-page .contact-form div.alert.alert-success")
      .should("be.visible")
      .should(
        "contain.text",
        "Success! Your details have been submitted successfully."
      );
    cy.get("#form-section a").click();
    //assert that the homepage has loaded successfully
    cy.get("#header img[alt='Website for automation practice']").should(
      "exist"
    );
  });
});
