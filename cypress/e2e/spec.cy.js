/* ==== Test Created with Cypress Studio ==== */
let x = [
  "This test has been Written By Ahmet Demir to show the cypress abilities ... ... ... !!! !!! !!!",
];
it("test form", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("localhost:3000");
  cy.get('[name="name"]').clear("ah");
  cy.get('[name="name"]').type("ahmet demir");
  cy.get('[name="surename"]').clear("he");
  cy.get('[name="surename"]').type("hekko cypress");
  cy.get('[type="submit"]').click();
  let y = cy.get("#typing");

  x.forEach((e) => {
    setTimeout(() => {
      y.type(e);
    }, 1000);
  });
  /* ==== End Cypress Studio ==== */
});
