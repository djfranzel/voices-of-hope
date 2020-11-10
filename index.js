// bring in environment variables from '.env' file
require('dotenv').config();

// server config
const express = require('express'),
    fileUpload = require('express-fileupload'),
    https = require('https'),
    fs = require('fs'),
    privateKey = fs.readFileSync('certs/server.key', 'utf8'),
    certificate = fs.readFileSync('certs/server.crt', 'utf8'),
    app = express(),
    port = 443,
    bodyParser = require('body-parser');

const log = require('./backend/helpers/logger');

// set up express server
app.use('/', express.Router());
app.use(fileUpload({createParentPath: true}));
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
app.use(express.static('dist'));

const httpsServer = https.createServer({key: privateKey, cert: certificate}, app);
httpsServer.listen(port, () => log.info(__dirname, 'Running at localhost:' + port));

// redirect all other requests to index.html
app.get('/*', (req, res) => res.sendFile(__dirname + '/dist/index.html'));
