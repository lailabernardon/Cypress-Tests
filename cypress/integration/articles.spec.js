// articles.spec,js.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/* ==== Test Created with Cypress Studio ==== */
describe('Artigos', () => {
  it('criar um novo artigo', function () {
    cy.login();

    cy.get('a[href$=editor]').click();
    cy.get('input[placeholder="Article title"]').type('Tests');
    cy.get('input[placeholder="What is this article about?"]').type(
      'Testing cypress'
    );
    cy.get('form textarea').type('Test test e tests');
    cy.get('input[placeholder="Enter tags"]').type('Tests');
    cy.get('button.btn-primary').contains('Publish article').click();
    cy.get('h1').should('contain.text', 'Tests');
    /* ==== End Cypress Studio ==== */
  });
});
