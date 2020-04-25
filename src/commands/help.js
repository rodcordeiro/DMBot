const execute = (bot,msg,args) => {
    let string= '==> Opa, aqui está o que eu sei fazer:\n';
    bot.commands.forEach(command => {
        if (command.help){
            string += `**${process.env.PREFIX + command.name}:** *${command.help}*\n`
        }
    })
    return msg.channel.send(string)
};

module.exports={
    name:"help",
    help:"Exibe os comandos possíveis",
    execute
}