// bring in environment variables from '.env' file
require('dotenv').config();

// server config
const express = require('express'),
    https = require('https'),
    fs = require('fs'),
    privateKey = fs.readFileSync('certs/server.key', 'utf8'),
    certificate = fs.readFileSync('certs/server.crt', 'utf8'),
    app = express(),
    port = 80,
    bodyParser = require('body-parser');

// set up express server
app.use('/', express.Router());
app.use(express.static('dist'));

// const httpsServer = https.createServer({key: privateKey, cert: certificate}, app);
// httpsServer.listen(port, () => console.log(__dirname, 'Running at localhost:' + port));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// redirect all other requests to index.html
app.get('/*', (req, res) => res.sendFile(__dirname + '/dist/index.html'));
