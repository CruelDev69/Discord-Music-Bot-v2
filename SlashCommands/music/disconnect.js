const { getVoiceConnection } = require("@discordjs/voice");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "disconnect",
  description: "Leaves the voice channel.",

  run: async(client, interaction, args) =>  {
    const connection = getVoiceConnection(interaction.guild.id);

    if(!connection) return interaction.followUp(":x: | I'm not in a voice channel!").catch((e) => {

  });

    let embed = new MessageEmbed()
    .setDescription("✅ | Left voice channel.");

    connection.destroy();
    interaction.followUp({embeds: [embed]}).catch((e) => {

  });

},
};