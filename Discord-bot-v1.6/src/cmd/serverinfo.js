const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
// role 

    const embed = new Discord.MessageEmbed()
        .setColor("##e0115f")
        .setTitle(`${message.guild.name}`)
        .setThumbnail(message.guild.iconURL())
        .addField("server owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
        .addField("totol members", `${message.guild.memberCount}`, true)
        .addField("Created", `${message.guild.createdAt}`, true)

    message.channel.send(embed)
};

module.exports.help = {
    name: "serverinfo"
}