require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const superagent = require("superagent");
const prefix = process.env.prefix;
const fs = require("fs");
client.login(process.env.token);
client.commands = new Discord.Collection();
fs.readdir("./src/cmd/", (err, files)=> {
    if(err) console.error(err);
  
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
      console.log("no commands to load! ❌");
      return;
    }
  
    console.log(`loading ${jsfiles.length} commands! ✔️`)
  
    jsfiles.forEach((f) =>{
  let props = require(`./cmd/${f}`);
  client.commands.set(props.help.name, props);
    });
  });

client.on("ready", () => {
    console.log(`${client.user.username} is ready!`)
});

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return; 

    let messageAray = message.content.split(" ");
    let command = messageAray[0];
    let args = messageAray.slice(1);

    if(!command.startsWith(prefix)) return;

    let cmd = client.commands.get(command.slice(prefix.length))
    if(cmd) cmd.run(client, message, args);
})