const getChannelByName = (guild, channelName) => {
    let channel;

	guild.channels.cache.forEach(ch => {
		if (ch.name === channelName) channel = ch;
	});

	return channel;
};

module.exports = {
    getChannelByName,
}