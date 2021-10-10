const {
  MessageEmbed
} = require("discord.js")
const config = require("../../botconfig/config.json")
const ee = require("../../botconfig/embed.json")
const emoji = require(`../../botconfig/emojis.json`);
module.exports = {
  name: "source",
  category: "💪 Source-Help",
  aliases: ["sourcecode"],
  cooldown: 2,
  usage: "sourcecode",
  description: "Shows you the Github and Source Code Information about this Bot",
  run: async (client, message, args, user, text, prefix) => {
    message.channel.send(new MessageEmbed()
      .setTitle(`This Bot is made by \`Tomato#6966\` and **this** is the Source Code link to this Bot`)
      .addField("Discord.js: ", "[\`v12.5.1\`](https://discord.js.org)", true)
      .addField("Erela.js: ", "[\`v2.3.2\`](https://solaris.codes/projects/erelajs/)", true)
      .addField("Node.js: ", "[\`v15.3.4\`](https://nodejs.org/en/)", true)
      .addField("Lavalink: ", "[\`@dev\`](https://cdn.discordapp.com/attachments/798196676405755905/827174915714711572/Lavalink.jar)")

      .setColor(ee.color).setFooter(ee.footertext, ee.footericon)
    );
  }
};

