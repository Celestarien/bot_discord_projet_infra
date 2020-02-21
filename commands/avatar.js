const Discord = require("discord.js");

module.exports = {
    main: (bot, msg, settings) => {

        let member = msg.mentions.users.first();
        if (member.id != bot.OWNERID) {
            let embed = new Discord.RichEmbed()
            .setImage(member.avatarURL)
            .setColor('#275BF0')
            msg.channel.send(embed)
        }

        else {
            let embed = new Discord.RichEmbed()
            .setColor('#b20000')
            .setDescription("Vous ne pouvez pas récupérer l'avatar de cette personne !")
            msg.channel.send(embed)
        }

},
args: '<string>',
help: 'Afficher la photo de profil d\'un utilisateur',
hide: false
}