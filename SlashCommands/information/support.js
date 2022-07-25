const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

module.exports = {
    name: "support",
    description: "Support's server link.",

    run: async(client, interaction, args) => {
     const button = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('Join my server')
          .setURL("https://discord.gg/hW5yWHgEtf")
					.setStyle("LINK"),
			);


    const sembed = new MessageEmbed()
    .setColor('#8112df')
    .setTitle(`Join ${client.user.username}'s support server now`)
    .setImage(client.user.displayAvatarURL())
    .setFooter({
      text: `${client.user.username}`, 
      iconURL: client.user.displayAvatarURL({dynamic: true})})
      interaction.followUp({embeds: [sembed], components: [button]}).catch((e) => {
 
    });
}
}
