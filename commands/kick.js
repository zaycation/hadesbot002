module.exports = {
  name: "kick",
  category: "moderation",
  description: "Kick anyone instantly",
  usage: "kick <@user> <reason>",
  execute(message, args) {
    if (!message.member.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(
        `**${message.author.username}**, You do not have the perms to use this command`
      );
    }

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(
        `**${message.author.username}**, I do not have the perms to use this command`
      );
    }

    let target = message.mentions.members.first();

    if (!target) {
      return message.channel.send(
        `**${message.author.username}**, Please @ mention the person you want to kick`
      );
    } else if (target.id === message.author.id) {
      return message.channel.send(
        `**${message.author.username}**, You can not kick yourself idiot smh`
      );
    } else if (!args[1]) {
      return message.channel.send(
        `**${message.author.username}**, Please provide me with a reason to kick dumbass...`
      );
    }

    message.channel.send({
      embed: {
        color: 15844367,
        title: "Action: Kick",
        description: `Kicked ${target} | ID: (${target.id})\nReason: ${reason}\n*Mod: ${message.author.username}*`,
      },
    });

    target.kick(args[1]);
  },
};
