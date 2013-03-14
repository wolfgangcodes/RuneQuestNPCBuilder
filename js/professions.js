__PROFESSIONS = [
    {name:"Acrobat",
        backgrounds:[ "Barbarian", "Nomad(Temperate)", "Peasant"],
        basic_skill_bonuses:[ "Acrobatics", 10, "Athletics", 10, "Dodge", 10, "Throwing", 10, "Sleight", 10],
        advanced_skills:[],
        choices:[]
    },

    {name:"Alchemist",
        backgrounds:[ "Civilised", "Townsman"],
        basic_skill_bonuses:[ "Evaluate", 10, "First Aid", 10, "Lore(Plant)", 10],
        advanced_skills:[ "Lore(Alchemy)"],
        runes:["Metal", "Motion", "Plant", "Stasis"],
        choices:[
            {choices:1, bonus:0, options:["Runecasting"]}
        ]

    },
    {name:"Animal Trainer",
        backgrounds:[ "Barbarian", "Nomad(Desert)", "Nomad(Temperate)", "Peasant"],
        basic_skill_bonuses:[ "Driving", 5, "First Aid", 5, "Lore(Animal)", 20, "Persistence", 10, "Resilience", 5, "Riding", 5],
        advanced_skills:[],
        choices:[]
    },
    {name:"Bard",
        backgrounds:[ "Barbarian", "Peasant", "Townsman"],
        basic_skill_bonuses:[ "Influence", 10, "Lore(World)", 10, "Perception", 5, "Sing", 10, "Sleight", 5],
        advanced_skills:[],
        choices:[
            {choices:1, bonus:0, options:["Artistic Expression", "Courtesy", "Dance", "Oratory", "Play Instrument", "Language", "Lore"]}
        ]

    },
    {name:"Blacksmith",
        backgrounds:[ "Barbarian", "Civilised", "Peasant", "Townsman"],
        basic_skill_bonuses:[ "1H Hammer", 10, "Evaluate", 5, "Resilience", 5],
        advanced_skills:[ "Craft(Blacksmith)", "Lore(Mineral)"],
        choices:[
            {choices:1, bonus:0, options:["Engineering", "Mechanisms", "Craft(Armourer)", "Craft(Weaponsmith)"]}
        ]

    },
    {name:"Courtier",
        backgrounds:[ "Civilised", "Townsman", "Noble"],
        basic_skill_bonuses:[ "Influence", 15, "Lore(World)", 5, "Perception", 5, "Sleight", 5],
        advanced_skills:[ "Dance"],
        choices:[
            {choices:1, bonus:0, options:["Artistic Expression", "Courtesy", "Lore(Art)", "Lore(Heraldry)", "Lore(Philosophy)", "Lore(Regional)", "Oratory", "Play Instrument"]}
        ]

    },
    {name:"Craftsman",
        backgrounds:[ "Barbarian", "Civilised", "Mariner", "Nomad(Arctic)", "Nomad(Desert)", "Nomad(Temperate)", "Peasant", "Townsman"],
        basic_skill_bonuses:[ "Evaluate", 20, "Influence", 5, "Persistence", 5],
        advanced_skills:[ "Craft"],
        choices:[
            {choices:1, bonus:0, options:["Artistic Expression", "Craft(other)", "Engineering", "Mechanisms"]}
        ]

    },
    {name:"Diplomat",
        backgrounds:[ "Civilised", "Townsman", "Noble"],
        basic_skill_bonuses:[ "Influence", 20, "Perception", 10, "Lore(World)", 10],
        advanced_skills:[],
        choices:[
            {choices:1, bonus:0, options:["Artistic Expression", "Courtesy", "Dance", "Language", "Lore", "Oratory", "Play Instrument"]}
        ]

    },
    {name:"Explorer",
        backgrounds:[ "Barbarian", "Civilised", "Mariner", "Nomad(Arctic)", "Nomad(Desert)", "Nomad(Temperate)", "Noble"],
        basic_skill_bonuses:[ "Lore(World)", 20, "Perception", 5, "Resilience", 5],
        advanced_skills:[],
        choices:[
            {choices:2, bonus:0, options:["Language", "Lore(Astronomy)", "Lore(Geography)", "Shiphandling", "Survival"]}
        ]

    },
    {name:"Farmer",
        backgrounds:[ "Barbarian", "Peasant"],
        basic_skill_bonuses:[ "Athletics", 5, "Driving", 5, "Lore(Animal)", 15, "Lore(Plant)", 15, "Resilience", 10],
        advanced_skills:[],
        choices:[]
    },
    {name:"Fisherman",
        backgrounds:[ "Barbarian", "Mariner", "Nomad(Arctic)", "Peasant"],
        basic_skill_bonuses:[ "Athletics", 5, "Boating", 20, "Lore(Animal)", 5, "Resilience", 10, "Throwing", 10],
        advanced_skills:[],
        choices:[]
    },
    {name:"Healer",
        backgrounds:[ "Barbarian", "Peasant"],
        basic_skill_bonuses:[ "First Aid", 10, "Lore(Animal)", 10, "Lore(Plant)", 10],
        advanced_skills:[ "Healing"],
        runes:["Beast", "Fertility", "Plant", "Man"],
        choices:[
            {choices:1, bonus:0, options:["Runecasting"]}
        ]
    },
    {name:"Herdsman",
        backgrounds:[ "Barbarian", "Nomad(Temperate)", "Peasant"],
        basic_skill_bonuses:[ "First Aid", 5, "Lore(Animal)", 20, "Resilience", 5, "Sling", 10],
        advanced_skills:[ "Survival"],
        choices:[]
    },
    {name:"Hunter",
        backgrounds:[ "Barbarian", "Peasant", "Nomad(Arctic)", "Nomad(Desert)", "Nomad(Temperate)", "Primitive"],
        basic_skill_bonuses:[ "Bow", 5, "Lore(Animal)", 10, "Spear", 5, "Stealth", 10],
        advanced_skills:[ "Survival", "Tracking"],
        choices:[]
    },
    {name:"Knight",
        backgrounds:[ "Civilised", "Noble"],
        basic_skill_bonuses:[ "Athletics", 5, "Influence", 5, "Riding", 10],
        choices:[
            {choices:2, bonus:10, options:["1H Sword", "2H Sword", "Shield", "Spear"]},
            {choices:1, bonus:0, options:["Courtesy", "Dance", "Oratory", "Play Instrument"]}
        ],
        advanced_skills:[]
    },
    {name:"Lord",
        backgrounds:[ "Civilised", "Noble"],
        basic_skill_bonuses:[ "1H Sword", 10, "Influence", 20, "Persistence", 10, "Riding", 10],
        advanced_skills:[],
        choices:[
            {choices:1, bonus:0, options:["Persistence", "Courtesy"]},
            {choices:1, bonus:0, options:["Riding", "Oratory"]}
        ]
    },
    {name:"Mercenary",
        backgrounds:[ "Barbarian", "Mariner", "Peasant", "Townsman"],
        basic_skill_bonuses:[ "Lore(World)", 10],
        choices:[
            {choices:2, bonus:15, options:["1H Axe", "1H Flail", "1H Hammer", "1H Sword", "2H Axe", "2H Flail", "2H Hammer", "2H Sword", "Bow", "Crossbow", "Polearm", "Shield"]},
            {choices:2, bonus:5, options:["Athletics", "Dagger", "Dodge", "Driving", "Evaluate", "Resilience", "Riding", "Unarmed"]}
        ],
        advanced_skills:[]
    },
    {name:"Merchant",
        backgrounds:[ "Mariner", "Townsman"],
        basic_skill_bonuses:[ "Evaluate", 20, "Influence", 10, "Lore(World)", 10],
        advanced_skills:[],
        choices:[
            {choices:1, bonus:0, options:["Language", "Lore(Logistics)", "Shiphandling"]}
        ]
    },
    {name:"Militiaman",
        backgrounds:[ "Peasant", "Townsman"],
        basic_skill_bonuses:[ "1H Axe", 5, "Athletics", 10, "Dodge", 5, "Resilience", 5, "Shield", 10, "Spear", 10, "Unarmed", 5],
        advanced_skills:[],
        choices:[]
    },
    {name:"Miner",
        backgrounds:[ "Peasant"],
        basic_skill_bonuses:[ "1H Axe", 10, "2H Axe", 10, "Athletics", 10, "Resilience", 10],
        advanced_skills:[ "Lore(Mineral)"],
        choices:[]
    },
    {name:"Peddler",
        backgrounds:[ "Barbarian", "Nomad(Temperate)", "Peasant", "Townsman"],
        basic_skill_bonuses:[ "Driving", 5, "Evaluate", 10, "Influence", 10, "Lore(World)", 10],
        choices:[
            {choices:1, bonus:5, options:["1H Hammer", "Crossbow", "Staff", "Unarmed"]},
            {choices:1, bonus:0, options:["Language", "Lore", "Streetwise", "Survival"]}
        ],
        advanced_skills:[]
    },
    {name:"Physician",
        backgrounds:[ "Civilised", "Townsman", "Noble"],
        basic_skill_bonuses:[ "Evaluate", 5, "First Aid", 20, "Lore(Plant)", 10, "Perception", 5],
        advanced_skills:[ "Healing"],
        choices:[]
    },
    {name:"Priest",
        backgrounds:[ "Civilised", "Peasant", "Townsman"],
        basic_skill_bonuses:[ "Influence", 15, "Lore(World)", 5, "Persistence", 10],
        advanced_skills:[ "Lore(Theology)"],
        runes:["Communication", "Law", "Man", "Spirit"],
        choices:[
            {choices:1, bonus:0, options:["Runecasting"]},
            {choices:1, bonus:0, options:["Lore(Theology)", "Lore(Specific Theology)"]},
            {choices:1, bonus:0, options:["Runecasting", "Oratory"]}
        ]
    },
    {name:"Ranger",
        backgrounds:[ "Barbarian", "Nomad(Desert)", "Nomad(Temperate)", "Peasant", "Primitive"],
        basic_skill_bonuses:[ "1H Sword", 5, "Perception", 5, "Lore(World)", 10],
        advanced_skills:[ "Lore(Regional)", "Survival", "Tracking"],
        choices:[]
    },
    {name:"Sailor",
        backgrounds:[ "Mariner", "Peasant", "Townsman"],
        basic_skill_bonuses:[ "Acrobatics", 10, "Athletics", 10, "Boating", 10, "Lore(World)", 5, "Resilience", 5],
        advanced_skills:[ "Shiphandling"],
        choices:[]
    },
    {name:"Scholar",
        backgrounds:[ "Civilised", "Townsman", "Noble"],
        basic_skill_bonuses:[ "Evaluate", 5, "Lore(World)", 5, "Persistence", 10],
        advanced_skills:[ "Lore"],
        choices:[
            {choices:2, bonus:0, options:["Artistic Expression", "Courtesy", "Engineering", "Healing", "Language", "Lore", "Mechanisms"]}
        ]

    },

    {name:"Scribe",
        backgrounds:[ "Civilised", "Townsman"],
        basic_skill_bonuses:[ "Evaluate", 5, "Lore(World)", 5],
        advanced_skills:[ "Language"],
        choices:[
            {choices:3, bonus:0, options:["Language", "Lore"]}
        ]
    },
    {name:"Shaman",
        backgrounds:[ "Barbarian", "Nomad(Arctic)", "Nomad(Desert)", "Nomad(Temperate)", "Primitive"],
        basic_skill_bonuses:[ "First Aid", 5, "Influence", 10, "Lore(Animal)", 5, "Lore(Plant)", 5, "Persistence", 5],
        advanced_skills:[ ],
        choices:[
            {choices:1, bonus:0, options:["Runecasting"]},
            {choices:1, bonus:0, options:["Healing", "Lore", "Runecasting", "Survival"]}
        ],
        runes:["Beast", "Earth", "Man", "Spirit."]
    },
    {name:"Soldier",
        backgrounds:[ "Barbarian", "Civilised", "Peasant", "Townsman", "Noble"],
        basic_skill_bonuses:[ "Dodge", 5, "Lore(World)", 5, "Resilience", 5, "Unarmed", 5],
        choices:[
            {choices:3, bonus:10, options:["1H Axe", "1H Flail", "1H Hammer", "1H Sword", "2H Axe", "2H Flail", "2H Hammer", "2H Sword", "Athletics", "Bow", "Crossbow", "Dagger", "Driving", "Polearm", "Riding", "Shield", "Sling", "Spear"]}
        ],
        advanced_skills:[]
    },
    {name:"Spy",
        backgrounds:[ "Civilised", "Townsman", "Noble"],
        basic_skill_bonuses:[ "Acrobatics", 5, "Dodge", 5, "Influence", 5, "Perception", 5, "Persistence", 5, "Lore(World)", 5, "Sleight", 5, "Stealth", 5],
        advanced_skills:[],
        choices:[
            {choices:1, bonus:0, options:["Courtesy", "Disguise", "Language", "Tracking"]}
        ]
    },
    {name:"Thief",
        backgrounds:[ "Barbarian", "Peasant", "Townsman"],
        basic_skill_bonuses:[ "Acrobatics", 5, "Evaluate", 5, "Perception", 10, "Sleight", 10, "Stealth", 10],
        advanced_skills:[],
        choices:[
            {choices:1, bonus:0, options:["Disguise", "Mechanisms", "Streetwise"]}
        ]

    },
    {name:"Town Guard",
        backgrounds:[ "Townsman"],
        basic_skill_bonuses:[ "1H Hammer", 5, "Athletics", 5, "Crossbow", 5, "Perception", 5, "Polearm", 10, "Shield", 10],
        advanced_skills:[ "Streetwise"],
        choices:[]
    },
    {name:"Witch",
        backgrounds:[ "Barbarian", "Peasant"],
        basic_skill_bonuses:[ "First Aid", 5, "Lore(Animal)", 5, "Lore(Plant)", 10],
        advanced_skills:[ ],
        choices:[
            {choices:1, bonus:0, options:["Runecasting"]},
            {choices:2, bonus:0, options:["Healing", "Lore", "Runecasting", "Survival"]}
        ],
        runes:["Fertility", "Luck", "Moon", "Shadow"]
    },
    {name:"Wizard",
        backgrounds:[ "Townsman", "Noble"],
        basic_skill_bonuses:[ "Evaluate", 5, "Lore(World)", 5, "Persistence", 10],
        advanced_skills:[],
        choices:[
            {choices:1, bonus:0, options:["Runecasting"]},
            {choices:1, bonus:0, options:["Runecasting"]},
            {choices:1, bonus:0, options:["Language", "Lore", "Runecasting"]}
        ],
        runes:["Air", "Cold", "Earth", "Fire", "Heat", "Water"]
    },
    {name:"Woodsman",
        backgrounds:[ "Barbarian", "Peasant"],
        basic_skill_bonuses:[ "1H Axe", 5, "2H Axe", 10, "Athletics", 10, "Lore(Plant)", 10, "Resilience", 5],
        advanced_skills:[ "Survival"],
        choices:[]
    }
]

PROFESSIONS = {
    all:ko.observableArray(),
    selected:ko.observable()
}
PROFESSIONS["possible"] = ko.computed(function () {
    if (BACKGROUNDS.selected() == undefined) {
        return [];
    }

    var avl = BACKGROUNDS.selected().available_professions
    var ret = PROFESSIONS.all().filter(function (o) {
        return $.inArray(o.name, avl) != -1
    })
    return ret
}, BACKGROUNDS.selected)

for (var i in __PROFESSIONS) {
    var profession = __PROFESSIONS[i];
    PROFESSIONS.all.push(new Profession(profession))
}
