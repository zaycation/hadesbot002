module.exports = {
	name: 'server-info',
	description: 'Display info about this server.',
	execute(message) {
        message.channel.send({embed: {
			color: 15844367,
			title: `${message.guild.name}`,
			description: `\n**Region:** ${message.guild.region}\n**Total members:** ${message.guild.memberCount}\n**Number of Boosts:** ${message.guild.premiumSubscriptionCount} **| Boost Tier:** ${message.guild.premiumTier}\n**Server Owner:** ${message.guild.owner} **| ID:** ${message.guild.ownerID}`,
          }});
    },
};
