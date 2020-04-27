const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES", "ADMINISTRATOR") || !message.guild.owner)
        return message.channel.send("You need Permission!")
            .then(message => message.delete({ timeout: 3000 }));

    if (!args[0]) return message.channel.send("you need a Number")
        .then(message => message.delete({ timeout: 3000 }));
    message.channel.bulkDelete(args[0])

};

module.exports.help = {
    name: "clear"
}