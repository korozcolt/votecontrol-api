"use strict"

const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const openApiDocumentation = require('./docs/basicInfo');
const app = express();

const { node_env,port_prod,port_dev,host_dev } = require('./config');
const { dbConnect } = require('./database/database');
const { notFound, errorHandler, handlerFatalError } = require('./utils/middlewares/errorHandler');

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());

app.get('/', (req, res) => res.status(200).json({message:"Server UP!"}));
app.use('/api',require('./routes/main.routes'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));

app.use(notFound);
app.use(errorHandler);

let env;
if(node_env === 'development'){
    env = port_dev
}else if(node_env === 'production'){
    env = port_prod
}
const serverInit = async () => {
    try {
        await dbConnect();
        console.log('DB Connection successfully established');
        app.listen(env,() => {
            console.log(`ENV: ${node_env}`);
            console.log(`Server up and running on port ${env}`);
        });
    } catch (error) {
        process.on('uncaughtException', handlerFatalError(error));
        process.on('unhandledRejection', handlerFatalError(error));
    }
};

module.exports = { serverInit };