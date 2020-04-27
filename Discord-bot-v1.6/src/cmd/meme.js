const superagent = require("superagent");
const { MessageEmbed } = require("discord.js");
module.exports.run = async (client, message, args) => {
    let msg = await message.channel.send("🌀 Generating...")

    let { body } = await superagent
        .get("https://meme-api.herokuapp.com/gimme")

    if (!{ body }) return message.channel.send("faled to get in img try agan")

    let Membed = new MessageEmbed()
        .setImage(body.url)

    message.channel.send(Membed)
    msg.delete();   
};

module.exports.help = {
    name: "meme"
}