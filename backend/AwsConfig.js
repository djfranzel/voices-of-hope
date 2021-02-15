const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-2'});
exports.sns = new AWS.SNS({apiVersion: '2010-03-31'});
exports.documentClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
