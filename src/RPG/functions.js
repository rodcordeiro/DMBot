module.exports = {
  d6() {
    return Math.floor(Math.random() * 6 + 1);
  },
  d20() {
    return Math.floor(Math.random() * 20 + 1);
  },
  randSelect(options) {
    return options[Math.floor(Math.random() * options.length)];
  },
  geraPV() {
    var PV = Math.floor(Math.random() * 20 + 1);
    return PV > 15 ? PV : this.geraPV();
  },
  /** Selects attributes from the array of possibilities
   * @param possibilities Array of possibilities
   * @param need Number of needed attributes
   * @param pre Array of already defined attributes
   */
  attributeSelector(possibilities, need, pre) {
    if (pre) {
      selectedAttributes = [pre];
    } else {
      selectedAttributes = [];
    }
    selectedAttributes.push(this.randSelect(possibilities));
    for (i = 1; i <= need - 1; i++) {
      selectedAttributes.push(
        this.attributeFilter(selectedAttributes, possibilities)
      );
    }
    return selectedAttributes;
  },
  attributeFilter(validate, possibilities) {
    var option = this.randSelect(possibilities);
    if (!validate.includes(option) && option !== "") {
      return option;
    } else {
      this.attributeFilter(validate, possibilities);
    }
  },
  updateAttributes(character) {
    for (var modificador in character.race.modificadores) {
      character.attributes[modificador] =
        character.race.modificadores[modificador];
    }
    for (var racialSkill in character.race.racialSkills) {
      character.racialSkills.push(character.race.racialSkills[racialSkill]);
    }
    for (var weakness in character.race.weakness) {
      character.weakness.push(character.race.weakness[weakness]);
    }
    for (var attribute in character.attributes) {
      var d6 = this.d6();
      character.attributes[attribute] =
        character.attributes[attribute] + 2 * d6;
    }
    character.stats.PV =
      character.class.PV.points +
      character.class.PV.multiplier *
        character.attributes[character.class.PV.attribute] +
      this.geraPV();
    character.class = character.class.class;
    character.race = character.race.race;
  },
};
