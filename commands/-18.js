const Discord = require("discord.js");

module.exports = {
    main: (bot, msg, settings) => {

        let liste = [
            "https://data.whicdn.com/images/275541709/original.gif",
            "https://pa1.narvii.com/6519/76bcde05cab15b5a18355adb7d47a32331cab1d0_hq.gif",
            "https://thumbs.gfycat.com/ThornyMeaslyArmyant-small.gif",
            "https://i.pinimg.com/originals/cf/0b/b0/cf0bb0c31b086f97c600486faaa5ecd3.gif",
            "https://image.myanimelist.net/ui/YwjqH4f_XVkq9k8zlwgJ3zBM6eR2-d6jhujh9tNzCUuMf9eOxMe7v31n-6_xxKrjYAhAw2INA_MmavSZuT46WsXRSBl9xvS1O91_x-y5RoFsiXLwD8Oh_TpExri0sCHE"

        ]

        let censure = Math.floor(Math.random() * (liste.length));        // En mettant 100 le nombre maximum est 99


        let image_18 = liste[censure].toString()
        let kiss_embed = new Discord.RichEmbed()
            .setTitle("🖤 **" + msg.author.username + " donne du plaisir à " + msg.mentions.users.first().username + "** 🖤")
            .setColor("#000000")
            .setImage(image_18)
        msg.channel.send(kiss_embed);



    },
    args: '<string>',
    help: 'Faites grimper vôtre partenaire au 7ème ciel :underage:',
    hide: false
}