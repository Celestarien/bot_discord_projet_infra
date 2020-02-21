const Discord = require("discord.js");

module.exports = {
    main: (bot, msg, settings) => {

            let liste = [
            "https://data.whicdn.com/images/295221313/original.gif",
                "https://i.skyrock.net/6517/89386517/pics/3189878693_1_2_bjyBvoeK.gif",
                "https://media.giphy.com/media/QGc8RgRvMonFm/giphy.gif",
                "https://media.giphy.com/media/mGAzm47irxEpG/giphy.gif",
                "http://aws-cf.ados.fr/prod/photos/2/6/7/7961267/4734917/big-4734917771.gif?v=6",
                "https://media.giphy.com/media/vUrwEOLtBUnJe/giphy.gif",
                "https://steamuserimages-a.akamaihd.net/ugc/868495654722807142/4BFFC77E689D68878818FB6EFDF7C93BE4DBEBDB/",
                "https://media.giphy.com/media/lWnaY7WUymoxO/giphy.gif",
                "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiEk7Sdh6HhAhVs8-AKHQWLDpAQjRx6BAgBEAU&url=https%3A%2F%2Fgiphy.com%2Fgifs%2Fkiss-manga-mGAzm47irxEpG&psig=AOvVaw3OscYd45pV-jiWorr931We&ust=1553731967496617",
                "https://media1.tenor.com/images/b4e22911641a1a233508ae8a19445505/tenor.gif?itemid=12390208", //9
                "https://66.media.tumblr.com/5d51b3bbd64ccf1627dc87157a38e59f/tumblr_n5rfnvvj7H1t62gxao1_500.gif",
                "https://media1.tenor.com/images/aa559ce009f9b2613fd9b567e8c6aacd/tenor.gif?itemid=5205176",
                "https://steamuserimages-a.akamaihd.net/ugc/85967807153949334/30F9449B09E36F4FADF80175EB892F46E74948D9/", //12
                "https://gifimage.net/wp-content/uploads/2017/10/manga-kiss-gif-13.gif",
                "https://em.wattpad.com/c53567543fd67f5f8736e9c8be9cb3eee6dce2c4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f425a4a366e586c6f7734316f7a673d3d2d3332342e313436326235306636396136373462633732353737383936383937322e676966",
                "https://lifeo.ru/wp-content/uploads/anime-gif-kiss-11.gif",
                "https://media2.giphy.com/media/IZIIMnpiPZwrK/giphy.gif",
                "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjKoZeHiaHhAhUp3OAKHWXcAIMQjRx6BAgBEAU&url=https%3A%2F%2Fimg-gif-manga.skyrock.com%2F2.html&psig=AOvVaw3OscYd45pV-jiWorr931We&ust=1553731967496617",
                "http://aws-cf.ados.fr/prod/photos/2/0/7/8037207/4740995/img-4740995167.gif?v=6",
                "https://media1.tenor.com/images/e00f3104927ae27d7d6a32393d163176/tenor.gif?itemid=12192866",
                "https://anime-community-germany.de/images/proxy/c1/c1165dd4a0b83e028164724fca8e3f6e594930b0.gif", //20
                "https://i.gifer.com/4elZ.gif",
                "https://media.giphy.com/media/HSgkuMRab3fK8/giphy.gif",
                "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjznYjjiaHhAhWP1uAKHRYBCjUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.deviantart.com%2Fmilady666%2Fart%2FGray-x-Lucy-kiss-animation-286782014&psig=AOvVaw3OscYd45pV-jiWorr931We&ust=1553731967496617",
                "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiU55bxiaHhAhX88eAKHeZlDpkQjRx6BAgBEAU&url=https%3A%2F%2Fplus.google.com%2F103243316223893283834%2Fposts%2Fdna4brxb6E8&psig=AOvVaw3OscYd45pV-jiWorr931We&ust=1553731967496617",
                "https://media1.tenor.com/images/2182d81bc459732fdf9bf94d1dd068c4/tenor.gif?itemid=6155634",
                "https://media1.tenor.com/images/d8ef848243e8b78b24589436b5bd3502/tenor.gif?itemid=11831573",
                "https://img.anime2you.de/2017/02/Scums-Wish-Anime-Receives-Complaints-About-Extreme-Kissing-1.gif",
                "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi8k6vQiqHhAhUGkhQKHVgvBlEQjRx6BAgBEAU&url=https%3A%2F%2Fsteamcommunity.com%2Fsharedfiles%2Ffiledetails%2F%3Fl%3Dgerman%26id%3D1298821847&psig=AOvVaw3OscYd45pV-jiWorr931We&ust=1553731967496617",
                "https://lh3.googleusercontent.com/-U16ReNib23M/W0Nf3vWAOlI/AAAAAAAEHQw/RTw0FHajWps1uHp1jnYBoL95fXzeGsCqgCJoC/w736-h370/anime-bad-black-and-white-black-hair-Favim.com-2589467%255B1%255D.gif",
                "https://data.whicdn.com/images/279665639/original.gif", // 30
                "https://pa1.narvii.com/6369/065d67c1235ff63f50771d2e714f2bcda7a5b91b_hq.gif",
                "https://data.whicdn.com/images/276684333/original.gif",
                "https://data.whicdn.com/images/290357181/original.gif",
                "https://orig00.deviantart.net/6ee5/f/2018/052/6/7/ezgif_com_video_to_gif__63__by_akuma319-dc3wbkv.gif",
                "https://thumbs.gfycat.com/ShowyPastInsect-size_restricted.gif",
                "https://pa1.narvii.com/6565/2956cb36d70e9c068c24e1c556cde5ba792016b8_hq.gif",
                "https://media1.tenor.com/images/d8ef848243e8b78b24589436b5bd3502/tenor.gif?itemid=11831573"

            ]
            
            let kiss = Math.floor(Math.random() * (liste.length));        // En mettant 100 le nombre maximum est 99

            let kiss_image = liste[kiss].toString()
            let kiss_embed = new Discord.RichEmbed()
            .setTitle("💖 **" + msg.author.username + " a embrassé " + msg.mentions.users.first().username + "** 💖")
            .setColor("#ff5bce")
            .setImage(kiss_image)
            msg.channel.send(kiss_embed);



            
            

    },
    args: '<string>',
    help: 'Embrassez la personne que vous aimez 💘',
    hide: false
  }