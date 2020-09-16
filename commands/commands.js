module.exports = {
  name: "commands",
  description: "Quick list of all commands in the chat",
  args: true,
  cooldown: 5,
  execute(message) {
    message.channel.send({
      embed: {
        color: 15844367,
        title: "Here's a list of all my commands:",
        description:
          "\n`[Always remember, my prefix is !]`\n\n**General Cmds**\n!args-info\n!avatar\n!help\n!kick\n!ping\n!purge\n!server-info\n!user-info\n**Moderation Cmds**\n!ban <@user> <reason>\n!kick <@user> <reason>\n\nAlways remember you can run `!help <command>` for additional info on how each command works",
      },
    });
  },
};
