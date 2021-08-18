describe('Test Payment Script via Payment Flow', () => {
  const base_url = Cypress.env('kevin_demo_url')
  const psd2_url = "https://psd2.getkevin.eu/login/'"
  const amount_number = 0.01
  let email = 'stancikasdeividas@gmail.com'
  const color_rgb = 'rgb(255, 59, 48)'

  console.log(amount_number)
  console.log(email)
  it('successfully loads', () => {
    cy.visit(base_url)
  })

  it('successfully clicks Payment flow', () => {
    cy.get('.sc-bdnylx').contains('Select payment flow')
    cy.contains('Redirect payment flow').click() 
    cy.location('pathname').should('eq', '/donate/LT')
  })

  it('successfully fill fields', () => {
    cy.get('#amount').type(amount_number)
    cy.get('#email').type(email)
  })

  it('successfully locates checkbox', () => {
    cy.get('.sc-iBzFoy').find('#terms')
  })

  it('successfully check bank option', () => {
    cy.get('#SWEDBANK_LT').get('[type="radio"]').check('SWEDBANK_LT', {force: true})
  })

  it('successfully click pay', () => {
    cy.submitFormFunction()
  })

  it('successfully contains error', () => {
    cy.get('.sc-iBzFoy').contains('You have to agree to the terms and conditions and privacy policy')
    cy.get('.EIXTr').should('have.css', 'color', color_rgb)
  })
  
  it('successfully check terms checkbox', () => {
    cy.get('#terms').get('[type="checkbox"]').check({force: true})
  })
  
  it('successfully submit pay form', () => {
    cy.submitFormFunction()
  })
})
