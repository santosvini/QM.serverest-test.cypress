/// <reference types="Cypress" />

import {fakerPT_BR} from "@faker-js/faker"

var id
describe('PUT - Usuários', () => {
  it('Cadastrar um usário corretamente', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: {
        nome: fakerPT_BR.person.fullName(),
        email: fakerPT_BR.internet.email(),
        password: fakerPT_BR.internet.password(),
        administrador: "true"
      },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.message).to.eq('Cadastro realizado com sucesso');
        expect(response.body._id).to.exist;
        id = response.body._id
    });
  });
  it('Atualizar dados do usuário', () => {
    cy.request({
      method: 'PUT',
      url: `https://serverest.dev/usuarios/${id}`,
      body: {
        nome: fakerPT_BR.person.fullName(),
        email: fakerPT_BR.internet.email(),
        password: fakerPT_BR.internet.password(),
        administrador: "true"
      },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq("Registro alterado com sucesso")
    });
  });
});