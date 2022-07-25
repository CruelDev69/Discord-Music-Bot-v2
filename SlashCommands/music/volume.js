const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "volume",
  description: "Sets song's volume",
  options: [
    {
      name: "number",
      description: "provide a number.",
      type: "NUMBER",
      required: true,
    }
  ],

  run: async(client, interaction, args) =>  {
    const VoiceChannel = interaction.member.voice.channel;
    const Volume = interaction.options.getNumber("number")

    let embed_1 = new MessageEmbed()
    .setDescription(':x: | You have to be in a voice channel in order to listen music.')
    .setColor('RANDOM');
    if(!VoiceChannel) return interaction.followUp({embeds: [embed_1]}).catch((e) => {

  });

    let embed_2 = new MessageEmbed()
    .setDescription(`✅ | Set volume to ${Volume}%`)
    .setColor('RANDOM');

    try {
        if(Volume > 100 || Volume < 1) return interaction.followUp(":x: | Choose between 0 to 100");
      client.distube.setVolume(VoiceChannel, Volume)
      return interaction.followUp({embeds: [embed_2]}).catch((e) => {

    });
    } catch (e) {
      const embed = new MessageEmbed()
      .setDescription(`:x: | Error: ${interaction.guild.me.voice.channelId}!`)
      .setColor("RANDOM");
      interaction.followUp({embeds: [embed]}).catch((e) => {

    });
      console.log(e); 
    };
  },
};