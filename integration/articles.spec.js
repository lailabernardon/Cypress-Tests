// articles.spec,js.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

const { first } = require('cypress/types/lodash');

/* ==== Test Created with Cypress Studio ==== */
describe('Artigos', () => {
  it('criar um novo artigo', function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://purescript-react-realworld.netlify.app/');

    //clicar botão sign in
    cy.get('.nav-link') //filtrar 4 elementos
      .contains('Sign in') //determinado texto em 1 desses 4 elementos
      .click();

    //outra forma de logar, usando atributos:
    //cy.get('[href*=login]').click();
    //definir o usuáriocriado por você
    const user = 'teste@outlook.com';
    const pass = 'teste!';

    //informar usuário e senha
    cy.get('input[type=email]').type(user);
    cy.get('input[type=password]').type(pass);

    //clicar no botão entrar
    cy.get('button.btn-primary').click();

    //esperar a página estar pronta (deve conter o tamanho = 2)
    cy.get('.nav-pills a.nav-link ').should('have.length', 2);

    //verificar se você autenticado, terá dois elementos
    cy.get('.nav-pills a.nav-link ');
    //procura por posição - eq, first, last
    first() //.eq(0)
      .should('contain.text', 'Your Feed');

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
