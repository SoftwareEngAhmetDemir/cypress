/* ==== Test Created with Cypress Studio ==== */
it('test form', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('localhost:3000');
  cy.get('[name="name"]').clear('ah');
  cy.get('[name="name"]').type('ahmet demir');
  cy.get('[name="surename"]').clear('he');
  cy.get('[name="surename"]').type('hekko cypress');
  cy.get('[type="submit"]').click();
  cy.get('#typing').type('This test has been Written By Ahmet Demir to show the cypress abilities ... ... ... !!! !!! !!!')
  /* ==== End Cypress Studio ==== */
});