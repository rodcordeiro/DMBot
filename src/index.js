const Discord = require('discord.js');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path')
dotenv.config();

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const commandFiles = fs
    .readdirSync(path.join(__dirname, "/commands"))
    // .filter((filename)=>{filename.endsWith(".js")})

for (var filename of commandFiles){
    const command = require(`./commands/${filename}`);
    bot.commands.set(command.name,command)
}


bot.login(process.env.TOKEN);

bot.on("ready", ()=>{
    console.log(bot.user.username +' apresentando para o serviço mestre!')
});

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'taverna-do-vader');
    if (!channel) return;
    channel.send(`Bem vindo ao **Darth Code**. ${member}, este é o território do Lord Vader, tenha respeito por aqui.`);

  });
bot.on("message",(msg)=> {
    if(!msg.content.startsWith(process.env.PREFIX) || msg.author.username == "DMBot") return;
    const args = msg.content.slice(process.env.PREFIX.length).split(" ");
    const command = args.shift();
    try{
        bot.commands.get(command).execute(bot,msg,args);
    } catch(err){
        return msg.reply("é o que fi?!")
    }
})

