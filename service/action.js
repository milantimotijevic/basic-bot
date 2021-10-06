const state = require('./state');
const { getChannelByName } = require('./channel');

const callToArms = (guildId) => {
    const guild = state.client.guilds.cache.get(guildId);
    const soldierChannel = getChannelByName(guild, 'soldier');
    
    if (!soldierChannel || !soldierChannel.id) {
        console.log('Failed Call To Arms action, channel "soldier" not found');
        return;
    }

    console.log(soldierChannel.id);
};

const breakOut = (guildName) => {
    console.log('Issuing BreakOut command...');
};

module.exports = {
    callToArms,
    breakOut
}