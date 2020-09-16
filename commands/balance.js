const db = require("quick.db");
module.exports = {
  name: "balance",
  description: "Quickly get user balance",
  execute(message) {
    let user;
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else if (args[0]) {
      user = message.guild.members.cache.get(args[0]).user;
    } else {
      user = message.author;
    }

    if (user.bot || user === client.user) {
      return message.channel.send("This user is a bot.");
      // If the user was a bot, ignore it.
    }

    let balance = db.get(`account.${user.id}.balance`);
    if (!balance) balance = 0;
    else balance = balance;
    
    const embed = new Discord.MessageEmbed()
    .setColor(15844367)
    .setTitle(`Balance of ${user.tag}`)
    .addField("Balance", `$${(balance).toLocaleString()}`)
    .setThumbnail(user.displayAvatarURL({size: 4096, dynamic: true}))
    .setTimestamp(new Date) // Optional :)
    return message.channel.send(embed);
}
    
  };
