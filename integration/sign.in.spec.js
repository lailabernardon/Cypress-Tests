///<referece types="cypress" />;

const { eq } = require('cypress/types/lodash');

describe('autenticação', () => {
  it('efetuar login com user e senha válidos', () => {
    //acessar site
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
    cy.get('.nav-pills a.nav-link ')
      //procura por posição - eq, first, last
      .eq(0)
      .should('contain.text', 'Your Feed'); //deve conter o texto your feed
  });
});
