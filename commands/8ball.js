const Discord = require("discord.js");

module.exports = {
    main: (bot, msg, settings) => {
        let liste = [
            "https://cdn.discordapp.com/attachments/326649099904483328/563042966608805898/a_voir.png",
            "https://cdn.discordapp.com/attachments/326649099904483328/563042970589200384/je_ne_sais_pas.png",
            "https://cdn.discordapp.com/attachments/326649099904483328/563042975332958210/oui.png",
            "https://cdn.discordapp.com/attachments/326649099904483328/563042976343916704/non.png",
            "https://cdn.discordapp.com/attachments/326649099904483328/563042978390736897/je_pense_que_oui.png",
            "https://cdn.discordapp.com/attachments/326649099904483328/563042980018126851/je_pense_que_non.png"
        ]

        let réponse = [
            "Des mots vous sont murmurés à l'oreille :",
            "Vous avez l'étrange intuition que la réponse est :",
            "Vous sentez une étrange présence derrière vous, elle se colle à votre dos afin de vous murmurer :"
        ]

            let résultat = Math.floor(Math.random() * (liste.length));        // En mettant 100 le nombre maximum est 99
            let réponse_final = Math.floor(Math.random() * (réponse.length));        // En mettant 100 le nombre maximum est 99
            let question = msg.content

            let ball = liste[résultat].toString()
            let ball_embed = new Discord.RichEmbed()
                .setTitle(":8ball: *" + question + "* :8ball:")
                .setDescription(réponse[réponse_final])
                .setColor("#000000")
                .setImage(ball)
            msg.channel.send(ball_embed);


            
            

    },
    args: '<string>',
    help: 'Faites appel à des pouvoirs surnaturels pour répondre à vos questions :8ball:',
    hide: false
  }