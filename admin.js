

const {Kafka} = require('./client')

async function init() {
    const admin = Kafka.admin()
    admin.connect()
    console.log('succesful admin connection')

    await admin.createTopics({
        topics: [{
            topic: 'updates',
            numPartitions: 2,
        }]
    })
    console.log('topic created')
    await admin.disconnect()
}

init()