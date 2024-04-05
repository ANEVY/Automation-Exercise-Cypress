describe("User registration and login", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/");
  });
  it("Test01 Register and delete user", () => {
    //assert that the homepage has loaded successfully
    cy.get("#header img[alt='Website for automation practice']").should(
      "exist"
    );
    cy.get("#header a[href='/login']").click();
    //assert that
    cy.get("#form .signup-form h2").should("contain.text", "New User Signup!");
    //enter key
    cy.get("input[data-qa='signup-name']").type("neville");
    cy.get("input[data-qa='signup-email']").type("neville+test@gmail.com");
    cy.get("button[data-qa='signup-button']").click();
    //assert
    cy.get("#form .login-form > h2.title").should(
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
    cy.get("a[href='/delete_account']").click();
    cy.get("h2[data-qa='account-deleted']")
      .should("be.visible")
      .should("contain.text", "Account Deleted!");
  });

  it("Test02 Register and logout user", () => {
    //assert that the homepage has loaded successfully
    cy.get("#header img[alt='Website for automation practice']").should(
      "exist"
    );
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
    //assert that the homepage has loaded successfully
    cy.get("#header img[alt='Website for automation practice']").should(
      "exist"
    );
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
    //assert that the homepage has loaded successfully
    cy.get("#header img[alt='Website for automation practice']").should(
      "exist"
    );
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
    //assert that the homepage has loaded successfully
    cy.get("#header img[alt='Website for automation practice']").should(
      "exist"
    );
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
    //assert that the homepage has loaded successfully
    cy.get("#header img[alt='Website for automation practice']").should(
      "exist"
    );
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
