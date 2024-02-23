const { kafka, Kafka } = require("kafkajs")

exports.Kafka = new Kafka({
    clientId: "my-app",
    brokers: ['192.168.29.73:9092']
})