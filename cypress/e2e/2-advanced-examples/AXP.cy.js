describe("My First Test", () => {
  it("First test", () => {
    cy.visit("https://main--alshaya-hm--aemsites.hlx.page/en/");
    cy.title().should(
      "eq",
      "Shop Women's, Men's, Kids & Baby Clothes Online | H&M UAE"
    );
  });
});
