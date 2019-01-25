const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("538296844103450644")
setInterval(function() {
channel.send(`test test test test test test test test test test test Text Text Text Text Text Text test T testte`);
}, 30)
})

client.login(process.env.BOT_TOKEN);