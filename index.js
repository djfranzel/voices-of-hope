// server config
const express = require('express'),
    https = require('https'),
    publishToTopic = require('./backend/publishToTopic'),
    topicArn = 'arn:aws:sns:us-east-2:077773808397:publishMessage',
    fs = require('fs'),
    privateKey = fs.readFileSync('certs/server.key', 'utf8'),
    certificate = fs.readFileSync('certs/server.crt', 'utf8'),
    app = express(),
    port = 80,
    bodyParser = require('body-parser');

// set up express server
app.use('/', express.Router());
app.use(express.static('dist'));
app.use(express.urlencoded())

// https server configuration
// const httpsServer = https.createServer({key: privateKey, cert: certificate}, app);
// httpsServer.listen(port, () => console.log(__dirname, 'Running at localhost:' + port));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.post('/post-message', async (req, res) => {
    await publishToTopic(topicArn, JSON.stringify(req.body))
        .then(response => {
            res.send(response)
        })
        .catch(error => {
            res.send(error)
        })
})

// redirect all other requests to index.html
app.get('/*', (req, res) => res.sendFile(__dirname + '/dist/index.html'));
