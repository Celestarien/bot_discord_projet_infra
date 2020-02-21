const Discord = require("discord.js");

module.exports = {
    main: (bot, msg, settings) => {

            let liste = [

                "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwiusM-MiKHhAhW3AmMBHU4vBtwQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F403635185326055656%2F&psig=AOvVaw0xWQYPxKP-2uHAQHeSRhcD&ust=1553732863131096",
                "https://66.media.tumblr.com/3cde61a83fa4a953b4f989e261832894/tumblr_o6a1wqCiKt1qbmv14o4_500.gif",
                "https://media1.tenor.com/images/49a21e182fcdfb3e96cc9d9421f8ee3f/tenor.gif?itemid=3532079",
                "https://i.skyrock.net/4612/76314612/pics/3226977305_1_2_RdQBJ3zu.gif",
                "https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif",
                "https://pa1.narvii.com/6110/55a41467b582bb044e3b68e1bd715b226bef4e6f_hq.gif",
                "https://media1.tenor.com/images/08de7ad3dcac4e10d27b2c203841a99f/tenor.gif?itemid=4885268",
                "https://i.imgur.com/nrdYNtL.gif",
                "https://media.giphy.com/media/C4gbG94zAjyYE/giphy.gif",
                "https://i.pinimg.com/originals/bf/b5/be/bfb5bed89f8c09bf53eab687eb3f9404.gif",
                "https://66.media.tumblr.com/18fdf4adcb5ad89f5469a91e860f80ba/tumblr_oltayyHynP1sy5k7wo1_400.gif",
                "https://media.giphy.com/media/ShAchOHe38Aak/giphy.gif",
                "https://media.tenor.co/images/4b5f66c0f6d28d37fd9613c6d006a21b/tenor.gif",
                "https://media1.tenor.com/images/34113fd67dfe9c9dbc19872786278d5d/tenor.gif?itemid=13041469",
                "https://i.pinimg.com/originals/f9/e9/34/f9e934cddfd6fefe0079ab559ef32ab4.gif",
                "https://steamuserimages-a.akamaihd.net/ugc/857233492655284186/79FA4B4A45C179EBF80D2067A36F228311FB1A12/",
                "https://steamusercontent-a.akamaihd.net/ugc/940587891353577212/4CAD99089684C67583079E86744D73D820E116C5/",
                "http://i.imgur.com/gmiJEbu.gif",
                "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj8_42EzaLhAhVw1eAKHa5_DN8QjRx6BAgBEAU&url=https%3A%2F%2Ftenor.com%2Fsearch%2Fanime-hug-gifs&psig=AOvVaw04NeLHGgpsQtYgpc0pbUZ5&ust=1553785080724117",
                "https://66.media.tumblr.com/2a3ec53a742008eb61979af6b7148e8d/tumblr_mt1cllxlBr1s2tbc6o1_500.gif",
                "https://media0.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
                "https://media.giphy.com/media/jT6FRVz9ivIgE/giphy.gif",
                "https://media1.tenor.com/images/eef01312925f6510ee05d5df52e25fd1/tenor.gif?itemid=7738499",
                "https://i.gifer.com/GFx1.gif",
                "https://i.pinimg.com/originals/f2/e6/7f/f2e67f04b6a0ab30870011bd17190409.gif",
                "https://giffiles.alphacoders.com/170/170942.gif",
                "http://i.imgur.com/pME21N2.gif",
                "http://66.media.tumblr.com/9204649fd84d3df7223feb6712a89444/tumblr_n8pc8badUs1sg0ygjo1_500.gif",
                "https://thumbs.gfycat.com/BlindOblongAmurratsnake-small.gif",
                "http://img3.wikia.nocookie.net/__cb20120803043136/degrassi/images/9/9a/Hug.gif",
                "https://media.giphy.com/media/B1a6fHK1Lbz8c/giphy.gif",
                "https://i.pinimg.com/originals/63/fe/47/63fe47a632371e47123f95f879fcdef6.gif",
                "https://i.imgur.com/82xVqUg.gif",
                "https://66.media.tumblr.com/8d7f21698a2e2c85bf9ff7a829488336/tumblr_nmrmhleuYw1u4zujko1_400.gif",
                "https://i.skyrock.net/4016/88704016/pics/3182987597_1_2_ejt6jBZW.gif",
                "https://i.pinimg.com/originals/4b/8f/5c/4b8f5ca7bf41461a19e3b4d1e64c1eb5.gif",
                "https://data.whicdn.com/images/232958287/original.gif",
                "https://ekladata.com/XXMBF2-cxSgYgojru4dqjgvz504@100x100.gif"
            ]

            let hug = Math.floor(Math.random() * (liste.length));        // En mettant 100 le nombre maximum est 99
            let hug_image = liste[hug].toString()
            let hug_embed = new Discord.RichEmbed()
        .setTitle("💞 **" + msg.author.username + " fait un câlin à " + msg.mentions.users.first().username + "** 💞")
        .setColor("#680e4d")
        .setImage(hug_image)
        msg.channel.send(hug_embed);

        setTimeout(function() {
            // Code a executer après 2000 ms = 2 secondes
            if (msg.mentions.users.first().id == bot.user.id) return msg.channel.send("💞 **" + bot.user.username +"** fait un câlin à " + "**" + msg.author.username + "** en retour 💞")
                 
                }, 2000)

    },
    args: '<string>',
    help: 'Câlinez une personne que vous aimez bien 💞',
    hide: false
  }