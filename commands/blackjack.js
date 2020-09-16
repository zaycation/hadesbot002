module.exports = {
	name: 'blackjack',
	description: 'quick bj game',execute(message) {
        
        let playerCard1 = Math.floor(Math.random() * 11) + 2;
        let playerCard2 = Math.floor(Math.random() * 11) + 2;
        let botCard1 = Math.floor(Math.random() * 11) + 2;
        let botCard2 = Math.floor(Math.random() * 11) + 2;
        let playerTotal = playerCard1 + playerCard2;
        let botTotal = botCard1 + botCard2;
        let playerArray = [];
        let botArray = [];
        playerArray.push(playerCard1);
        playerArray.push(playerCard2);
        
        botArray.push(botCard1);
        botArray.push(botCard2);


        message.channel.send({embed: {
			color: 15844367,
			title: 'Blackjack Game...',
			description: `Your Hand: ${playerCard1},${playerCard2}:${playerTotal}\nBots Hand: ${botCard1},${botCard2}:${botTotal}\n`,
          }});
    },
};