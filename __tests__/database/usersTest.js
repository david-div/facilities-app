const assert = require('assert');
const User = require('../../database/user.js');
const Counter = require('../../src/counterModel');
// const

describe('Users', () => {
  it('#can create users', done => {
    var nero = new User({ name: 'Nero' });
    nero.save().then(() => {
      User.find({ name: 'Nero' }).then(data => {
        // console.log(mongoose.connection.readyState)
        assert(data[0].name === 'Nero');
        done();
      });
    });
  });

  it('#a users vote allowance goes down', done => {
    var rory = new User({ name: 'Rory' });
    rory.save().then(() => {
      User.find({ name: 'Rory' }).then(data => {
        data[0].votes--;
        assert(data[0].votes === 0);
        done();
      });
    });
  });

  it('a user can only cast a vote once', done => {
    var eva = new User({ name: 'Eva' });
    var counter = new Counter();
    eva.save().then(() => {
      counter.voteHot(() => {
        User.find({ name: 'Eva' }).then(data => {
          // console.log(data[0])
          assert(data[0].votes === 0);
          done();
        });
      });
    });
  });

  it('produces an error if the user attemps to vote more than once', done => {
    var eva = new User({ name: 'Eva' });
    var counter = new Counter();
    eva.save().then(() => {
      counter.voteHot(console.log());
    });
  });

  it('a user can cast votes again when 2 hours have passed', () => {});

  it('a user can cast votes again when 2 hours have passed but not more than 1 vote', () => {});
});
