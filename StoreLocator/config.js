const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  endpoint: process.env.GoogleAPIurl,
  masterKey: process.env.GoogleMapsAPIkey,
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  apikey: process.env.GoogleMapsAPIkey,
  apiurl: process.env.GoogleAPIurl
};