const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js");

module.exports = {
  name: "help",
  description: "Show Bot's Help Menu",

  run: async (client, interaction, args) => {

      const BotInfo = new MessageEmbed()
      .setColor('#8112df')
      .setThumbnail(client.user.displayAvatarURL())
      .setTitle(`${client.user.username}'s Help menu`)
      .addField('**Categories:**', "[`Information`, `Music`](https://www.vivre.cf/pages/vivre-music/invite)")
      .addField('**Prefix:**', `${client.config.prefix}`)
      .addField('**Navigation Help:**', 'Click on the menu to select a category')
      .addField('**Bot by:**', "[Ahad#3257](https://www.itscruel.cf)")
      .setImage("https://cdn.discordapp.com/attachments/914513217659756585/981694670612623360/unknown.png")
      .setFooter({
        text: `Requested by ${interaction.user.username}`}
        )
      .setTimestamp();


      const Information = new MessageEmbed()
      .setColor('#ff0000')
      .setTitle('ℹ Information')
      .addField('`/help`', '```js\nFunction: Shows help menu.\nAliases: null.\n```')
      .addField('`/botinfo`', '```js\nFunction: See Information about bot.\nAliases: info.\n```')
      .addField('`/ping`', '```js\nFunction: Shows ping.\nAliases: null.\n```')
      .addField('`/invite`', '```js\nFunction: Gives Invite Link.\nAliases: invite-me.\n```')
      .addField('`/support`', '```js\nFunction: Gives Support Server Invite Link.\nAliases: null.\n```')
      .setFooter({
        text: "Bot made with ♥ by Ahad#3257"
      });

      const music = new MessageEmbed()
      .setColor("#8112df")
      .setTitle('📀 Music')
      .addField('`/play`', '```js\nFunction: Play a Song.\nAliases: p.\n```')
      .addField('`/skip`', '```js\nFunction: Skips the Song.\nAliases: null.\n```')
      .addField('`/stop`', '```js\nFunction: Stops the Song.\nAliases: null.\n```')
      .addField('`/pause`', '```js\nFunction: Pause the Song.\nAliases: null.\n```')
      .addField('`/resume`', '```js\nFunction: Resume the Song.\nAliases: null.\n```')
      .addField('`/join`', '```js\nFunction: Joins the voice channel.\nAliases: null.\n```')
      .addField('`/leave`', '```js\nFunction: Leaves the voice channel.\nAliases: dc, disconnect.\n```')
      .addField('`/volume`', '```js\nFunction: Sets volume of song.\nAliases: null.\n```')
      .addField('`/queue`', '```js\nFunction: Shows the queue that is currently being played.\nAliases: q.\n```')
      .addField('`/loop`', '```js\nFunction: Loops the queue or a song that is currently being played.\nAliases: l.\n```');

    const components = (state) => [
      new MessageActionRow().addComponents(
        new MessageSelectMenu()
          .setCustomId("help-menu")
          .setPlaceholder(`${client.user.username}'s Help Panel`)
          .setDisabled(state)
          .addOptions([
            {
              label: "Information",
              emoji: "ℹ",
              description: 'See Informative Commands',
              value: "option1",
            },
            {
              label: "Music",
              emoji: "📀",
              description: 'See Music Commands',
              value: "option2",
            },        
          ])
      ),
    ];

    const initialMessage = await interaction.followUp({
      embeds: [BotInfo],
      components: components(false),
    }).catch((e) => {

  });

      const collector = interaction.channel.createMessageComponentCollector({
        componentType: "SELECT_MENU",
      });
  
      collector.on("collect", (message) => {
        if(message.values[0] == "option1") {
          initialMessage.edit({ embeds: [Information] });
      }
      if(message.values[0] == "option2") {
        initialMessage.edit({ embeds: [music] });
    }

      });

},
};
