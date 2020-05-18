const functions = require('./functions')

module.exports= {
    genders:['Masc','Fem'],
    races:[
    {
        race:"Humano",
        modificadores:{},
        racialSkills:['none'],
        weakness:['none'],
    },{
        race:"Anao",
        modificadores :{
            CON:1,
            AGI:-1
        },
        racialSkills:["Enxergar no escuro","Ligação com pedras"],
        weakness:['Inaptidão para Magia Arkana'],
    },{
        race:"Amazona",
        modificadores:{
            FR: 1,
            CAR: 1,
            CON: -1,
            DEX: -1
        },
        racialSkills:['none'],
        weakness:['none'],
    },{
        race:"Automato",
        modificadores:{},
        racialSkills:['Armadura','Imunidade','Pontos de vida +2'],
        weakness:['Caminhar','Inaptidão para psiônicos','Inaptidão para Magia Arkana'],
    },{
        race:"Bantô",
        modificadores:{
            FR: 3,
            CON:3,
            DEX:-1,
            AGI:-2,
            INT:-1,
            WILL:-1,
            CAR:-1
        },
        racialSkills:['Tamanho[Alto]'],
        weakness:['Modelo especial'],
    },{
        race:"Bullywug",
        modificadores:{
            FR:-1,
            CON:-1,
            AGI:1,
            PER:1
        },
        racialSkills:['Salto','Tamanho[Pequeno]'],
        weakness:['Estigma Social','Modelo especial'],
    },{
        race:"Centauro",
        modificadores:{
            AGI:-1,
            INT:1
        },
        racialSkills:['Carga','Casco','Coice','Enxergar no Escuro','Tamanho[Grande]'],
        weakness:['Modelo Especial'],
    },{
        race:"Ciclope",
        modificadores:{
            FR:1,
            DEX:1,
            PER:-1,
            CAR:-1
        },
        racialSkills:['none'],
        weakness:['none'],
    },{
        race:"Duende",
        modificadores:{
            FR:-1,
            CON:-2,
            AGI:2,
            WILL:1
        },
        racialSkills:['Aptidão mágica','Enxergar no escuro','Tamanho[Pequeno]'],
        weakness:['Caminhar','Inaptidão para psiônicos','Inaptidão para Magia Arkana'],
    },{
        race:"Elfo",
        modificadores:{
            FR:-1,
            DEX:1
        },
        racialSkills:['Aptidão mágica','Enxergar no escuro'],
        weakness:['none'],
    },{
        race:"Ewooky",
        modificadores:{
            FR:-1,
            CON:-1,
            AGI:1,
            PER:1,
            CAR:1
        },
        racialSkills:['Tamanho[Pequeno]'],
        weakness:['Modelo Especial'],
    }
    ],
    
    classes:[{
        class: 'Alquimista',
        PV: {
            points:8,
            attribute:'CON',
            multiplier:2
        },
        weapons:['choose 1 weapon [NORMAL]'],
        classExpertise:['Alquimia','Cura','Decifrar','Choose 1 art','Choose 4 knowledges'],
        specialHabilities:['Proficiência mágica','Destilar poções','Homúnculo','Proficiência ritualística']
     },{
        class: 'Arqueiro',
        PV: {
            points:11,
            attribute:'CON',
            multiplier:2
        },
        weapons:['Arco','choose 2 weapon [NORMAL]'],
        classExpertise:['Armadilhas','Escalar','Furtividade','Montaria','Rastreio','Sobrevivência'],
        specialHabilities:functions.attributeSelector(["Arma favorita","Disparar múltiplas flechas","Flecha incendiária","Flechada certeira"],2)
    },{
        class: 'Artífice/Engenhoqueiro',
        PV: {
            points:8,
            attribute:'CON',
            multiplier:2
        },
        weapons:['choose 1 weapon [NORMAL]'],
        classExpertise:['Artífice','Falsificação','Profissão','Choose 3 arts','Choose 2 knowledge'],
        specialHabilities:functions.attributeSelector(["Familiar(*Construto*)", "Faz-tudo", "NPC: Guarda-costas(*Construto*)"],2)
    },{
        class: 'Aventureiro/Explorador',
        PV: {
            points:12,
            attribute:'CON',
            multiplier:2
        },
        weapons:['choose 3 weapons at [GOOD]'],
        classExpertise:['Armadilhas','Escalar','Montaria','Natação','Sobrevivência'],
        specialHabilities:functions.attributeSelector(["Pontos de vida","Perícia adicional","Proficiência com Armaduras"],1)
    },{
        class: 'Bárbaro / Picto / Selvagem',
        PV: {
            points:12,
            attribute:'CON',
            multiplier:2
        },
        weapons: ['choose 2 weapons at [GOOD]'],
        classExpertise:['Escalar', 'Montaria','Rastreio','Sobrevivencia'],
        specialHabilities:functions.attributeSelector(["Esquiva sobrenatural","Fúria barbara","Movimento rápido","Pontos de vida","Proficiência com Armaduras"],2)
    },{
        class: 'Bardo / Aedos',
        PV: {
            points:9,
            attribute:'CON',
            multiplier:2
        },
        weapons:['choose 2 weapons, one at [GOOD] and one at [NORMAL]'],
        classExpertise:['Artes Disfarce','Conhecimentos[GEOGRAFIA]','Conhecimentos[HISTÓRIA]','Manipulação[LÁBIA]','Escolher 2 perícias em Música'],
        specialHabilities:functions.attributeSelector(['Área da influência musical','Música AntiPsiônica','Música da amizade','Música inspiradora de moral','Música inspiradora de perícia','Música perturbadora','Ventriloquismo','Voz poderosa'],3,"Aptidão mágica")
    },{
        class: 'Berserker',
        PV: {
            points:12,
            attribute:'CON',
            multiplier:2
        },
        weapons:['choose 2 weapons at [GOOD]'],
        classExpertise:['Escalar','Manipulação[INTIMIDAÇÃO]','Montaria','Rastreio','Sobrevivência'],
        specialHabilities:functions.attributeSelector(["Bravura",'Carga','Fúria bárbara','Proficiência em armaduras','Trespassar'],2,"Berserker")
    },{
        class: 'Bruxo / Feiticeiro',
        PV: {
            points:8,
            attribute:'CON',
            multiplier:2
        },
        weapons:['choose 1 weapon at [NORMAL]'],
        classExpertise:['Conhecimentos[MAGIAS ARKANAS]','Decifrar','Herbalismo','Idioma','Choose 2 knowledge[GOOD] and 2 manipulations[NORMAL]'],
        specialHabilities:functions.attributeSelector(["Avaliar objetos mágicos",'Ignorar componente material','Ignorar componente somático','Ignorar componente verbal','Magias não letais'],1,["Ferramentas mágicas","Proficiência ritualística"])
    },{
        class: 'Caçador de recompensas',
        PV: {
            points:12,
            attribute:'CON',
            multiplier:2
        },
        weapons:['choose 3 weapons at [GOOD]'],
        classExpertise:['Armadilhas','Conhecimentos[GEOGRAFIA]','Falsificação','Fechaduras','Furtividade','Rastreio','Sobrevivência'],
        specialHabilities:functions.attributeSelector(["Ataque furtivo",'Maestria em rastreio','Movimento rápido','Precisão em arremessos','Rapidez na iniciativa','Sono dos justos'],2)
    },{
        class: 'Clérigo / Sacerdote',
        PV: {
            points:10,
            attribute:'CON',
            multiplier:2
           },
        weapons:["Choose 2 weapons at GOOD"],
        classExpertise:["Conhecimentos[RELIGIÃO]","Cura","Decifrar","Idiomas"],
        specialHabilities:functions.attributeSelector(["Abençoar","Afastar Mortos-vivos","Água benta","Cura pelas mãos","Escolhido pelo divino"],1,["Proficiência Ritualística"])
    },{
        class: 'Demonologista',
        PV: {
            points:9,
            attribute:'CON',
            multiplier:2
           },
        weapons:['Adaga',"Choose 1 weapon[Normal]"],
        classExpertise:['Conhecimentos[MAGIAS ARKANAS] ','Decifrar',"Idioma","Choose 2 knowledges[GOOD] and 2 Manipulation[GOOD]"],
        specialHabilities:functions.attributeSelector(["Afastar Mortos-vivos",'Canalizador','Controlar Mortos-vivos','Enxergar espiritos','Exorcismo','Ferir mortos-vivos','Grande conjurador'],2,["Proficiencia ritualística","Aptidão Arkana"])
    },{
        class:"Druida",
        PV:{
            points:10,
            attribute:'CON',
            multiplier:2
           },
        weapons:['Foice druídica','Choose 1 weapon[NORMAL]'],
        classExpertise:['Conhecimentos[RELIGIÃO] ','Cura ','Decifrar','Herbalismo','Idiomas'],
        specialHabilities:functions.attributeSelector(["Afastar animais",'Amizade com animais','Animal que fala','Conversar com animais','Conversar com plantas','Cura pelas mãos','Destilar poções','Familiar'],2,['Proficiência Arkana','Proficiência Ritualística'])
    },{
        class:"Ladrão / Ladino",
        PV:{
            points:8,
            attribute:'CON',
            multiplier:2
           },
        weapons:["Choose 1 weapon at [GOOD] and 1 [NORMAL]"],
        classExpertise:['Acrobacias','Armadilhas','Artes[DISFARCE]','Escalar','Falsificação','Fechaduras','Furtar','Furtividade'],
        specialHabilities:functions.attributeSelector(['Ataque furtivo','Esquiva sobrenatural','Movimento rápido','Precisão de arremessos','Habilidade com cordas'],1)
    },
    ],
    weapons:[{
        weapon:"Adaga",
        origin: "all"
    },{
        weapon:"LongSword",
        origin: "all"
    },{
        weapon:"Claymore",
        origin: "all"
    },{
        weapon:"Katana",
        origin: "all"
    }],
    names : [
        "Rodrick","Jeremy", "Joseph","Mercy","Lucius","Jesse","Lucy","Olawell","Talwen","Tylor",'James','Grindyraham','Jhonny','Jhon','Wilson','Cori','Kramper','Johat'
    ],
    nicknames : [
        "CorreVentos", "AguaEscura", "NoiteSangrenta","McCree","StormWind","Bearmantle","Sanguinaar","McGonnac","Lovelace","Lovegood","Scratch","Morningstar","Spellman","Baphasia","Crawfordanic",'Grindyraham','Kramper'
    ],
}