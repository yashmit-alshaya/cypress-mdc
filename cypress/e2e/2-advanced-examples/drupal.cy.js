describe("MDC", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  // Visit page
  it("Login Page", () => {
    cy.visit("https://kw.hm.com/en/user/login");
  });

  // Fill creds.
  it("User Field", () => {
    cy.get("#edit-name").type("automation_behat@alshaya.com");
  });

  it("User pass", () => {
    cy.get("#edit-pass").type("Behat@1234");
  });

  it("submit", () => {
    cy.get("#edit-submit").click();
    cy.get("#block-branding").should("be.visible");
  });
});
