const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("MANAGE_MESSAGES", "ADMINISTRATOR") || !message.guild.owner)
    return message.channel.send("You need Permission!")

  //get the mentons user, retern if there is none.
  let tomute = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if (!tomute) return message.channel.send("**you did not spesify a user/id!!**");

  // if the mutee has the same or a  higher role thene the muter, retern.
  let Mrole = message.guild.roles.cache.find(r => r.name === ("Muted"));
  if (!Mrole) {
    try {
      Mrole = await message.guild.roles.create({
        data: {
          name: "Muted",
          color: "#000000",
          Permissions: [],
        },
      })

      message.guild.channels.cache.forEach(async (channel, id) => {
        await channel.overwritePermissions([{
          id: Mrole.id,
          deny: ["SEND_MESSAGES", "ADD_REACTIONS", "STREAM", "SPEAK"],
          allow: ["CONNECT"]
        }]
        )
      })
    } catch (err) {
      console.log(err.stack);
    }
  }
  // if(tomute.roles.has(role.id)) return message.channel.send("user alredy muted")
  if (message.author.bot) return message.channel.send("You can't mute a bot!");

  if (tomute === message.author) return message.channel.send("You can't mute youself!")

  if (message.mentions.members.first().roles.cache.find(r => r.name === ("Muted"))) return message.channel.send("this user thas alredy ben muted");

  await (tomute.roles.add(Mrole.id)).then(
    message.channel.send(`user ${tomute} has ben muted`));
}

module.exports.help = {
    name: "mute"
}