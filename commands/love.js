const Discord = require("discord.js");

module.exports = {
    main: (bot, msg, settings) => {
        
            let love_pourcent = Math.floor(Math.random() * 100);        // En mettant 100 le nombre maximum est 99
            
            // Si le résultat est entre 0 et 25
            if (love_pourcent < 25) {

                const embed = new Discord.RichEmbed()
                .setTitle("💘 **LOVE** 💘")
                .setColor("#ee42f4")
                .setDescription("Vous n'allez pas trop ensemble mais qui sait, ça peut toujours marcher entre vous, courage !")
                .setThumbnail("https://cdn.pixabay.com/photo/2017/02/10/14/06/heart-2055208_960_720.png")
                .addField(msg.author.username + "   +   " + msg.mentions.users.first().username, "**" + love_pourcent + "%**")
                
                msg.channel.send({embed});
            } 
            // Si le résultat est entre 25 et 50
            else if (love_pourcent >= 25 && love_pourcent < 50){
                const embed = new Discord.RichEmbed()
                .setTitle("💘 **LOVE** 💘")
                .setColor("#ee42f4")
                .setDescription("Vous avez la possibilité de sortir ensemble !")
                .setThumbnail("https://cdn.pixabay.com/photo/2017/02/10/14/06/heart-2055208_960_720.png")
                .addField(msg.author.username + "   +   " + msg.mentions.users.first().username, "**" + love_pourcent + "%**")
                
                msg.channel.send({embed});

            }
            // Si le résultat est entre 50 et 75
            else if (love_pourcent >= 50 && love_pourcent < 75){
                const embed = new Discord.RichEmbed()
                .setTitle("💘 **LOVE** 💘")
                .setColor("#ee42f4")
                .setDescription("Vous vous êtes bien trouvés, que l'amour vous sourit !")
                .setThumbnail("https://cdn.pixabay.com/photo/2017/02/10/14/06/heart-2055208_960_720.png")
                .addField(msg.author.username + "   +   " + msg.mentions.users.first().username, "**" + love_pourcent + "%**")
                
                msg.channel.send({embed});

            }
            // Si le résultat est entre 75 et 100
            else if (love_pourcent >= 75 && love_pourcent < 100){
                const embed = new Discord.RichEmbed()
                .setTitle("💘 **LOVE** 💘")
                .setColor("#ee42f4")
                .setDescription("Vous avez trouvé l'âme soeur ! J'attendrai votre mariage avec impatience !")
                .setThumbnail("https://cdn.pixabay.com/photo/2017/02/10/14/06/heart-2055208_960_720.png")
                .addField(msg.author.username + "   +   " + msg.mentions.users.first().username, "**" + love_pourcent + "%**")
                
                msg.channel.send({embed});

            }

    },
    args: '<string>',
    help: 'Tester votre affinité avec une personne 💘',
    hide: false
  }