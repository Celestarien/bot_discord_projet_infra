const Discord = require("discord.js");

module.exports = {
  main: (bot, msg, settings) => {
    
    msg.channel.send("test")

  },
  args: '<string>',
  help: 'Affiche les serveurs sur lequel le bot est',
  hide: true
}