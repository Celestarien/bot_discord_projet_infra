const Discord = require("discord.js");

module.exports = {
  main: (bot, msg, settings) => {
    
    let info_embed = new Discord.RichEmbed()
                .setTitle("🧙‍ Information 🧙‍")
                .setDescription("*DEV BY CELESTARIEN*")
                .setThumbnail(bot.user.avatarURL)
                .setColor("#720000")
                .addField("Nom :", bot.user.username)
                .addField("Prefix :", bot.PREFIX)
                .setTimestamp(msg.createdAt)
            msg.channel.send(info_embed);

  },
  args: '<string>',
  help: 'Information sur le bot',
  hide: false
}