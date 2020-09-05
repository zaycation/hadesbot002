module.exports = {
    name: 'embedtest',
    description: 'Command created to test embed functionality of Hades',
    execute(message) {
        message.channel.send({embed: {
            color: 15844367,
            title: 'embedtest',
            description: 'Embed Testing ~ Can you hear me?'
          }});
    },
};