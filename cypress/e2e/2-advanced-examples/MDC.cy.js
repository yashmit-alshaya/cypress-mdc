describe("MDC", () => {
  //   Visit page
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  it("Login Page", () => {
    cy.visit("https://boots-pprod.store.alshaya.com/admin");
  });

  // Fill creds.
  it("User Field", () => {
    cy.get("#username").type("naveen");
  });

  it("User pass", () => {
    cy.get("#login").type("Alshaya@2023");
  });

  it("submit", () => {
    cy.get(".action-login.action-primary").click();
  });

  it("close modal", () => {
    cy.get(
      "aside[class='modal-popup modal-system-messages _show'] button[type='button']"
    ).click();
  });

  it("Menu", () => {
    cy.get("#menu-magento-sales-sales").click();
    cy.get("li[data-ui-id='menu-magento-sales-sales-order'] a span").click();
  });

  it("Filters", () => {
    cy.wait(3000);
    // cy.get(".data-grid-filters-action-wrap button.action-default")
    //   .eq(0)
    //   .click();
    cy.get(
      '[data-bind="afterRender: $data.setToolbarNode"] > :nth-child(1) > .data-grid-filters-actions-wrap > .data-grid-filters-action-wrap > .action-default'
    ).click({ force: true });
    cy.wait(3000);
    // cy.get("select[name='store_id']").click();
    // cy.wait(3000);
    cy.get("select[name='store_id']").select("All Store Views");
    cy.wait(3000);
    cy.get("button[data-action='grid-filter-apply']").click();
  });

  it("Recent Order", () => {
    cy.get("tbody tr:nth-child(1) td:nth-child(11) a:nth-child(1)").click();
  });

  it("Get Order Time", () => {
    // Assuming you have an element with the class 'my-class'
    cy.get(".order-information-table tr:nth-of-type(1) td")
      .invoke("text")
      .then((text) => {
        // Do something with the text
        cy.log(text);
      });
  });
});
