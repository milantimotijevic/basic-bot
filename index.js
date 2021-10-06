require('dotenv').config();

const { interpretCommand } = require('./service/command');

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

client.on('ready', async () => {
	console.log('ready');
});

client.on('voiceStateUpdate', async(oldState, newState) => {
	interpretCommand(oldState.id, {
		deafOld: oldState.selfDeaf,
		deafNew: newState.selfDeaf,
		muteOld: oldState.selfMute,
		muteNew: newState.selfMute 
	})
});

client.on('message', async (message) => {
	console.log('message detected')
});
