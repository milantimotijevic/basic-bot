require('dotenv').config();

const state = require('./service/state');
const { interpretCommand } = require('./service/command');

const Discord = require('discord.js');
state.client = new Discord.Client();
state.client.login(process.env.BOT_TOKEN);

state.client.on('voiceStateUpdate', async(oldMember, newMember) => {
	try {
		interpretCommand(newMember.id, {
			guildId: newMember.guild.id,
			deafOld: oldMember.selfDeaf,
			deafNew: newMember.selfDeaf,
			muteOld: oldMember.selfMute,
			muteNew: newMember.selfMute 
		})
	} catch (err) {
		
	}
});
