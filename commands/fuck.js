const Discord = require("discord.js");

module.exports = {
    main: (bot, msg, settings) => {
        if (msg.author.id == "277189284170039296" || msg.author.id == bot.OWNERID) {
            let user = msg.content
            let fuck_embed = new Discord.RichEmbed()
                .setTitle(msg.author.username + " fait un doigt à " + user)
                .setColor("#000000")
                .setImage("https://www.dafy-moto.com/images/product/high/sticker-4504-fuck-785-1.jpg")
            msg.channel.send(fuck_embed);
        }
    },
    args: '<string>',
    help: 'commande pour Dbkilleur',
    hide: true
  }