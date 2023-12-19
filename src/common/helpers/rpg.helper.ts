import { RPG } from '../interfaces/rpg.interface';
import { Dice } from './dice.helper';

function healthPoints() {
  const PV = Math.floor(Math.random() * 20 + 1);
  return PV > 15 ? PV : healthPoints();
}
export class CharacterHelper {
  static randSelect<T = unknown>(options: Array<T>): T {
    return options[Math.floor(Math.random() * options.length)];
  }

  /** Selects attributes from the array of possibilities
   * @param possibilities Array of possibilities
   * @param need Number of needed attributes
   * @param pre Array of already defined attributes
   */
  //   attributeSelector<T=any>(possibilities:Array<T>, need:number, pre:Array<T>):Array<T> {
  //     let selectedAttributes:Array<T>  ;
  //     if (pre) {
  //       selectedAttributes = pre;
  //     } else {
  //       selectedAttributes = [];
  //     }
  //     selectedAttributes.push(this.randSelect(possibilities));
  //     for (let i = 1; i <= need - 1; i++) {
  //       selectedAttributes.push(
  //         this.attributeFilter(selectedAttributes, possibilities)
  //       );
  //     }
  //     return selectedAttributes;
  //   }
  //   attributeFilter(validate, possibilities) {
  //     var option = this.randSelect(possibilities);
  //     if (!validate.includes(option) && option !== "") {
  //       return option;
  //     } else {
  //       this.attributeFilter(validate, possibilities);
  //     }
  //   }

  static updateAttributes(character: RPG.Character) {
    for (const modificador in character.race.modifiers) {
      character.attributes[modificador] = character.race.modifiers[modificador];
    }

    for (const attribute in character.attributes) {
      const d6 = Dice.d6();
      character.attributes[attribute] =
        character.attributes[attribute] + 2 * d6;
    }
    console.log(RPG.AttributesEnum[character.class.hitPoints.attribute]);
    character.stats.PV =
      character.class.hitPoints.points +
      character.class.hitPoints.multiplier *
        character.attributes[
          RPG.AttributesEnum[character.class.hitPoints.attribute]
        ] +
      healthPoints();
  }
}
