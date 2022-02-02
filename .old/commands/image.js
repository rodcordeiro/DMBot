const Discord = require("discord.js");
const Canvas = require("canvas");

const execute = async (bot, msg, args) => {
  const applyText = (canvas, text) => {
    const ctx = canvas.getContext("2d");
    let fontSize = 70;

    do {
      ctx.font = `${(fontSize -= 10)}px Courier`;
    } while (ctx.measureText(text).width > canvas.width - 300);

    return ctx.font;
  };

  const channel = bot.channels.cache.find((ch) => ch.name === "xiu");
  if (!channel) return;
  const canvas = Canvas.createCanvas(700, 250);
  const ctx = canvas.getContext("2d");

  const background = await Canvas.loadImage(
    "https://rodcordeiro.github.io/shares/img/hacker.jpg"
  ); //https://rodcordeiro.github.io/shares/img/
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#74037b";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  ctx.font = "28px Sans-serif";
  ctx.fillStyle = "#ffffff";
  ctx.fillText(
    "Welcome to the server,",
    canvas.width / 2.5,
    canvas.height / 3.5
  );

  ctx.font = applyText(canvas, `RodCordeiro!`);
  ctx.fillStyle = "#ffffff";
  ctx.fillText(`RodCordeiro!`, canvas.width / 2.5, canvas.height / 1.8);

  ctx.beginPath();
  ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.clip();

  const avatar = await Canvas.loadImage(
    msg.author.displayAvatarURL({ format: "jpg" })
  );
  ctx.drawImage(avatar, 25, 25, 200, 200);

  const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
    "welcome-image.png"
  );

  return channel.send(`Welcome to the server, $Rod!`, attachment);
};

module.exports = {
  name: "image",
  help: "Exibe os comandos possíveis",
  execute,
};
