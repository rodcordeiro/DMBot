const MESSAGE_TIME = 60000; // Tempo entre uma mensagem e outra

function messager(bot){
  const server = bot.channels.cache.get('699699656241840129')
  setInterval(()=>{
    server.send('Teste')
  },MESSAGE_TIME)
}
module.exports = messager;