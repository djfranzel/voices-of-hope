const {sns} = require('./AwsConfig');

module.exports = async (topicArn, message) => {
    console.log(__dirname, `Publishing to topic: ${topicArn}. Message: ${message}`);
    return await sns.publish({
        TopicArn: topicArn,
        Message: message
    }).promise().catch(error => {
        throw {status: error.statusCode, message: error.message};
    });
}