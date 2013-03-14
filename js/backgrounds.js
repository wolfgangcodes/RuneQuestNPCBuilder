BACKGROUNDS = { all:ko.observableArray(), selected:ko.observable()}

__BACKGROUNDS = [
    {name:"Barbarian",
        available_professions:["Acrobat", "Animal Trainer", "Bard", "Blacksmith", "Craftsman", "Explorer", "Farmer", "Fisherman", "Healer", "Herdsman", "Hunter", "Mercenary", "Peddler", "Ranger", "Shaman", "Soldier", "Thief", "Witch", "Woodsman"],
        basic_skill_bonuses:["Athletics", 10, "Perception", 5, "Resilience", 10, "Stealth", 5],
        basic_choices:[
            {choices:2, bonus:15, options:["Boating", "Lore(Animal)", "Lore(Plant)", "Riding"]},
            {choices:3, bonus:10, options:["1H Axe", "1H Hammer", "2H Axe", "2H Hammer", "Blowgun", "Bow", "Dagger", "Shield", "Sling", "Spear", "Staff", "Throwing", "Unarmed"]}
        ],
        advanced_skills:["Lore(Regional)", "Survival"],
        advanced_choices:[
            {choices:1, bonus:0, options:["Craft", "Dance", "Lore", "Play Instrument", "Tracking"]}
        ],
        money:"4D6x20"},

    {name:"Civilised",
        available_professions:["Alchemist", "Blacksmith", "Courtier", "Craftsman", "Diplomat", "Explorer", "Knight", "Lord", "Physician", "Priest", "Scholar", "Scribe", "Soldier", "Spy"],
        basic_skill_bonuses:["Evaluate", 15, "Influence", 15, "Lore(World)", 10],
        basic_choices:[
            { choices:2, bonus:10, options:["Rapier", "Crossbow"]}
        ],
        advanced_skills:["Courtesy", "Lore(Regional)"],
        advanced_choices:[
            {choices:2, bonus:0, options:["Artistic Expression", "Craft", "Dance", "Language", "Lore", "Mechanisms", "Play Instrument", "Streetwise"]}
        ],
        money:"4D6x75"
    },

    {name:"Mariner",
        available_professions:["Craftsman", "Explorer", "Fisherman", "Mercenary", "Merchant", "Sailor"],
        basic_skill_bonuses:["Acrobatics", 5, "Athletics", 10, "Boating", 15, "Dodge", 5, "Lore(Animal)", 5, "Lore(World)", 10, "Sing", 5, "Throwing", 5],
        basic_choices:[
            {choices:2, bonus:10, options:["1H Hammer", "1H Sword", "Dagger", "Unarmed"]}
        ],
        advanced_skills:["Lore(Regional)"],
        advanced_choices:[
            {choices:1, bonus:0, options:["Craft", "Language", "Lore", "Shiphandling"]}
        ],
        money:"4D6x25"
    },

    {name:"Noble",
        available_professions:["Courtier", "Diplomat", "Explorer", "Knight", "Lord", "Physician", "Scholar", "Soldier", "Spy", "Wizard"],
        basic_skill_bonuses:["Influence", 10, "Lore(World)", 10, "Persistence", 10],
        basic_choices:[
            {choices:2, bonus:15, options:["Evaluate", "Dodge", "Perception", "Riding"]},
            {choices:2, bonus:15, options:["1H Sword", "2H Sword", "Dagger", "Rapier", "Shield"]}
        ],
        advanced_skills:["Lore(Regional)"],
        advanced_choices:[
            {choices:2, bonus:0, options:["Craft", "Dance", "Language", "Lore", "Play Instrument", "Shiphandling"]}
        ],
        money:"4D10x100"
    },

    {name:"Nomad (Arctic)",
        available_professions:["Craftsman", "Explorer", "Fisherman", "Hunter", "Shaman"],
        basic_skill_bonuses:["Athletics", 5, "Boating", 10, "Lore(Animal)", 5, "Perception", 5, "Resilience", 10, "Stealth", 5],
        basic_choices:[
            {choices:2, bonus:15, options:["1H Axe", "1H Hammer", "Dagger", "Spear"]}
        ],
        advanced_skills:["Lore(Regional)", "Survival"],
        advanced_choices:[
            {choices:1, bonus:0, options:["Craft", "Lore", "Tracking"]}
        ],
        money:"4D6x20"
    },

    {name:"Nomad (Desert)",
        available_professions:["Animal Trainer", "Craftsman", "Explorer", "Hunter", "Ranger", "Shaman"],
        basic_skill_bonuses:["Athletics", 5, "Lore(World)", 5, "Perception", 5, "Resilience", 10, "Riding", 10, "Stealth", 5],
        basic_choices:[
            {choices:2, bonus:15, options:["1H Axe", "1H Sword", "Bow", "Dagger", "Shield"]}
        ],
        advanced_skills:["Lore(Regional)", "Survival"],
        advanced_choices:[
            {choices:1, bonus:0, options:["Craft", "Lore", "Tracking"]}
        ],
        money:"4D6x20"},

    {name:"Nomad (Temperate)",
        available_professions:["Acrobat", "Animal Trainer", "Craftsman", "Explorer", "Herdsman", "Hunter", "Peddler", "Ranger", "Shaman"],
        basic_skill_bonuses:["Athletics", 10, "Lore(Animal)", 5, "Lore(Plant)", 5, "Lore(World)", 5, "Perception", 5, "Resilience", 5, "Riding", 10, "Stealth", 5],
        basic_choices:[
            {choices:2, bonus:10, options:["1H Axe", "1H Hammer", "Blowgun", "Bow", "Dagger", "Shield", "Sling"]}
        ],
        advanced_skills:["Lore(Regional)", "Survival"],
        advanced_choices:[
            {choices:1, bonus:0, options:["Craft", "Languages", "Lore", "Tracking"]}
        ],
        money:"4D6x20"
    },

    {name:"Peasant",
        available_professions:["Acrobat", "Animal Trainer", "Bard", "Blacksmith", "Craftsman", "Farmer", "Fisherman", "Healer", "Herdsman", "Hunter", "Mercenary", "Militiaman", "Miner", "Peddler", "Priest", "Ranger", "Sailor", "Soldier", "Thief", "Witch", "Woodsman"],
        basic_skill_bonuses:["Athletics", 5, "Lore(Animal)", 10, "Lore(Plant)", 10, "Resilience", 5],
        basic_choices:[
            {choices:2, bonus:10, options:["Boating", "Dodge", "Driving", "First Aid", "Persistence"]},
            {choices:2, bonus:10, options:["1H Axe", "1H Flail", "1H Hammer", "2H Axe", "Dagger", "Sling", "Spear", "Staff", "Unarmed"]}
        ],
        advanced_skills:["Lore(Regional)"],
        advanced_choices:[
            {choices:2, bonus:0, options:["Craft", "Dance", "Lore", "Play Instrument", "Survival"]}
        ],
        money:"4D6x25"
    },
    {name:"Primitive",
        available_professions:["Hunter", "Ranger", "Shaman"],
        basic_skill_bonuses:["Athletics", 10, "Lore(Animal)", 10, "Lore(Plant)", 10, "Perception", 10, "Resilience", 10, "Stealth", 10],
        basic_choices:[
            {choices:1, bonus:10, options:["1H Axe", "1H Hammer", "Dagger", "Sling", "Spear"]}
        ],
        advanced_skills:["Lore(Regional)", "Survival", "Tracking"],
        advanced_choices:[],
        money:"4D6x10"
    },

    {name:"Townsman",
        available_professions:["Alchemist", "Bard", "Blacksmith", "Courtier", "Craftsman", "Diplomat", "Mercenary", "Merchant", "Militiaman", "Peddler", "Physician", "Priest", "Sailor", "Scholar", "Scribe", "Soldier", "Spy", "Thief", "Town Guard", "Wizard"],
        basic_skill_bonuses:["Evaluate", 10, "Influence", 10, "Lore(World)", 10],
        basic_choices:[
            {choices:2, bonus:10, options:["Boating", "Driving", "Persistence", "Resilience", "Sleight", "Stealth"]},
            {choices:2, bonus:10, options:["1H Hammer", "1H Sword", "Dagger", "Crossbow", "Polearm", "Shield"]}
        ],
        advanced_skills:["Lore(Regional)", "Streetwise"],
        advanced_choices:[
            {choices:1, bonus:0, options:["Craft", "Dance", "Language", "Lore", "Play Instrument", "Shiphandling"]}
        ],
        money:"4D6x50"
    }
]

for (var i in __BACKGROUNDS) {
    var b = __BACKGROUNDS[i];
    BACKGROUNDS.all.push(new Background(b))
}

//BACKGROUNDS.selected (BACKGROUNDS.all()[0]);
