module.exports.run = async (client, message, args) => {
    const startTime = Date.now();
    message.channel.send("pong")
        .then(message => {
            const endTime = Date.now();
            message.edit(`pong - ${`${endTime - startTime}`}ms`)
        })
}

module.exports.help = {
    name: "ping"
}