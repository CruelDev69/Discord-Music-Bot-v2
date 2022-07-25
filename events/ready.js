const client = require("../index");

client.on("ready", async () => {
    console.log(`${client.user.tag} is now online ok?`);
    console.log("A music bot made with ♥ by Ahad#3257");
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } 
        let serverIn = numberWithCommas(client.guilds.cache.size);
        let totalMembers = numberWithCommas(client.guilds.cache.reduce((a,b) => a + b.memberCount, 0));

        client.user?.setPresence({
            status: "idle", // You can also use online, invisible and dnd.
            activities: [
                {
                    name: `/help || ${totalMembers} users in ${serverIn} servers`,
                    type: "LISTENING" // You can also use PLAYING, STREAMING, WATCHING and COMPETING.
                }
            ]
    });
});
