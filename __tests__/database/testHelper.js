var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

before(done => {
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('connected to mongo');
    done();
  });
});

beforeEach((done) => {
  const { users,comments,blogposts } = mongoose.connection.collections;

  users.drop(() => {
    done();
  });
});
