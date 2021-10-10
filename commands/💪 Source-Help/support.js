//Here the command starts
const {
	MessageEmbed
} = require("discord.js")
const config = require("../../botconfig/config.json")
const ee = require("../../botconfig/embed.json")
const emoji = require(`../../botconfig/emojis.json`);
module.exports = {
	name: "support", 
	category: "💪 Source-Help", 
	aliases: ["server", "discord", "dc"], 
	cooldown: 5, 
	usage: "support",
	description: "Sends you a Link to the Support Server", 
	run: async (client, message, args, user, text, prefix) => {
		message.channel.send("Join **Milrato Development**\n\n*This is the Official Support Server for this Bot*\n\n> **Link: **https://discord.gg/pe3V7uT");
	}
};

