module.exports = {
	name: 'ping',
	description: 'Ping!',execute(message) {
        message.channel.send({embed: {
			color: 15844367,
			title: 'Invisible Ping-Pong',
			description: 'Pong!!!\n\nType `!ping` to hit the ball back to me.',
          }});
    },
};