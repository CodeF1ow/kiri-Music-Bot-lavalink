//Here the command starts
const {
	MessageEmbed
} = require("discord.js")
const config = require("../../botconfig/config.json")
const ee = require("../../botconfig/embed.json")
const emoji = require(`../../botconfig/emojis.json`);
module.exports = {
	name: "howtohost", //the name of the command
	category: "💪 Source-Help", //the category this will be listed at, for the help cmd
	aliases: ["hth", "howto"], //every parameter can be an alias
	cooldown: 5, //this will set it to a 2 second cooldown
	usage: "howtohost", //this is for the help command for EACH cmd
	description: "Explaination on how to host this Bot", //the description of the command
	run: async (client, message, args, user, text, prefix) => {
		message.channel.send(new MessageEmbed()
			.setTitle(`Installation | How to use the Bot`)
			.setURL("https://www.npmjs.com/package/erela.js")
			.setColor(ee.color).setFooter(ee.footertext, ee.footericon)
		);
	}
};

