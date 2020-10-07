describe('login', () => {
  it('should login an existing user', () => {
    cy.createUser().then(user => {
      cy.visit('/')
      cy.findByText(/login/i).click()
      cy.findByLabelText(/username/i).type(user.username)
      cy.findByLabelText(/password/i).type(user.password)
      cy.findByText(/submit/i).click()
      cy.assertHome().assertLoggedInAs(user)
    })
  })
})
