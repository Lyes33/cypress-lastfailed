describe('Test suite login', () => {
  beforeEach(()=>{
    cy.visit('https://www.saucedemo.com')
  })
  it('login success', () => {
  
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.url().should('contain', 'inventory')
  })
  it('login fail', () => {
  
    cy.get('[data-test="username"]').type('standard_userr')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.url().should('contain', 'inventory')
  })
})