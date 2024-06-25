const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);


const store = new MongoDBStore({
  uri: process.env.URI_MONGO,
  collection: 'mySessions'
});

// Catch errors
store.on('error', function(error) {
    console.log(error);
  });

module.exports = store;