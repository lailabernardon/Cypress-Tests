// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//URL: https://conduit.productionready.io/api
//rota: /users/login
Cypress.Commands.add('login', () => {
  //template string do java script

  cy.request({
    method: 'POST',
    url: `${Cypress.env('apiUrl')}/users/login`,
    body: {
      user: {
        password: Cypress.env('user').password,
        email: Cypress.env('user').email,
      },
    },
    headers: {
      Accept: 'application/Json',
      'content-typer': 'application/json',
    },
  }).then((response) => {
    //JSON Path encontrar um valor dentro de um doc dentro de um Json

    cy.log(response.body.user.token);
    localStorage.setItem('token', response.body.user.token);
  });
  cy.visit('/');

  //esperar a página estar pronta (deve conter o tamanho = 2)
  cy.get('.nav-pills a.nav-link ').should('have.length', 2);

  //verificar se você autenticado, terá dois elementos
  cy.get('.nav-pills a.nav-link ');
  //procura por posição - eq, first, last
  first().should('contain.text', 'Your Feed'); //.eq(0)
});
