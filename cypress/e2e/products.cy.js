require("cypress-xpath");

/// <reference types="Cypress" />

describe("Verify that user can view products and add products", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/");
    //assert that the homepage has loaded successfully
    cy.get("#header img[alt='Website for automation practice']").should(
      "exist"
    );
  });
  it("Verify All Products and product detail page", () => {
    cy.get("#header a[href='/products']").click();
    //assert
    cy.get("div.features_items h2.title")
      .should("be.visible")
      .should("contain.text", "All Products");
    cy.get(".product-image-wrapper").should("exist");
    cy.get(".product-image-wrapper").eq(0).find("ul.nav li a").click();
    // assert that product detail is visible: product name, category, price, availability, condition, brand
    cy.get("div.product-information h2").should("exist"); //product name
    cy.xpath("/html/body/section/div/div/div[2]/div[2]/div[2]/div/p[1]").should(
      "exist"
    ); //product category
    cy.xpath(
      "/html/body/section/div/div/div[2]/div[2]/div[2]/div/span/span"
    ).should("exist"); //product price
    cy.xpath("/html/body/section/div/div/div[2]/div[2]/div[2]/div/p[2]").should(
      "exist"
    ); //product availability
    cy.xpath("/html/body/section/div/div/div[2]/div[2]/div[2]/div/p[3]").should(
      "exist"
    ); //product condition
    cy.xpath("/html/body/section/div/div/div[2]/div[2]/div[2]/div/p[4]").should(
      "exist"
    ); //product condition
  });
});
