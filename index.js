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
    cache = require('memory-cache'),
    bodyParser = require('body-parser');

const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-2'});
const documentClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'})
const username = 'wearevoicesofhope@gmail.com';
const password = 'wearevohadmin';

// set up express server
app.use('/', express.Router());
app.use(express.static('dist'));
app.use(bodyParser.json())
// app.use(express.urlencoded())

// https server configuration
// const httpsServer = https.createServer({key: privateKey, cert: certificate}, app);
// httpsServer.listen(port, () => console.log(__dirname, 'Running at localhost:' + port));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

app.post('/authenticate', async (req, res) => {
    if (req.body.username === username && req.body.password === password) {
        const uuid = uuid.v4();
        cache.put(req.body.username, uuid, 1000 * 60 * 180);
        res.status(200).send({
            token: uuid,
            message: 'Successfully authenticated!'
        })
    } else {
        res.status(500).send({
            token: null,
            message: 'Failed to authenticate!'
        })
    }
})

app.post('/post-voh-content', async (req, res) => {
    if (authenticated(req.headers.token)) {
        req.body.id = 'voh_content';
        const response = await documentClient.put({
            TableName: 'voices_of_hope_content',
            Item: req.body
        }).promise().catch(error => {
            console.log(error);
            res.status(500).send(error)
        });
        res.status(200).send(response);
    } else {
        res.status(500).send('Not authorized!');
    }
})

app.get('/get-subscribers', async (req, res) => {
    if (authenticated(req.headers.token)) {
        const response = await documentClient.scan({
            TableName: 'voices_of_hope_newsletterSubscriptions'
        }).promise().catch(error => {
            console.log(error);
            res.status(500).send(error)
        });
        res.status(200).send(response);
    } else {
        res.status(500).send('Not authorized!');
    }
})

app.get('/get-voh-content', async (req, res) => {
    const response = await documentClient.get({
        TableName: 'voices_of_hope_content',
        Key: {id: 'voh_content'}
    }).promise().catch(error => {
        console.log(error);
        res.status(500).send(error);
    });
    res.status(200).send(response);
})

app.post('/post-message', async (req, res) => {

    req.body.id = uuid.v4();
    req.body.dateSubmitted = new Date().toUTCString();
    req.body.notes = '';
    console.log(req.body);

    const response = await documentClient.put({
        TableName: 'voices_of_hope_newsletterSubscriptions',
        Item: req.body
    }).promise().catch(error => {
        console.log(error);
        res.status(500).send(error)
    });
    res.status(200).send(response);
})

// redirect all other requests to index.html
app.get('/*', (req, res) => res.sendFile(__dirname + '/dist/index.html'));

function authenticated(token) {
    return cache.get(username).token === token;
}