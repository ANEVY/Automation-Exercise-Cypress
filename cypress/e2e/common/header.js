class Header {
  getLogoLink() {
    return cy.get("#header img[alt='Website for automation practice']");
  }
  getHomeLink() {
    return cy.get("#header a[href='/']");
  }
  getProductsLink() {
    return cy.get("#header a[href='/products']");
  }
  getCartLink() {
    return cy.get("#header a[href='/view_cart']");
  }
  getLoginLink() {
    return cy.get("#header a[href='/login']");
  }
  getApiTestingLink() {
    return cy.get("#header a[href='/api_list']");
  }
  getTestCasesLink() {
    return cy.get("#header a[href='/test_cases']");
  }
  getVideoTutorialsLink() {
    return cy.get(
      "#header a[href='https://www.youtube.com/c/AutomationExercise']"
    );
  }
  getContactUsLink() {
    return cy.get("#header a[href='/contact_us']");
  }
  getDeleteAccountLink() {
    return cy.get("#header a[href='/delete_account']");
  }
  getProfileLink() {
    return cy.get(
      "#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(10) > a"
    );
  }
}

export default Header;
