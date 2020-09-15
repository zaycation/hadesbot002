module.exports = {
  name: 'blackjack',
  aliases: ['bj'],
  description: 'simple blackjack game',
  execute(message) {
    if(!message.guild.me.hasPermission('ADD_REACTIONS'))
      return message.reply ('I do not have the proper perms to add reactions!!');
    let playerCard1 = Math.floor(Math.random() * 11) + 2;
    let playerCard2 = Math.floor(Math.random() * 11) + 2;
    let botCard1 = Math.floor(Math.random() * 11) + 2;
    let botCard2 = Math.floor(Math.random() * 11) + 2;
    let playerTotal = playerCard1 + playerCard2;
    let botTotal = botCard1 + botCard2;
    let playerArray =[];
    let botArray = [];
    playerArray.push(playerCard1);
    playerArray.push(playerCard2);
    botArray.push(botCard1);
    botArray.push(botCard1);
    let embed = new Discord.MessageEmbed()
    .setTitle('Blackjack')
    .setDescription(`Your hand: ${playerCard1},${playerCard2}:${playerTotal}\nHades hand: ${botCard1},${botCard2}:${botTotal}\n`)
  },
};
