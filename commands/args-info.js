module.exports = {
	name: 'args-info',
	description: 'Information about the arguments provided.',
	args: true,
	execute(message, args) {
		message.channel.send('Would you like additional help on the commands? Type `!help <command>`\n\nLike this:\n\n`!help purge`');
	},
};