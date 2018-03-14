let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../src/server.js').server;
let app = require('../../src/server.js').app;
let expect = chai.expect;

chai.use(chaiHttp);


describe('Server access', () =>{

  // after(function (done) {
  //     server.close();
  //     done();
  // });


  describe('GET /vote_hot', () => {
    it('responds with status 200', function(done){
      chai.request(app)
      .get('/vote_hot')
      .end((err,res) => {
        expect(res).to.have.status(200);
        done();
      });
    });
  });

  describe('GET /vote_cold', () => {
    it('responds with status 200', function(done){
      chai.request(app)
      .get('/vote_cold')
      .end((err,res) => {
        expect(res).to.have.status(200);
        done();
      });
    });
  });

  describe('GET /vote_neutral', () => {
    it('responds with status 200', function(done){
      chai.request(app)
      .get('/vote_neutral')
      .end((err,res) => {
        expect(res).to.have.status(200);
        done();
      });
    });
  });

});
