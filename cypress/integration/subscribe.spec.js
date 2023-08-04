describe("Newsletter subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("allows to subscribe to the email list", () => {
    cy.getByData("email-input").type("abdulkarimyulchibekov@gmail.com")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("exist").contains("Success")
  })

  it("does NOT allow a invalid email address", () => {
    cy.getByData("email-input").type("abdulkarimyulchibekov.com")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
  })
})
