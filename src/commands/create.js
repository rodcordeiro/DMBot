const options = require('../RPG/options')
const functions = require('../RPG/functions')

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
    const characterSheet = `Aqui está sua ficha:\n
_**Nome:**_ ${character.name}      _**Sexo:**_ ${character.gender}*

_**Raça:**_ ${character.race.race}
_**Habilidades de raça:**_ ${character.racialSkills}

_**Classe:**_ ${character.class.class}
_**Perícias de classe:**_ ${character.classExpertise}
_**Habilidades especiais:**_ ${character.specialHabilities}

**---Stats**
_**Pontos de Vida:**_ ${character.stats.PV}

**---Atributos**
 _**Força:**_ ${character.attributes.FR}  _**Constituição:**_ ${character.attributes.CON},
 _**Destreza:**_ ${character.attributes.DEX}  _**Agilidade:**_ ${character.attributes.AGI}   
 _**Inteligência:**_ ${character.attributes.INT}    _**Força de Vontade:**_ ${character.attributes.WILL},
 _**Percepção:**_ ${character.attributes.PER}   _**Carisma:**_ ${character.attributes.CAR}
`;

    return msg.reply(characterSheet)
}
module.exports={
    name:"create",
    help:"Creates a new rpg character",
    execute
}