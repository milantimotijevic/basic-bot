const state = require('./state');
const { getChannelByName } = require('./channel');

const callToArms = (guildId) => {
    const guild = state.client.guilds.cache.get(guildId);
    const soldierChannel = getChannelByName(guild, 'soldier');
    
    if (!soldierChannel || !soldierChannel.id) {
        console.log('Failed Call To Arms action, channel "soldier" not found');
        return;
    }

    guild.members.cache.forEach((member) => {
       
        if (!member.user.bot) {
            member.voice.setChannel(soldierChannel.id)
        }
        
    })
};

const breakOut = (guildId) => {
    const guild = state.client.guilds.cache.get(guildId);
    guild.members.cache.forEach((member) => {

        let role;
        if (member && !member.user.bot && member.roles && member.roles.cache) {
            member.roles.cache.forEach((r) => {
                if (r && r.name && r.name !== '@everyone') {
                    role = r;
                    return;
                }
            });

            const targetChannel = getChannelByName(guild, role.name);
            if (!targetChannel || !targetChannel.id) {
                console.log(`Failed Break Out for member "${member.user.id}", channel "${role.name}" not found`);
            }

            member.voice.setChannel(targetChannel.id)
        }
    });
};

module.exports = {
    callToArms,
    breakOut
}