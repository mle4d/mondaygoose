require('dotenv').config();
require('./lib/utils/connect')();

const app = require('./lib/app');
const PORT = process.env.PORT || 7890;

app.lsten(PORT, () => {
  console.log(`started on ${PORT}`);
});


