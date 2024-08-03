/// <reference types="Cypress" />

import { faker } from '@faker-js/faker';

describe('POST - Usuários', () => {
  it('Cadastrar um usuário corretamente', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: {
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
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
    });
  });
});