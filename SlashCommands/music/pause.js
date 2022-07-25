const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "pause",
  description: "Pauses the song.",

  run: async(client, interaction, args) =>  {
    const VoiceChannel = interaction.member.voice.channel;
    const queue = await client.distube.getQueue(VoiceChannel);
    let embed_1 = new MessageEmbed()
    .setDescription(':x: | You have be in a voice channel in order to listen music.')
    .setColor('RANDOM');
    if(!VoiceChannel) return interaction.followUp({embeds: [embed_1]}).catch((e) => {

  });

    let embed_2 = new MessageEmbed()
    .setDescription("✅ | Song is paused.")
    .setColor('RANDOM');

    try {
      if(!queue || !queue.songs || queue.songs.length == 0) return interaction.followUp(":x: | I am not playing anything.");
        queue.pause(VoiceChannel)
      return interaction.followUp({embeds: [embed_2]}).catch((e) => {

    });
    } catch (e) {
      const embed = new MessageEmbed()
      .setDescription(`:x: | Error: ${interaction.guild.me.voice.channelId}!`)
      .setColor("RANDOM");
      interaction.followUp({embeds: [embed]}).catch((e) => {

    });
      console.log(e) ;
    };
  },
};