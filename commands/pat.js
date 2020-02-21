const Discord = require("discord.js");

module.exports = {
    main: (bot, msg, settings) => {

        let liste = [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqIWf3rPPQg5je5jzuVL4ETaZwcIitbf6WHbxso-2sjZDcwFc2",
            "https://66.media.tumblr.com/ea0a3110ef50e46336f9a996eb416ece/tumblr_p2kzogLOZU1vajq0ro4_500.gif",
            "https://thumbs.gfycat.com/BlushingDeepBlacknorwegianelkhound-size_restricted.gif",
            "https://i.imgur.com/2lacG7l.gif",
            "https://media1.tenor.com/images/bf646b7164b76efe82502993ee530c78/tenor.gif?itemid=7394758",
            "https://media1.tenor.com/images/68d981347bf6ee8c7d6b78f8a7fe3ccb/tenor.gif?itemid=5155410",
            "https://media.giphy.com/media/KZQlfylo73AMU/giphy.gif",
            "https://uploads.disquscdn.com/images/995470f2fc3d0d20003d8a6fdab47a54cdade9111389dfdaa2f6751e15f0da51.gif",
            "https://thumbs.gfycat.com/RawAshamedGermanshorthairedpointer-size_restricted.gif",
            "https://steamuserimages-a.akamaihd.net/ugc/867363717188700407/63A7FEFEAB23F606661D7F49C3139F51ECB501D4/",
            "https://media1.tenor.com/images/2b2f9c5d046ea2cdaca41dfdc4356eea/tenor.gif?itemid=7552114",
            "https://media.giphy.com/media/pEZ1acWgK55jq/giphy.gif",
            "https://media1.tenor.com/images/70960e87fb9454df6a1d15c96c9ad955/tenor.gif?itemid=10092582",
            "https://i.imgur.com/pb0ODYa.gif",
            "https://image.myanimelist.net/ui/OK6W_koKDTOqqqLDbIoPAj24CWQENwBEIoKRQEk1TGY",
            "https://media1.tenor.com/images/c2405c08b518081cf75d430ea0817964/tenor.gif?itemid=12018882",
            "https://data.whicdn.com/images/125164822/original.gif",
            "https://66.media.tumblr.com/6810205eee587fa2d08f556d2f461853/tumblr_oz81u9MbWq1rmawi3o1_400.gif",
            "http://lepassetempsderose.l.e.pic.centerblog.net/ec068ebf.gif",
            "https://i.kinja-img.com/gawker-media/image/upload/fm065wks51jhiyn1x45y.gif",
            "https://media1.tenor.com/images/8c1f6874db27c8227755a08b2b07740b/tenor.gif?itemid=10789367",
            "https://data.whicdn.com/images/134027062/original.gif",
            "https://i.makeagif.com/media/6-04-2014/1m4gQJ.gif",
            "https://steamuserimages-a.akamaihd.net/ugc/867363717188700407/63A7FEFEAB23F606661D7F49C3139F51ECB501D4/",
            "https://media1.tenor.com/images/f3180c5d77fe9ab30cab9d21667c6d49/tenor.gif?itemid=11994435"

        ]

            let pat = Math.floor(Math.random() * (liste.length));        // En mettant 100 le nombre maximum est 99


            let pat_image = liste[pat].toString()
            let pat_embed = new Discord.RichEmbed()
            .setTitle(" **" + msg.author.username + " patpat " + msg.mentions.users.first().username + "** ")
            .setColor("#7707af")
            .setImage(pat_image)
            msg.channel.send(pat_embed);            
            
            setTimeout(function() {
                // Code a executer après 2000 ms = 2 secondes
                if (msg.mentions.users.first().id == bot.user.id) return msg.channel.send("💞 Maiiiiiiis 💞")
                     
                    }, 2000)

    },
    args: '<string>',
    help: 'Caressez la tête de quelqu\'un',
    hide: false
  }