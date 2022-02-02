const Discord = require("discord.js");

const messager = require("../Functions/messager");

const MESSAGE_TIME = 6000; // Tempo entre uma mensagem e outra
const execute = (bot, msg, args) => {
  //   console.log(msg);
  //   const server = bot.channels.cache.get("699699656241840129"); // testes
  //   console.log({ server });
  setInterval(() => {
    msg.channel.send("Teste");
  }, MESSAGE_TIME);
  //   const exampleEmbed = new Discord.MessageEmbed()
  //     .setColor("#0099ff")
  //     .setTitle("Some title")
  //     .setURL("https://discord.js.org/")
  //     .setAuthor(
  //       msg.author.username,
  //       `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png`
  //     )
  //     .setDescription("Some description here")
  //     .setThumbnail("https://i.imgur.com/wSTFkRM.png")
  //     .addFields(
  //       { name: "Regular field title", value: "Some value here" },
  //       { name: "\u200B", value: "\u200B" },
  //       { name: "Inline field title", value: "Some value here", inline: true },
  //       { name: "Inline field title", value: "Some value here", inline: true },
  //       { name: "\u200B", value: "\u200B" },
  //       { name: "\u200B", value: "**Status**" }
  //     )
  //     .addField("Inline field title", "Some value here", true)
  //     .setImage("https://i.imgur.com/wSTFkRM.png")
  //     .setTimestamp()
  //     .setFooter("Some footer text here", "https://i.imgur.com/wSTFkRM.png");

  const attachEmbed = new Discord.MessageEmbed()
    .setTitle("Image embed")
    .attachFiles(["./src/result.png"])
    .setImage("attachment://result.png");
  return msg.reply(attachEmbed);
};
module.exports = {
  name: "teste",
  help: "Execute some test that doesnt matter what.",
  execute,
};
