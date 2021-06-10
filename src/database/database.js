"use strict"
const config = require('../config');
const mongoose = require('mongoose');

let url;

if(config.node_env === 'production'){
    url = config.mongodbprod;
}
else if(config.node_env === 'development'){
    url = config.mongodbdev;
}

const dbConnect = async () => {
    try {
      await mongoose.connect(url, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
          useCreateIndex: true
      });
    } catch (error) {
        throw(error);
    }
};
    
module.exports = { dbConnect };