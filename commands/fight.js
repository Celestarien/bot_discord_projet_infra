const Discord = require("discord.js");

module.exports = {
    main: (bot, msg, settings) => {

        
        let liste = [
            "https://pa1.narvii.com/6529/51f2edccc87eda993df38e9b75826d8f99c8a605_hq.gif",
            "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiLnvj2laHhAhVeA2MBHfMFB6YQjRx6BAgBEAU&url=https%3A%2F%2Fwww.photofunky.fr%2Fi%2F878f7f&psig=AOvVaw0CLqES1SRkflNkDMdn9_FS&ust=1553736546792534",
            "https://data.whicdn.com/images/245821683/original.gif",
            "http://i.imgur.com/iismqCv.gif",
            "http://66.media.tumblr.com/031bb6af413add15bf177435fbd25404/tumblr_n1xpr0j1rA1trxjq2o4_500.gif",
            "https://i.pinimg.com/originals/19/ca/6e/19ca6e19842290a7d9df84b6f283b507.gif",
            "https://steamuserimages-a.akamaihd.net/ugc/267218898430870822/1D778F3A420230BAEEDBC727AAEED63C177F2701/",
            "http://good-winry-18.g.o.pic.centerblog.net/c7a6efdb.gif",
            "https://vignette.wikia.nocookie.net/sword-art-online/images/a/a0/Vorpal_Strike.gif/revision/latest?cb=20170827064409&path-prefix=fr",
            "https://em.wattpad.com/b17ce0996c8e51a8e398996e0601ad043838cf38/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f456153766a3159524e5f756c45513d3d2d3137382e313462636466303265373137386163623132353738363030353832302e676966?s=fit&w=720&h=720",
            "https://i.skyrock.net/9554/57549554/pics/2626186798_1.gif",
            "http://ekladata.com/cRinC1ci3hU8DglXudbEpihlLtg.gif",
            "https://sm.ign.com/ign_fr/screenshot/default/dbs-66-2_avcd.gif",
            "http://mangapournous.m.a.pic.centerblog.net/majimangapournousisa-15.gif",
            "https://adala-news.fr/wp-content/uploads/2016/04/Sword_Art_Online_II_Yuuki_Kirito_Gif.gif",
            "https://i.kinja-img.com/gawker-media/image/upload/s--UMu70PGU--/c_fit,fl_progressive,q_80,w_636/tohvgebakmbg2rs8ys8i.gif",
            "https://em.wattpad.com/50ac1a986d261913d0e2593af8c9529093f6807a/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f335935476e2d46533149354b51513d3d2d3630393532303538342e313534353463373864316561376132353738343830353434323438392e676966?s=fit&w=720&h=720",
            "https://www.nautiljon.com/images/actualite/00/08/1507547390094_image.gif",
            "https://media.giphy.com/media/ci2KHmMJVtV0k/giphy.gif",
            "https://steamuserimages-a.akamaihd.net/ugc/771652080666613805/06E5CE0456D4B09CA240464FFC741D55D80F9A32/",
            "https://steamuserimages-a.akamaihd.net/ugc/876373771690297638/88194134F9FD3FA156DA19DA263F780D62F020B5/",
            "http://peachy.p.e.pic.centerblog.net/94e301dd.gif",
            "https://i.skyrock.net/4151/95064151/pics/3266564152_1_3_QhjyrX5I.gif",
            "https://image-yatta.animedigitalnetwork.fr/web/2951_584x0.gif",
            "http://reve-of-manga.r.e.pic.centerblog.net/7c0b4b8e.gif",
            "http://mangapournous.m.a.pic.centerblog.net/sword-art-online-61.gif",
            "https://steamuserimages-a.akamaihd.net/ugc/925923196426502469/91F8B0072320B477B15E1CE96E71E9C350914D13/",
            "https://i.pinimg.com/originals/3f/44/1b/3f441ba8a891512172fa1861af7dbedc.gif",
            "https://66.media.tumblr.com/15f5537f5e7ebbdd67a77f9e1629a8e0/tumblr_oaf9gsu5TS1vqumqqo1_400.gif",
            "http://images6.fanpop.com/image/photos/41700000/jogan-uzumaki-boruto-41724065-540-304.gif",
            "https://steamusercontent-a.akamaihd.net/ugc/872996817409623195/50C41F7623BDE43514605376A4BC0094173817C5/",
            "https://steamusercontent-a.akamaihd.net/ugc/954082741541521343/511F3BFFCDBF6266A6964E0DA8AC3D0820250292/",
            "https://thumbs.gfycat.com/IncredibleSnarlingHornedtoad-max-1mb.gif",
            "https://78.media.tumblr.com/6a307225bd77902f6eddda4f826397a8/tumblr_ovx9w2vWRR1v1hotuo1_500.gif",
            "https://steamuserimages-a.akamaihd.net/ugc/934930677741401450/6A590A47C1ED9E5741963A047A68EA937151E03B/",
            "https://marinsanime.files.wordpress.com/2011/01/fight.gif",
            "http://pa1.narvii.com/6600/6e1417ec0343a8b0e9a9600d51aaad0d228f556a_00.gif"

        ]
            let fight = Math.floor(Math.random() * (liste.length));        // En mettant 100 le nombre maximum est 99
            let winner = Math.floor(Math.random() * 101);      // Décide du gagnant du combat

            if (winner < 50) {
                message_gagnant = "**" + msg.author.username + "** gagne son combat contre **" + msg.mentions.users.first().username + "** ! 🏆"
            } else if (winner > 50){
                message_gagnant = "**" + msg.mentions.users.first().username + "** gagne le combat contre **" + msg.author.username + "** ! 🏆"
            } else {
                message_gagnant = "Personne ne gagne, vous avez tous les deux la même force !"
            }


            let fight_image = liste[fight].toString()
            let fight_embed = new Discord.RichEmbed()
            .setTitle("🗡️ **" + msg.author.username + " a décidé d'affronter " + msg.mentions.users.first().username + "** 🗡️")
            .setDescription(message_gagnant)
            .setColor("#000000")
            .setImage(fight_image)
            msg.channel.send(fight_embed);
            
            

    },
    args: '<string>',
    help: 'Affronter un adversaire 🗡️',
    hide: false
  }