module.exports = {
  name: "ban",
  category: "moderation",
  description: "Ban anyone with one shot xD",
  usage: "<@user> <reason>",
  execute(message, args) {
    if (!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(
        `**${message.author.username}**, You do not have perms to ban someone`
      );
    } else if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(
        `**${message.author.username}**, I am do not have perms to ban someone`
      );
    }

    const target = message.mentions.members.first();

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
        description: `Banned ${target} | ID: (${target.id})\nReason: ${args[1]}\n\n*Mod: ${message.author.username}*`,
      },
    });

    target.ban(args[1]);
  },
};
