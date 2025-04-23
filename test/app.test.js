// test/app.test.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Ajuste o caminho conforme sua estrutura

chai.use(chaiHttp);
const expect = chai.expect;

describe('Testes da API Básica', () => {
  before((done) => {
    // Inicialize qualquer configuração necessária antes dos testes
    done();
  });

  after((done) => {
    // Encerre qualquer conexão após os testes
    done();
  });

  describe('GET /', () => {
    it('Deve retornar mensagem de boas-vindas', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.equal('Bem-vindo ao meu projeto Express!');
          done();
        });
    });
  });

  describe('GET /404', () => {
    it('Deve retornar erro 404 para rotas inexistentes', (done) => {
      chai.request(app)
        .get('/rota-inexistente')
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body).to.have.property('error');
          done();
        });
    });
  });

  // Adicione mais testes para suas rotas aqui
});