const Discord = require('discord.js');
const client = new Discord.Client();
client.on('message', message => {
 var prefix = "$";
client.on('ready', () => {
 });
  console.log(`Logged in as ${client.user.tag}!`);
client.on("ready", () => { 
  function lol() {
    client.guilds.get('434062859715084289').roles.find("name", "Owner").setColor("RANDOM");
   });
client.login(process.env.BOT_TOKEN);
