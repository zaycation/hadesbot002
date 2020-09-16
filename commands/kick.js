module.exports = {
  name: "kick",
  category: "moderation",
  description: "Kick anyone with one shot xD",
  usage: "kick <@user> <reason>",
  execute(message, args) {

    let target = message.mentions.members.first();

    if (!target) {
      return message.channel.send(
        `**${message.author.username}**, Please mention the person who you want to kick`
      );
    } else if (target.id === message.author.id) {
      return message.channel.send(
        `**${message.author.username}**, You can not kick yourself`
      );
    } else if (!args[1]) {
      return message.channel.send(
        `**${message.author.username}**, Please Give Reason to kick`
      );
    }

    message.channel.send({
      embed: {
        color: 15844367,
        title: "Action: Kick",
        description: `Kicked ${target} (${target.id})\nKicked by ${message.author.username}`,
      },
    });

    target.kick(args[1]);
  },
};
