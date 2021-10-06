Getting connection based off of a message
const connection = await message.member.voice.channel.join();

getting channel id from connection
connection.channel.id
