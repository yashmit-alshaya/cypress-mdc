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
    cy.get(
      '[data-bind="afterRender: $data.setToolbarNode"] > :nth-child(1) > .data-grid-filters-actions-wrap > .data-grid-filters-action-wrap > .action-default'
    ).click({ force: true });

    cy.get("select[name='store_id']").select("All Store Views");
    cy.get("button[data-action='grid-filter-apply']").click();
  });

  it("Recent Order", () => {
    cy.get("tbody tr:nth-child(1) td:nth-child(11) a:nth-child(1)").click();
  });

  it("Get Order Time", () => {
    cy.get(".order-information-table tr:nth-of-type(1) td")
      .invoke("text")
      .as("text_needed");

    cy.get("@text_needed").then((txtneeded) => {
      cy.log(`Date: ${txtneeded}`);
      let order_date = new Date(`${txtneeded}`);
      cy.log(`${order_date}`);
      let order_date_str = order_date.toISOString();
      const istDate = new Date(order_date_str);
      istDate.setHours(istDate.getHours() + 5, istDate.getMinutes() + 30);
      const order_date_IST = istDate.toISOString();
      cy.log(order_date_IST);

      // Current Time
      let currentDate = new Date();
      // Adjusting back to IST
      const current_date = new Date(
        currentDate.getTime() + 5.5 * 60 * 60 * 1000
      );
      const current_date_IST = current_date.toISOString();

      cy.log(current_date_IST);

      let d1 = new Date(order_date_IST);
      let d2 = new Date(current_date_IST);

      let differnce = d2 - d1;
      cy.log(`Difference: ${differnce}`);
      if (differnce > 7200000) {
        cy.log(
          `Last order was placed on ${txtneeded}. The difference is more than 2 hours.`
        );
      } else {
        cy.log("The difference is less than or equal to 2 hours.");
      }
    });
  });
});
