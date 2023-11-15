describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.get("div").should("contain", "This is the home page.");
  });
});
describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/signin");
    cy.get("div").should("contain", "This is the home page.");
  });
});
