module.exports.run = (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS", "ADMINISTRATOR") || !message.guild.owner)
    return message.channel.send("You need Permission!")

  if (!message.guild) return;

  const user = message.mentions.users.first();

  if (user) {

    const member = message.guild.member(user);

    if (member) {

      member
        .ban({
          reason: 'test!',
        })
        .then(() => {
          message.channel.send(`Successfully banned ${user.tag}`);
        })
        .catch(err => {
          message.channel.send('I was unable to ban the member');

          console.error(err);
        });
    } else {
      message.channel.send("That user isn't in this guild!");
    }
  } else {
    message.channel.send("You didn't mention the user to ban!");
  }

}



module.exports.help = {
    name: "ban"
}