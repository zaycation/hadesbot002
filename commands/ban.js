module.exports = {
  name: "ban",
  category: "moderation",
  description: "Ban anyone with one shot xD",
  usage: "ban <@user> <reason>",
  execute(message, args) {

    let target = message.mentions.members.first();

    if (!target) {
      return message.channel.send(
        `**${message.author.username}**, Please @ mention the person you want to ban`
      );
    } else if (target.id === message.author.id) {
      return message.channel.send(
        `**${message.author.username}**, You can not ban yourself idiot smh`
      );
    } else if (!args[1]) {
      return message.channel.send(
        `**${message.author.username}**, Please provide me with a reason to ban dumbass...`
      );
    }

    message.channel.send({
      embed: {
        color: 15844367,
        title: "Action: Ban",
        description: `Banned ${target} | ID: (${target.id})\nReason: ${reason}\nMod: ${message.author.username}`,
      },
    });

    target.ban(args[1]);
  },
};
