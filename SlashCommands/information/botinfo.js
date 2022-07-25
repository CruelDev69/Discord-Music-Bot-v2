const { version: djsversion, MessageEmbed } = require("discord.js");
const moment = require('moment');

module.exports = {
    name: "botinfo",
    description: "Shows Bot's information",

    run: async (client, interaction, args) => {
        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
          let totalSeconds = (client.uptime / 1000);
          let days = Math.floor(totalSeconds / 86400);
          totalSeconds %= 86400;
          let hours = Math.floor(totalSeconds / 3600);
          totalSeconds %= 3600;
          let minutes = Math.floor(totalSeconds / 60);
          let seconds = Math.floor(totalSeconds % 60);
          let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
            
        const embed = new MessageEmbed()
        .setColor('#8112df')
        .setTitle(`${client.user.username}'s Information`)
        .setThumbnail(client.user.displayAvatarURL())
        .addField(`🤖・${client.user.username}'s Tag:`, client.user.tag)
        .addField(`🤖・${client.user.username}'s ID:`, client.user.id)
        .addField("🤖・Node.js:", process.version)
        .addField("🤖・Discord.js:", `v${djsversion}`)
        .addField("🤖・Uptime:", uptime)
        .addField("🤖・Commands Count:", `${client.slashCommands.size}`)
        .addField("🤖・Servers Count:", numberWithCommas(client.guilds.cache.size))
        .addField("🤖・Users Count:", numberWithCommas(client.guilds.cache.reduce((a,b) => a + b.memberCount, 0)))
        .addField("🤖・Created at:", `${moment(client.user.createdTimestamp).format('LT')} ${moment(client.user.createdTimestamp).format('LL')} - (${moment(client.user.createdTimestamp).fromNow()})`)
        .addField("🤖・Website:", "[thevunit.vivremusic.cf](https://www.vivre.cf/)")
        .addField("🤖・About Developer", "This Script is made with ♥ by [Ahad#3257](https://www.itscruel.cf)")
        .addField("🤖・Bots by [Ahad#3257](https://discord.com/users/839253601293172787)", "[Vivre](https://thevunit.vivre.cf/invite)\n[Vivre Music](https://thevunit.vivremusic.cf/invite)\n[Octavia](https://discord.com/api/oauth2/authorize?client_id=988088002263797761&permissions=277037272385&scope=bot%20applications.commands)\n[Reborn Gif](https://discord.com/api/oauth2/authorize?client_id=958265575853944872&permissions=277025745985&scope=bot%20applications.commands)")
        .addField("🤖・Server by [Ahad#3257](https://discord.com/users/839253601293172787)", "[Ahad's Lounge](https://discord.gg/Ncsc5pRNgf)\n[TheVUnit](https://discord.gg/MtCZC3C9K4)")
        .setFooter({
            text: `Requested by ${interaction.user.username}`}
            )
        .setTimestamp();

        interaction.followUp({ embeds: [embed] }).catch((e) => {

        });
    },
};
