const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "skip",
  description: "Skips the song.",
  aliases: [],

  run: async(client, interaction, args) =>  {
   try {
    const VoiceChannel = interaction.member.voice.channel;
    const queue = await client.distube.getQueue(VoiceChannel);
    let embed_1 = new MessageEmbed()
    .setDescription(':x: | You have to be in a voice channel in order to listen music.')
    .setColor('RANDOM');
    if(!VoiceChannel) return interaction.followUp({embeds: [embed_1]}).catch((e) => {

  });

    let embed_2 = new MessageEmbed()
    .setDescription("✅ | Skipped the song.")
    .setColor('RANDOM');

      if(!queue || !queue.songs || queue.songs.length == 0) return interaction.followUp(":x: | I am not playing anything.");
        await queue.skip(VoiceChannel);
        interaction.followUp({embeds: [embed_2]}).catch((e) => {

      });
    } catch (err) {
      let embed_3 = new MessageEmbed()
      .setDescription(`✅ | Can't skip song because there is no next song in the queue.`)
      .setColor('RANDOM');
        interaction.followUp({ embeds: [embed_3]}).catch((e) => {

      });
        console.log(err);
      };
  },
};