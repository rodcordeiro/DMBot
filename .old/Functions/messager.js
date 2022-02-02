const MESSAGE_TIME = 6000; // Tempo entre uma mensagem e outra

function messager(bot) {
  const server = bot.channels.cache.get("699699656241840129"); // testes
  // console.log({ server });
  setInterval(() => {
    server.send("Teste");
  }, MESSAGE_TIME);
}
module.exports = messager;
