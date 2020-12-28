const options = require('../RPG/options')
const functions = require('../RPG/functions')
const Discord = require('discord.js');

class Character{
    constructor(){
        this.attributes = {
            FR:0, //Força
            CON:0, //Constituição
            DEX:0, //Destreza
            AGI:0, //Agilidade
            INT:0, //Inteligência
            WILL:0, //Força de vontade
            PER:0, //Percepção
            CAR:0 //Carísma
        };
        this.stats={
            PV:0
        };
        this.race = functions.randSelect(options.races);
        this.class= functions.randSelect(options.classes);
        this.classExpertise = this.class.classExpertise;
        this.weapons = this.class.weapons;
        this.specialHabilities = this.class.specialHabilities;
        this.gender = functions.randSelect(options.genders);
        this.name = functions.randSelect(options.names) +" "+functions.randSelect(options.nicknames);
        this.racialSkills = [];
        this.weakness = [];
    };
}


const execute = (bot,msg,args)=>{
    var character = new Character();
    functions.updateAttributes(character);

const characterEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle(character.name)
	// .setURL('https://discord.js.org/')
	.setAuthor(msg.author.username, `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png`)
	.setDescription('RPG Character automatically created')
    .setThumbnail('https://rodcordeiro.github.io/shares/img/privateinvestocat.jpg')
	.addFields(
		{ name: 'Race', value: character.race.race, inline: true },
        { name: 'Gender', value: character.gender, inline: true },
        { name: 'Racial skills', value: character.racialSkills },
		{ name: '\u200B', value: '\u200B' },
        
        { name: 'Class', value: character.class.class, inline: true },
        { name: 'Class Expertise', value: character.class.classExpertise, inline: true },
        { name: 'Special habilities', value: character.specialHabilities, inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: '\u200B', value: '**Status**' },
        { name: 'Life Points', value: character.stats.PV },
        { name: 'Força', value: character.attributes.FR, inline: true },
        { name: 'Constituição', value: character.attributes.CON, inline: true },
        { name: 'Destreza', value: character.attributes.DEX, inline: true },
        { name: 'Agilidade', value: character.attributes.AGI, inline: true },
        { name: 'Inteligência', value: character.attributes.INT, inline: true },
        { name: 'Força de vontade', value: character.attributes.WILL, inline: true },
        { name: 'Percepção', value: character.attributes.PER, inline: true },
        { name: 'Carisma', value: character.attributes.CAR, inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: 'Weapons', value: character.weapons },
		
	)
	.setImage('https://i.imgur.com/wSTFkRM.png')
    // .attachFiles(['https://rodcordeiro.github.io/shares/img/privateinvestocat.jpg'])
    .setFooter('Created by DMBot', 'https://rodcordeiro.github.io/shares/img/logo.png');
    
    
    return msg.reply(characterEmbed)
}
module.exports={
    name:"create",
    help:"Creates a new rpg character",
    execute
}