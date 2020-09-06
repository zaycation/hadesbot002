module.exports = {
	name: 'kick',
	description: 'Tag a member and kick them (but not really).',
	execute(message) {
		
		if(!message.member.hasPermission('KICK_MEMBERS'))
        message.channel.send("You don't have permission to use that command.");
    else {
        let member = message.guild.members.cache.get(args);
        if(member) {
        try {
            await member.kick();
            console.log('Kicked');
            message.channel.send(`${member}, Kicked!`)
        }
            catch(err) {
            console.log(err);
        }
    }
}
	},
};