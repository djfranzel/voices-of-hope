// server config
const express = require('express'),
    https = require('https'),
    publishToTopic = require('./backend/publishToTopic'),
    topicArn = 'arn:aws:sns:us-east-2:077773808397:publishMessage',
    fs = require('fs'),
    uuid = require('uuid'),
    privateKey = fs.readFileSync('certs/server.key', 'utf8'),
    certificate = fs.readFileSync('certs/server.crt', 'utf8'),
    app = express(),
    port = 80,
    bodyParser = require('body-parser');

const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-2'});
const documentClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'})

// set up express server
app.use('/', express.Router());
app.use(express.static('dist'));
app.use(bodyParser.json())
// app.use(express.urlencoded())

// https server configuration
// const httpsServer = https.createServer({key: privateKey, cert: certificate}, app);
// httpsServer.listen(port, () => console.log(__dirname, 'Running at localhost:' + port));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

app.post('/post-message', async (req, res) => {

    console.log(req.body);

    req.body.id = uuid.v4();
    req.body.dateSubmitted = new Date().toUTCString();
    req.body.notes = '';
    console.log(req.body);

    return await documentClient.put({
        TableName: 'voices_of_hope_newsletterSubscriptions',
        Item: req.body
    }).promise().catch(error => {
        throw {status: error.statusCode, message: error.message};
    });
})

// redirect all other requests to index.html
app.get('/*', (req, res) => res.sendFile(__dirname + '/dist/index.html'));
