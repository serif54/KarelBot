const fs = require('fs');
const { prefix, token } = require('./config.json');

const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log(`Connected as ${client.user.tag}`);
    
    client.user.setActivity("with the editor");

    let generalChannel = client.channels.get("676396478591270925");
    generalChannel.send("Hi! :smiley:");
})

client.on('message', message => {
    const args = message.content.slice(prefix.length).split(/ /);
    const command = args.shift().toLowerCase();
    
    if (!client.commands.has(command)) return;

    try {
	    client.commands.get(command).execute(message, args);
    }   catch (error) {
	console.error(error);
	message.channel.send('Something went wrong');
}
});
client.login(token)