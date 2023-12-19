export namespace RPG {
  export type Attributes = {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    perception: number;
    charisma: number;
    agility: number;
  };
  export type Character = {
    attributes: Attributes;
    stats: {
      PV: 0;
    };
    race: Race;
    class: Class;
    weapons: string[];
    gender: string;
    name: string;
  };
  export type Race = {
    name: string;
    description: string;
    modifiers: Partial<Attributes>;
    racialSkills: string[];
    weakness: string;
    features: string[];
  };
  export type Class = {
    name: string;
    description: string;
    hitPoints: HitPoints;
    classExpertise: string[];
    weapons: string[];
    specialAbilities: string[];
    features: string[];
  };

  interface HitPoints {
    points: number;
    attribute: string;
    multiplier: number;
  }
  export enum AttributesEnum {
    strength = 'STR',
    dexterity = 'DEX',
    constitution = 'CON',
    intelligence = 'INT',
    wisdom = 'WIS',
    perception = 'PER',
    charisma = 'CHA',
    agility = 'AGI',

    STR = 'strength',
    DEX = 'dexterity',
    CON = 'constitution',
    INT = 'intelligence',
    WIS = 'wisdom',
    PER = 'perception',
    CHA = 'charisma',
    AGI = 'agility',
  }
}
