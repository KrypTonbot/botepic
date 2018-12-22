const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTIzNzM5ODY4MzI5NjcyNzIy.Dv-ANw.2vwGQ10MM9vgXuT5gWcJq_qbdNY');