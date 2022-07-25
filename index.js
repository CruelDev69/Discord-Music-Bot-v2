const { Client, Collection, Intents } = require("discord.js");

const client = new Client({ intents: [Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES] });

// Global Variables
client.slashCommands = new Collection();
client.config = require("./config.json");
// Initializing the project
require("./handler")(client);

// Making DisTube client
const { DisTube } = require("distube");
const { YtDlpPlugin } = require("@distube/yt-dlp");
const { SpotifyPlugin } = require("@distube/spotify");
const { SoundCloudPlugin } = require("@distube/soundcloud");
let spotifyoptions = {
    parallel: true,
    emitEventsAfterFetching: true,
  };
client.distube = new DisTube(client, {
    emitNewSongOnly: true,
    leaveOnFinish: true,
    emitAddSongWhenCreatingQueue: false,
    youtubeDL: false,
    plugins: [new YtDlpPlugin(), new SpotifyPlugin(spotifyoptions), new SoundCloudPlugin()],
});
module.exports = client;

client.login(client.config.token);