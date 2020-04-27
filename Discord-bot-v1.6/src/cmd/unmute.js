module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES", "ADMINISTRATOR") || !message.guild.owner)
        return message.channel.send("You need Permission!")

    let tomute = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!tomute) return message.channel.send("**you did not spesify a user/id!!**");
    let Mrole = message.guild.roles.cache.find(r => r.name === ("Muted"));

    if (message.author.bot) return message.channel.send("You can't mute a bot!");

    if (tomute === message.author) return message.channel.send("You can't mute youself!")

    if (!message.mentions.members.first().roles.cache.find(r => r.name === ("Muted"))) return message.channel.send("this user thas is not muted!");

    await (tomute.roles.remove(Mrole.id)).then(
        message.channel.send(`user ${tomute} has ben unmuted`));
}

module.exports.help = {
    name: "unmute"
}