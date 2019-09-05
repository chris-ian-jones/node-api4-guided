require('dotenv').config()

const server = require('./api/server.js');

const port = process.env.PORT || 4000;

const environment = process.env.DEVELOPMENT || 'development'

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
