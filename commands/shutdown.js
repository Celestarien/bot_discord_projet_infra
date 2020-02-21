const Discord = require("discord.js");

module.exports = {
    main: (bot, msg, settings) => {

        if (msg.author.id != bot.OWNERID) return msg.channel.send("Tu n'as pas les droits!")

        try {
            console.log("Je me suis bien éteinte ^^")
            process.exit()
        } catch (error) {
            console.log(error)
        }            
            

    },
    args: '<string>',
    help: 'Éteindre le bot',
    hide: true
  }