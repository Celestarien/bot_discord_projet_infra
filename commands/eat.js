const Discord = require("discord.js");

module.exports = {
    main: (bot, msg, settings) => {

        let liste = [
            "http://good-winry-18.g.o.pic.centerblog.net/a67c9b9f.gif",
            "https://media.giphy.com/media/9n4muqn344LMA/giphy.gif",
            "https://media.giphy.com/media/BuOSTtLMIK7Cw/giphy.gif",
            "https://78.media.tumblr.com/733163d5dde9519d6cca1e03980be581/tumblr_inline_p7l32ml1hm1v3eowb_500.gif",
            "https://media.giphy.com/media/VWhJNPhbHRMIM/giphy.gif",
            "https://data.whicdn.com/images/285028892/original.gif",
            "https://media2.giphy.com/media/w7CP59oLYw6PK/giphy.gif",
            "https://66.media.tumblr.com/97e0d25bf834516a43ac7aa23b1d115b/tumblr_p2f0kz8Lsz1wsu3efo1_400.gif",
            "https://i.giphy.com/media/SKRoMwZvjZWec/200.gif"

        ]

            let eat = Math.floor(Math.random() * (liste.length));        // En mettant 100 le nombre maximum est 99

            let eat_image = liste[eat].toString()
            let eat_embed = new Discord.RichEmbed()
                .setColor("#005ac9")
                .setImage(eat_image)
            msg.channel.send(eat_embed);


    },
    args: '<string>',
    help: 'Manger devant tout le monde sans gêne',
    hide: false
  }