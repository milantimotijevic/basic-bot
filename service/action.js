const state = require('./state');
const { getChannelByName } = require('./channel');

const callToArms = (guildId) => {
    const guild = state.client.guilds.cache.get(guildId);
    const soldierChannel = getChannelByName(guild, 'soldier');
    
    if (!soldierChannel || !soldierChannel.id) {
        console.log('Failed Call To Arms action, channel "soldier" not found');
        return;
    }

    guild.members.cache.forEach(async (member) => {
       
        if (!member.user.bot) {
           await member.voice.setChannel(soldierChannel.id)
        }
        
    })
};

const breakOut = (guildName) => {
    console.log('Issuing BreakOut command...');
};

module.exports = {
    callToArms,
    breakOut
}