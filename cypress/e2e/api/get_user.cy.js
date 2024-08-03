/// <reference types="Cypress" />

describe('GET - Usuários', () => {
  it('Buscar um usário corretamente', () => {
    cy.request({
      method: 'GET',
      url: 'https://serverest.dev/usuarios',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.usuarios[0].nome).to.exist;
      expect(response.body.usuarios[0].email).to.exist;
      expect(response.body.usuarios[0]._id).to.exist;
    });
  });
});