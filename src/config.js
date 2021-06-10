"use strict"
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  mongodbdev: process.env.MONGODEV,
  mongodbprod: process.env.MONGOPROD,
  port_prod: process.env.PORT_PROD,
  port_dev: process.env.PORT_DEV,
  host_prod: process.env.HOST_PROD,
  host_dev: process.env.HOST_DEV,
  node_env: process.env.NODE_ENV,
};

