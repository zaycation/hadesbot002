module.exports = {
	name: 'kick',
	description: 'Tag a member and kick them (but not really).',
	execute(message) {
		
		if (msg.content.startsWith("$kick ")) {
			if (msg.mentions.members.first()) {
				msg.mentions.members.first.kick().then((member) => {
					msg.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
				}).catch(() => {
					msg.channel.send("I do not have permissions to do this");
				});
			}
		}else if (msg.content.startsWith("$ban ")) {
			if (msg.mentions.members.first()) {
				msg.mentions.members.first.ban().then((member) => {
					msg.channel.send(":wave: " + member.displayName + " has been successfully banned :point_right: ");
				}).catch(() => {
					msg.channel.send("I do not have permissions to do this");
				});
			}
		}
	},
};