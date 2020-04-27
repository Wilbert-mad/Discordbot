module.exports.run = (client, message, args) => { 
    if (!message.member.hasPermission("MANAGE_MESSAGES", "ADMINISTRATOR") || !message.guild.owner)
        return message.channel.send("You need permission!")

    if (!message.guild) return;

    const user = message.mentions.users.first();

    if (user) {
        const member = message.guild.member(user);

        if (member) {
            member.kick()
                .then(() => {
                    message.channel.send(`${user.tag} has ben kicked from this server`)
                }).cache(err => {
                    message.channel.send(`there was in error kicking ${user.tag}`)
                        .then(message => message.delete({ timeout: 5000 }))

                    console.log(err.stack)
                })
        }
        else {
            message.channel.send("this user isn't in the gulid sorry")
                .then(message => message.delete({ timeout: 5000 }))
        }
    }
    else {
        message.channel.send("you didn't menton a user!")
            .then(message => message.delete({ timeout: 3000 }))
    }
}

module.exports.help = {
    name: "kick"
}