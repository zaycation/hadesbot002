module.exports = {
	name: 'loot',
	description: 'Loot randomly',execute(message) {
        
        let lootingAmount = Math.round(Math.random() * (2000 - 300) + 300);

        message.channel.send({embed: {
			color: 15844367,
			title: 'Looting Results...',
			description: `${message.author.tag} breaks a few locks to loot! The cops don't catch you this time....  You find ${lootingAmount} 😎`,
          }});
    },
};