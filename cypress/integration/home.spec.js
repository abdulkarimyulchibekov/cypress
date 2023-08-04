describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context("hero section", () => {
    it("The h1 contains correct text", () => {
      cy.get("[data-test='hero-heading']")
        .should("exist")
        .contains("Testing Next.js Applications with Cypress")
    })

    it.only("the features on the home page are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
    })
  })

  context("Courses section", () => {
    it.only("Course: Testing your first Next.js application", () => {
      cy.getByData("course-0").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/testing-your-first-application")
    })
  })
})
