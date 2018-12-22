const Discord = require('discord.js');
const client = new Discord.Client();
client.on('message', message => {
 var prefix = "$";
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='-count')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle('🌷| Members info')
      .addBlankField(true)
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });

client.login(process.env.BOT_TOKEN);
