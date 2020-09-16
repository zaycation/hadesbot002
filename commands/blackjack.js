module.exports = {
	name: 'blackjack',
	description: 'quick bj game',execute(message) {
        
        let playerCard1 = Math.floor(Math.random() * 11) + 2;
        let botCard1 = Math.floor(Math.random() * 11) + 2;

        message.channel.send({embed: {
			color: 15844367,
			title: 'Blackjack Game...',
			description: `Your Hand: ${playerCard1}\nBots Hand: ${botCard1}\n`,
          }});
    },
};