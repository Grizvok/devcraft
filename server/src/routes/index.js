const sendMessage = require('./sendMessage');

module.exports = (server) => {
  server.use('/api/message', sendMessage);
};
