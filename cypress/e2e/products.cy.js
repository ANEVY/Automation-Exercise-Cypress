require("cypress-xpath");

/// <reference types="Cypress" />

describe("Test01 Verify that user can view products and add products", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/");
    //assert that the homepage has loaded successfully
    cy.get("#header img[alt='Website for automation practice']").should(
      "exist"
    );
    cy.get("#header a[href='/products']").click();
  });
  it("Verify All Products and product detail page", () => {
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
  it("Test02 Search Product", () => {
    //assert
    cy.get("div.features_items h2.title")
      .should("be.visible")
      .should("contain.text", "All Products");
    cy.get("#search_product").type("Summer White Top");
    cy.get("#submit_search").click();
    cy.url().should("contain", "Summer%20White%20Top");
    //assert
    cy.get(".features_items h2.title")
      .should("exist")
      .should("contain.text", "Searched Products");
    cy.get(".product-image-wrapper .productinfo p")
      .contains("Summer White Top")
      .should("exist");
  });
  it("Add Products in Cart", () => {
    cy.get(".product-image-wrapper").should("exist");
    //add first product to cart
    cy.get(".product-image-wrapper")
      .eq(0)
      .trigger("mouseover")
      .find(".overlay-content a.add-to-cart")
      // .should("be.visible")
      .click({ force: true });

    cy.get("#cartModal .modal-footer button.close-modal").click();

    //add second product to cart
    cy.get(".product-image-wrapper")
      .eq(1)
      .trigger("mouseover")
      .find(".overlay-content a.add-to-cart")
      // .should("be.visible")
      .click({ force: true });
    //view cart
    cy.get("#cartModal a[href='/view_cart']").click();
    cy.get("table#cart_info_table tbody tr")
      .should("be.visible")
      .should("have.length", 2);
    cy.get("table#cart_info_table tbody tr").each(($el, index, $list) => {
      //assert prices, quantity and total price
      if (index == 0) {
        cy.wrap($el).find("td.cart_price p").should("have.text", "Rs. 500");
        cy.wrap($el)
          .find("td.cart_total p.cart_total_price")
          .should("have.text", "Rs. 500");
      }
      if (index == 1) {
        cy.wrap($el).find("td.cart_price p").should("have.text", "Rs. 400");
        cy.wrap($el)
          .find("td.cart_total p.cart_total_price")
          .should("have.text", "Rs. 400");
      }
      cy.wrap($el)
        .find("td.cart_quantity button")
        .should("exist")
        .should("have.text", "1");
    });
  });
  it.only("Verify Product quantity in Cart", () => {
    cy.get(".features_items div.product-image-wrapper")
      .should("exist")
      .eq(3)
      .find("ul li a")
      .click({ force: true });
    //assert
    cy.url().should("include", "product_details");
    cy.get("#quantity").focus().type("{selectall}").type("4");
    cy.get(".product-information span button.cart").click();
    //view cart
    cy.get("#cartModal a[href='/view_cart']").click();
    //assert
    cy.get("table#cart_info_table tbody tr")
      .eq(0)
      .find("td.cart_quantity button")
      .should("exist")
      .should("have.text", "4");
  });
});
