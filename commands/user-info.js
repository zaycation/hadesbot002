module.exports = {
	name: 'user-info',
	description: 'Display info about yourself.',
	execute(message) {
        message.channel.send({embed: {
            color: 15844367,
            title: `Discord Tag: ${message.author.tag}`,
            description: `\n**Your ID:** ${message.author.id}\n**Created:** ${message.author.createdAt}\n\n**Is User A Bot?** ${message.author.bot}\n\n**Last Message:** \n> ${message.author.lastMessage}\n\n**User's Avatar:** ${message.author.displayAvatarURL({ dynamic: true })}`
          }});
    },
};
