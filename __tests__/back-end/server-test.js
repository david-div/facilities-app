let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../src/server.js').server;
let app = require('../src/server.js').app;
let should = chai.should();

chai.use(chaiHttp);


describe('server access', () =>{

  // after(function (done) {
  //     server.close();
  //     done();
  // });



  describe('GET /vote_hot route', ()=> {
    it('works', function(done){
    chai.request(app)
      .get('/vote_hot')
      .end((err,res)=> {
        res.should.have.status(200);
        res.text.should.be.eql('1');
        done();
      });
    });
  });

  describe('GET /vote_cold route', ()=> {
    it('works', function(done){
    chai.request(app)
      .get('/vote_cold')
      .end((err,res)=> {
        res.should.have.status(200);
        res.text.should.be.eql('0');
      done();
      });
    });
  });

  describe('GET /vote_neutral route', ()=> {
    it('works', function(done){
    chai.request(app)
      .get('/vote_neutral')
      .end((err,res)=> {
        res.should.have.status(200);
        res.text.should.eql('0')
      done();
      });
    });
  });

});
