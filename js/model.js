function SkillBonus(name, amount) {
    var self = this;
    self.skill_name = name;
    self._skill_name = name.replace(" ", "_").replace("(", "_").replace(")", "").toLowerCase();
    self.bonus = amount;
}

function SkillChoice(number, bonuses) {
    var self = this
    self.number = number;
    self.all_available_bonuses = ko.observableArray(bonuses);
    self.selected_choices = ko.observableArray()
    self.available_bonuses = ko.computed(function () {
        return self.all_available_bonuses().filter(function (o) {
            return  $.inArray(o.skill_name, self.selected_choices().map(function (b) {
                return b.skill_name;
            })) < 0;
        })
    })
    self.currently_selected_choice = ko.observable()
    self.add = function () {
        self.selected_choices.push(self.currently_selected_choice())
    }
    self.remove = function (item) {
        var index = self.selected_choices.indexOf(item)
        self.selected_choices.splice(index, 1)
    }
}
function Rank(rank){
    var self = this
    ko.mapping.fromJS(rank, {}, this);


}
function Background(background) {
    var self = this;
    self.name = background.name;
    self.available_professions = background.available_professions;

    self.basic_skill_bonus = [];
    for (var name = 0, amt = 1; amt < background.basic_skill_bonuses.length; name += 2, amt += 2) {
        self.basic_skill_bonus.push(new SkillBonus(background.basic_skill_bonuses[name], background.basic_skill_bonuses[amt]))
    }

    self.basic_skill_choices = ko.observableArray();
    for (var c in background.basic_choices) {
        var bonuses = []
        var amt = background.basic_choices[c].bonus
        var options = background.basic_choices[c].options
        for (var name  in options) {
            bonuses.push(new SkillBonus(options[name], amt))
        }
        var choice = new SkillChoice(background.basic_choices[c].choices, bonuses)
        self.basic_skill_choices().push(choice)
    }

    self.advanced_skill_bonus = [];
    for (var name  in background.advanced_skills) {
        self.advanced_skill_bonus.push(new SkillBonus(background.advanced_skills[name], 0))
    }

    self.advanced_skill_choices = ko.observableArray();
    for (var c in background.advanced_choices) {
        var bonuses = []
        var amt = background.advanced_choices[c].bonus
        var options = background.advanced_choices[c].options
        for (var name  in options) {
            bonuses.push(new SkillBonus(options[name], amt))
        }
        var choice = new SkillChoice(background.advanced_choices[c].choices, bonuses)
        self.advanced_skill_choices().push(choice)
    }

    self.all_selected_choices = ko.computed(function () {
        var choices = []
        self.basic_skill_choices().map(function (o) {
            o.selected_choices().map(function (b) {
                choices.push(b)
            })
        })
        self.advanced_skill_choices().map(function (o) {
            o.selected_choices().map(function (b) {
                choices.push(b)
            })
        })
        return choices;
    })

    self._money = background.money.toLowerCase();
    self.money = function () {
        //expects "4d6x20"
        var num_dice = parseInt(self._money.substring(0, self._money.indexOf('d')))
        var die_step = parseInt(self._money.substring(2, self._money.indexOf('x')))
        var multiplier = parseInt(self._money.split('x')[1])

        return rollDice(num_dice, die_step, 0, ROLL_RULES.STANDARD) * multiplier;
    }
}

function Profession(profession) {
    var self = this;
    self.name = profession.name;
    self.available_backgrounds = profession.backgrounds;
    profession.runes = profession.runes == undefined ? [] : profession.runes;
    self.runes = [];
    for (var rune  in profession.runes) {
        self.runes.push(new SkillBonus("Runecasting(" + profession.runes[rune] + ")", 0));
    }

    self.basic_skill_bonus = [];
    for (var name = 0, amt = 1; amt < profession.basic_skill_bonuses.length; name += 2, amt += 2) {
        self.basic_skill_bonus.push(new SkillBonus(profession.basic_skill_bonuses[name], profession.basic_skill_bonuses[amt]))
    }

    self.advanced_skill_bonus = [];
    for (var name  in profession.advanced_skills) {
        self.advanced_skill_bonus.push(new SkillBonus(profession.advanced_skills[name], 0))
    }
    self.choices = ko.observableArray();

    for (var c in profession.choices) {
        var bonuses = []
        var amt = profession.choices[c].bonus
        var options = profession.choices[c].options
        for (var name  in options) {
            if (options[name] == "Runecasting") {
                bonuses = bonuses.concat(self.runes);
            } else {
                bonuses.push(new SkillBonus(options[name], amt))
            }
        }
        var choice = new SkillChoice(profession.choices[c].choices, bonuses)
        self.choices().push(choice)
    }

    self.all_selected_choices = ko.computed(function () {
        var choices = []
        self.choices().map(function (o) {
            o.selected_choices().map(function (b) {
                choices.push(b)
            })
        })
        return choices;
    })
}

function Skill(character, type, name, base) {
    var self = this

    self.character = character;
    self.type = type;

    self.name = name;
    self._name = name.toLowerCase().replace(" ", "_").replace("(", "_").replace(")", "");
    self.known = ko.computed(function () {
        if (self.type == SKILL_TYPE.BASIC) {
            return true;
        } else {
            var bonuses = []
            if (self.character.background() != undefined) {
                bonuses = bonuses.concat(self.character.background().advanced_skill_bonus)
                bonuses = bonuses.concat(self.character.background().all_selected_choices())
            }
            if (self.character.profession() != undefined) {
                bonuses = bonuses.concat(self.character.profession().advanced_skill_bonus)
                bonuses = bonuses.concat(self.character.profession().all_selected_choices())
            }

            //TODO: Or Improvements

            return bonuses.filter(function (o) {
                return self.name == o.skill_name;
            }).length > 0;
        }
    })


    self.bonus = ko.observableArray(base.bonus)
    self.penalty = ko.observableArray(base.penalty ? base.penalty : [])

    self.total_base = ko.computed(function () {
        return sum(self.bonus(), getVal) - sum(self.penalty(), getVal)
    })

    self.doubles_bonus = ko.computed(function () {
        if (self.character.background() == undefined || self.character.profession() == undefined) {
            return 0;
        }
        var total = 0

        var names = character.background().advanced_skill_bonus
            .concat(character.background().all_selected_choices())
            .concat(character.profession().advanced_skill_bonus)
            .concat(character.profession().all_selected_choices())


        total = names.filter(function (o) {
            return o.skill_name == self.name
        })
        console.log(total)
        return total.length > 0 ? (total.length - 1) * 10 : 0;
    })

    self.background_bonus = ko.computed(function () {
        var bonuses = [];

        if (self.character.background() != undefined) {
            bonuses = bonuses.concat(self.character.background().basic_skill_bonus)
            bonuses = bonuses.concat(self.character.background().advanced_skill_bonus)
            bonuses = bonuses.concat(self.character.background().all_selected_choices())
        }

        if (self.character.profession() != undefined) {
            bonuses = bonuses.concat(self.character.profession().basic_skill_bonus)
            bonuses = bonuses.concat(self.character.profession().advanced_skill_bonus)
//            bonuses = bonuses.concat(self.character.profession().all_selected_choices())
            bonuses = bonuses.concat(self.character.profession().runes)
        }

        var total = 0
        for (var b in bonuses) {
            if (bonuses[b].skill_name == self.name) {
                total += bonuses[b].bonus;
            }
        }

        return total;
    })

    self.improvement_bonus = ko.computed(function () {
        return 0;
    })

    self.total_bonus = ko.computed(function () {
        return self.background_bonus() + self.improvement_bonus() + self.doubles_bonus()
    })
    self.total = ko.computed(function () {
        return self.total_base() + self.total_bonus()
    })
}

function RolledAttribute(diceToRoll, bonusToAdd, droplowest, numSides) {
    var self = this
    self.value = ko.numericObservable()
    if(numSides == undefined){
        numSides = 6
    }
    self.reroll = function () {
        self.value(rollDice(diceToRoll, numSides, bonusToAdd, droplowest ? ROLL_RULES.DROP_LOWEST : ROLL_RULES.STANDARD))
    }
}

function AttributeWithMax(max) {
    var self = this
    self.current = ko.numericObservable(0);
    self.total = ko.dependentObservable(max);
    self.max = function () {
        self.current(self.total().value())
    }
}

function Character() {
    var self = this
    self.player = ko.observable();
    self.name = ko.observable();
    self.age = ko.numericObservable(0);
    self.gender = ko.observable();
    self.rank = ko.observable(RANKS.novice)
    self.race = ko.observable();

    //-- Characterisitcs
    self.str = ko.observable(new RolledAttribute(4, 0, true))
    self.con = ko.observable(new RolledAttribute(4, 0, true))
    self.dex = ko.observable(new RolledAttribute(4, 0, true))
    self.siz = ko.observable(new RolledAttribute(2, 6, false))
    self.int = ko.observable(new RolledAttribute(2, 6, false))
    self.pow = ko.observable(new RolledAttribute(4, 0, true))
    self.cha = ko.observable(new RolledAttribute(4, 0, true))

    self.background = BACKGROUNDS.selected;
    self.profession = PROFESSIONS.selected;

    self.basic_skills = ko.observableArray()
    self.advanced_skills = ko.observableArray()
    self.runecasting_skills = ko.observableArray()
    self.weapon_skills = ko.observableArray()


    self.reroll = function () {
        self.age(rollAge())
        self.str().reroll()
        self.con().reroll()
        self.dex().reroll()
        self.siz().reroll()
        self.int().reroll()
        self.pow().reroll()
        self.cha().reroll()
    }

    //-- Derived Characteristics
    self.combat_actions = ko.computed(function () {
        return lookupCombatActions(self.int().value(), self.dex().value())
    }, self);

    self.damage_modifier = ko.computed(function () {
        return lookupDamageModifier(self.str().value(), self.siz().value());
    }, self);

    self.movement = ko.numericObservable(4);

    self.strike_rank = ko.computed(function () {
        return Math.floor((self.int().value() + self.dex().value()) / 2);
    }, self);

    self.magic_points = ko.observable(new AttributeWithMax(self.pow))

    self.hero_points = ko.numericObservable(2)

    //-- Hit Points
    self.hit_points_left_leg = ko.computed(function () {
        return lookupHitPoints('leg', self.siz().value(), self.con().value())
    }, self);
    self.hit_points_right_leg = ko.computed(function () {
        return lookupHitPoints('leg', self.siz().value(), self.con().value())
    }, self);
    self.hit_points_left_arm = ko.computed(function () {
        return lookupHitPoints('arm', self.siz().value(), self.con().value())
    }, self);
    self.hit_points_right_arm = ko.computed(function () {
        return lookupHitPoints('arm', self.siz().value(), self.con().value())
    }, self);
    self.hit_points_chest = ko.computed(function () {
        return lookupHitPoints('chest', self.siz().value(), self.con().value())
    }, self);
    self.hit_points_abdomen = ko.computed(function () {
        return lookupHitPoints('abdomen', self.siz().value(), self.con().value())
    }, self);
    self.hit_points_head = ko.computed(function () {
        return lookupHitPoints('head', self.siz().value(), self.con().value())
    }, self);


    //-- Armor Points
    self.armor_points_left_leg = ko.numericObservable(0);

    self.armor_points_right_leg = ko.numericObservable(0);

    self.armor_points_left_arm = ko.numericObservable(0);

    self.armor_points_right_arm = ko.numericObservable(0);
    self.armor_points_chest = ko.numericObservable(0);
    self.armor_points_abdomen = ko.numericObservable(0);
    self.armor_points_head = ko.numericObservable(0);

    self.armor_points = ko.observableArray(
        [self.armor_points_left_leg,
            self.armor_points_right_leg,
            self.armor_points_right_arm,
            self.armor_points_left_arm,
            self.armor_points_chest,
            self.armor_points_head,
            self.armor_points_abdomen])

    self.armor_penalty = ko.computed(function () {
        return sum(self.armor_points(), function (v) {
            return v();
        });
    }, self);


    //-- Basic Skills
    var bonus_ten = ko.observable(new RolledAttribute(0, 0, ROLL_RULES.STANDARD));
    bonus_ten().value(10);

    self.acrobatics = ko.observable(new Skill(self, SKILL_TYPE.BASIC, 'Acrobatics', {bonus:[self.dex]}))
    self.basic_skills.push(self.acrobatics)

    self.athletics = ko.observable(new Skill(self, SKILL_TYPE.BASIC, 'Athletics', {bonus:[self.str, self.dex]}))
    self.basic_skills.push(self.athletics)

    self.boating = ko.observable(new Skill(self, SKILL_TYPE.BASIC, 'Boating', {bonus:[self.str]}))
    self.basic_skills.push(self.boating)

    self.dodge = ko.observable(new Skill(self, SKILL_TYPE.BASIC, 'Dodge', {bonus:[self.dex, bonus_ten], penalty:[self.siz]}))
    self.basic_skills.push(self.dodge)

    self.drive = ko.observable(new Skill(self, SKILL_TYPE.BASIC, 'Drive', {bonus:[self.pow, bonus_ten]}))
    self.basic_skills.push(self.drive)

    self.evaluate = ko.observable(new Skill(self, SKILL_TYPE.BASIC, 'Evaluate', {bonus:[self.int]}))
    self.basic_skills.push(self.evaluate)

    self.first_aid = ko.observable(new Skill(self, SKILL_TYPE.BASIC, 'First Aid', {bonus:[self.int]}))
    self.basic_skills.push(self.first_aid)

    self.influence = ko.observable(new Skill(self, SKILL_TYPE.BASIC, 'Influence', {bonus:[self.cha, bonus_ten]}))
    self.basic_skills.push(self.influence)

    self.lore_animal = ko.observable(new Skill(self, SKILL_TYPE.BASIC, 'Lore(Animal)', {bonus:[self.int]}))
    self.basic_skills.push(self.lore_animal)

    self.lore_plant = ko.observable(new Skill(self, SKILL_TYPE.BASIC, 'Lore(Plant)', {bonus:[self.int]}))
    self.basic_skills.push(self.lore_plant)

    self.lore_world = ko.observable(new Skill(self, SKILL_TYPE.BASIC, 'Lore(World)', {bonus:[self.int]}))
    self.basic_skills.push(self.lore_world)

    self.perception = ko.observable(new Skill(self, SKILL_TYPE.BASIC, 'Perception', {bonus:[self.int, self.pow]}))
    self.basic_skills.push(self.perception)

    self.persistence = ko.observable(new Skill(self, SKILL_TYPE.BASIC, 'Persistence', {bonus:[self.pow, bonus_ten]}))
    self.basic_skills.push(self.persistence)

    self.resilience = ko.observable(new Skill(self, SKILL_TYPE.BASIC, 'Resilience', {bonus:[self.con, self.pow]}))
    self.basic_skills.push(self.resilience)

    self.riding = ko.observable(new Skill(self, SKILL_TYPE.BASIC, 'Riding', {bonus:[self.dex, self.pow]}))
    self.basic_skills.push(self.riding)

    self.sing = ko.observable(new Skill(self, SKILL_TYPE.BASIC, 'Sing', {bonus:[self.cha]}))
    self.basic_skills.push(self.sing)

    self.sleight = ko.observable(new Skill(self, SKILL_TYPE.BASIC, 'Sleight', {bonus:[self.dex]}))
    self.basic_skills.push(self.sleight)

    self.stealth = ko.observable(new Skill(self, SKILL_TYPE.BASIC, 'Stealth', {bonus:[self.dex, bonus_ten], penalty:[self.siz]}))
    self.basic_skills.push(self.stealth)

    self.throwing = ko.observable(new Skill(self, SKILL_TYPE.BASIC, 'Throwing', {bonus:[self.dex]}))
    self.basic_skills.push(self.throwing)

    self.unarmed = ko.observable(new Skill(self, SKILL_TYPE.BASIC, 'Unarmed', {bonus:[self.str]}))
    self.basic_skills.push(self.unarmed)

    self.close_combat = ko.observable(new Skill(self, SKILL_TYPE.BASIC, 'Close Combat', {bonus:[self.str, self.dex]}))
    self.basic_skills.push(self.close_combat)

    self.ranged_combat = ko.observable(new Skill(self, SKILL_TYPE.BASIC, 'Ranged Combat', {bonus:[self.dex]}))
    self.basic_skills.push(self.ranged_combat)

    //-- Advanced Skills
    self.artistic_expression = ko.observable(new Skill(self, SKILL_TYPE.ADVANCED, 'Artistic Expression', {bonus:[self.pow, self.cha]}))
    self.advanced_skills.push(self.artistic_expression)

    for (var i in CRAFT) {
        var craft = "craft_" + CRAFT[i].toLowerCase().replace(" ", "_")
        self[craft] = ko.observable(new Skill(self, SKILL_TYPE.ADVANCED, 'Craft(' + CRAFT[i] + ')', {bonus:[self.int]}))
        self.advanced_skills.push(self[craft])
    }

    self.courtesy = ko.observable(new Skill(self, SKILL_TYPE.ADVANCED, 'Courtesy', {bonus:[self.int, self.cha]}))
    self.advanced_skills.push(self.courtesy)

    self.dance = ko.observable(new Skill(self, SKILL_TYPE.ADVANCED, 'Dance', {bonus:[self.dex]}))
    self.advanced_skills.push(self.dance)

    self.disguise = ko.observable(new Skill(self, SKILL_TYPE.ADVANCED, 'Disguise', {bonus:[self.cha]}))
    self.advanced_skills.push(self.disguise)

    self.enchanting = ko.observable(new Skill(self, SKILL_TYPE.ADVANCED, 'Enchanting', {bonus:[self.dex, self.pow]}))
    self.advanced_skills.push(self.enchanting)

    self.engineering = ko.observable(new Skill(self, SKILL_TYPE.ADVANCED, 'Engineering', {bonus:[self.cha]}))
    self.advanced_skills.push(self.engineering)

    self.healing = ko.observable(new Skill(self, SKILL_TYPE.ADVANCED, 'Healing', {bonus:[self.int, self.pow]}))
    self.advanced_skills.push(self.healing)

    self.language = ko.observable(new Skill(self, SKILL_TYPE.ADVANCED, 'Language', {bonus:[self.int, self.pow]}))
    self.advanced_skills.push(self.language)

    for (var i in LORE) {
        var lore = "lore_" + LORE[i].toLowerCase().replace(" ", "_")
        self[lore] = ko.observable(new Skill(self, SKILL_TYPE.ADVANCED, 'Lore(' + LORE[i] + ')', {bonus:[self.int]}))
        self.advanced_skills.push(self[lore])
    }

    self.martial_arts = ko.observable(new Skill(self, SKILL_TYPE.ADVANCED, 'Martial Arts', {bonus:[self.dex]}))
    self.advanced_skills.push(self.martial_arts)

    self.mechanisms = ko.observable(new Skill(self, SKILL_TYPE.ADVANCED, 'Mechanisms', {bonus:[self.dex, self.int]}))
    self.advanced_skills.push(self.mechanisms)

    self.oratory = ko.observable(new Skill(self, SKILL_TYPE.ADVANCED, 'Oratory', {bonus:[self.pow, self.cha]}))
    self.advanced_skills.push(self.oratory)

    self.play_instrument = ko.observable(new Skill(self, SKILL_TYPE.ADVANCED, 'Play Instrument', {bonus:[self.cha]}))
    self.advanced_skills.push(self.play_instrument)

    self.shiphandling = ko.observable(new Skill(self, SKILL_TYPE.ADVANCED, 'Shiphandling', {bonus:[self.int]}))
    self.advanced_skills.push(self.shiphandling)

    self.streetwise = ko.observable(new Skill(self, SKILL_TYPE.ADVANCED, 'Streetwise', {bonus:[self.cha, self.pow]}))
    self.advanced_skills.push(self.streetwise)

    self.survival = ko.observable(new Skill(self, SKILL_TYPE.ADVANCED, 'Survival', {bonus:[self.int, self.pow]}))
    self.advanced_skills.push(self.survival)

    self.tracking = ko.observable(new Skill(self, SKILL_TYPE.ADVANCED, 'Tracking', {bonus:[self.int]}))
    self.advanced_skills.push(self.tracking)

    //-- Runecasting Skills
    for (var i in RUNES) {
        var rune = "runecasting_" + RUNES[i].toLowerCase().replace(" ", "_")
        self[rune] = ko.observable(new Skill(self, SKILL_TYPE.RUNE, 'Runecasting(' + RUNES[i] + ')', {bonus:[self.pow, self.cha]}))
        self.runecasting_skills.push(self[rune])
    }

    //-- Weapon Skills
    for (var i in CLOSE_COMBAT_SKILLS) {
        self[rune] = ko.observable(new Skill(self, CLOSE_COMBAT_SKILLS[i], 'Runecasting(' + RUNES[i] + ')', {bonus:[self.pow, self.cha]}))
        self.runecasting_skills.push(self[rune])
    }
}
