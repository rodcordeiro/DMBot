import { RPG } from '@/@types/rpg';
import Options from '@/assets/rpg.json';
import { CharacterHelper } from './rpg.helper';

export class Character {
  name: string;
  attributes: RPG.Attributes;
  stats: RPG.Character['stats'];
  race: RPG.Race;
  class: RPG.Class;
  weapons: RPG.Class['weapons'];
  gender: RPG.Character['gender'];
  constructor() {
    this.attributes = {
      agility: 0,
      charisma: 0,
      constitution: 0,
      dexterity: 0,
      intelligence: 0,
      perception: 0,
      strength: 0,
      wisdom: 0,
    };
    this.stats = {
      PV: 0,
    };
    this.race = CharacterHelper.randSelect(Options.races);
    this.class = CharacterHelper.randSelect(Options.classes);
    this.weapons = this.class.weapons;
    this.gender = CharacterHelper.randSelect(['Male', 'Female']);
    this.name = `${CharacterHelper.randSelect(
      Options.names,
    )} ${CharacterHelper.randSelect(Options.nicknames)}`;
    CharacterHelper.updateAttributes(this);
    return this;
  }
}
