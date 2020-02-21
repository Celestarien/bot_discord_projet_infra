"use strict";

const botconfig = require("./botconfig.json");
var Discord = require("discord.js");
var fs = require('fs');

var bot = new Discord.Client({ autoReconnect: true });

bot.OWNERID = botconfig.ownerid;
bot.PREFIX = botconfig.prefix;
bot.TOKEN = botconfig.token;
bot.DETAILED_LOGGING = false;
bot.DELETE_COMMANDS = false;

bot.COLOR = 0x351C75;
bot.SUCCESS_COLOR = 0x00ff00;
bot.ERROR_COLOR = 0xff0000;
bot.INFO_COLOR = 0x0000ff;

String.prototype.padRight = function (l, c) { return this + Array(l - this.length + 1).join(c || " ") }

bot.sendNotification = function (info, type, msg) {
	var icolor;

	if (type == "success") icolor = bot.SUCCESS_COLOR;
	else if (type == "error") icolor = bot.ERROR_COLOR;
	else if (type == "info") icolor = bot.INFO_COLOR;
	else icolor = bot.COLOR;

	let embed = {
		color: icolor,
		description: info
	}
	msg.channel.sendMessage('', { embed });
}

var commands = {}

commands.help = {};
commands.help.args = '';
commands.help.help = "Affiche la liste des commandes utilisables.";
commands.help.main = function (bot, msg) {
	var cmds = [];

	for (let command in commands) {
		if (!commands[command].hide) {
			cmds.push({
				name: bot.PREFIX + command,
				value: "*" + commands[command].help + "*",
				inline: false
			});
		}
	}

	let embed = {
		color: bot.COLOR,
		description: "🛠️ **Voici une liste de commandes que vous pouvez utiliser.**",
		fields: cmds,
	}

	msg.channel.sendMessage('', { embed });
}

commands.load = {};
commands.load.args = '<command>';
commands.load.help = '';
commands.load.hide = true;
commands.load.main = function (bot, msg) {
	if (msg.author.id == bot.OWNERID) {
		try {
			delete commands[msg.content];
			delete require.cache[__dirname + '/commands/' + msg.content + '.js'];
			commands[msg.content] = require(__dirname + '/commands/' + msg.content + '.js');
			bot.sendNotification("Loaded " + msg.content + ".js succesfully.", "success", msg);
		} catch (err) {
			bot.sendNotification("The command was not found, or there was an error loading it.", "error", msg);
		}
	} else {
		bot.sendNotification("⛔ Vous n'êtes pas autorisé à utiliser cette commande.", "error", msg);
	}
}

commands.unload = {};
commands.unload.args = '<command>';
commands.unload.help = '';
commands.unload.hide = true;
commands.unload.main = function (bot, msg) {
	if (msg.author.id == bot.OWNERID) {
		try {
			delete commands[msg.content];
			delete require.cache[__dirname + '/commands/' + msg.content + '.js'];
			bot.sendNotification("Unloaded " + msg.content + ".js succesfully.", "success", msg);
		}
		catch (err) {
			bot.sendNotification("Command not found.", "error", msg);
		}
	} else {
		bot.sendNotification("⛔ Vous n'êtes pas autorisé à utiliser cette commande.", "error", msg);
	}
}

commands.reload = {};
commands.reload.args = '';
commands.reload.help = '';
commands.reload.hide = true;
commands.reload.main = function (bot, msg) {
	if (msg.author.id == bot.OWNERID) {
		try {
			delete commands[msg.content];
			delete require.cache[__dirname + '/commands/' + msg.content + '.js'];
			commands[args] = require(__dirname + '/commands/' + msg.content + '.js');
			bot.sendNotification("Reloaded " + msg.content + ".js successfully.", "success", msg);
		}
		catch (err) {
			msg.channel.sendMessage("Command not found");
		}
	} else {
		bot.sendNotification("⛔ Vous n'êtes pas autorisé à utiliser cette commande.", "error", msg);
	}
}

var loadCommands = function () {
	var files = fs.readdirSync(__dirname + '/commands');
	for (let file of files) {
		if (file.endsWith('.js')) {
			commands[file.slice(0, -3)] = require(__dirname + '/commands/' + file);
			if (bot.DETAILED_LOGGING) console.log("Loaded " + file);
		}
	}
	console.log("———— All Commands Loaded! ————");
}

var checkCommand = function (msg, isMention) {
	if (isMention) {
		var command = msg.content.split(" ")[1];
		msg.content = msg.content.split(" ").splice(2, msg.content.split(' ').length).join(' ');
		if (command) commands[command].main(bot, msg);
	} else {
		var command = msg.content.split(bot.PREFIX)[1].split(" ")[0];
		msg.content = msg.content.replace(bot.PREFIX + command + " ", "");
		try {
			if (command) commands[command].main(bot, msg);
		} catch (err) {
			msg.channel.send("❌ Commande inconnue ou alors il manque un élément !")

			fs.appendFile('logs.log', '[' + Date("YYYY-MM-DD hh:mm:ss") + '] ' + msg.author.username + ' ' + msg.author + ' ' + msg + ' ' + 'Unknown Command \n')
			//DATE USER ID ACTION Unknow_Command
		}

	}
}


bot.on("ready", () => {
	console.log('[√] Ready to begin! Serving in ' + bot.guilds.array().length + ' servers.');
	bot.user.setStatus("online", "");
	let status = [
		bot.guilds.size + " serveurs",
		bot.PREFIX + "help",
		bot.users.size + " utilisateurs",
	]
	setInterval(function () {
		let status_final = status[Math.floor(Math.random() * status.length)]
		bot.user.setActivity(status_final, { type: "WATCHING" })
	}, 5000)
	// bot.user.setActivity(bot.guilds.array().length.toString() + " serveur(s)", {type: "WATCHING"});
	loadCommands();
});

bot.on("message", msg => {
	if (msg.content.startsWith('<@' + bot.user.id + '>') || msg.content.startsWith('<@!' + bot.user.id + '>')) {
		checkCommand(msg, true);
		if (bot.DELETE_COMMANDS) msg.delete();
	} else if (msg.content.startsWith(bot.PREFIX)) {
		checkCommand(msg, false);
		if (bot.DELETE_COMMANDS) msg.delete();
	}
});

bot.on('error', (err) => {
	console.log("————— BIG ERROR —————");
	console.log(err.message);
	console.log("——— END BIG ERROR ———");
});

bot.on("disconnected", () => {
	console.log("Disconnected!");
});


bot.login(bot.TOKEN);
