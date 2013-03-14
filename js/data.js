RUNES = [
    "Air",
    "Beast",
    "Chaos",
    "Cold",
    "Communication",
    "Darkness",
    "Death",
    "Disorder",
    "Dragon",
    "Dragonewt",
    "Earth",
    "Fate",
    "Fertility",
    "Fire",
    "Harmony",
    "Heat",
    "Illusion",
    "Infinity",
    "Law",
    "Light",
    "Luck",
    "Magic",
    "Man",
    "Mastery",
    "Metal",
    "Moon",
    "Motion",
    "Plant",
    "Shadow",
    "Spirit",
    "Stasis",
    "Trade",
    "Truth",
    "Undead",
    "Water"
]
BASIC_SKILLS = [
    "Acrobatics",
    "Athletics",
    "Boating",
    "Dodge",
    "Drive",
    "Evaluate",
    "First Aid",
    "Influence",
    "Lore (Animal)",
    "Lore (Plant)",
    "Lore (World)",
    "Perception",
    "Persistence",
    "Resilience",
    "Riding",
    "Sing",
    "Sleight",
    "Stealth",
    "Throwing",
    "Unarmed",
    "Close Combat",
    "Ranged Combat"
]
CLOSE_COMBAT_SKILLS = [
    "1H Axe",
    "1H Flail",
    "1H Hammer",
    "1H Sword",
    "2H Axe",
    "2H Flail",
    "2H Hammer",
    "2H Sword",
    "Dagger",
    "Polearm",
    "Rapier",
    "Shield",
    "Spear",
    "Staff",
    "Unarmed"
]
RANGED_WEAPON_SKILLS = [
    "Blowgun",
    "Bow",
    "Crossbow",
    "Sling"
]
ADVANCED_SKILLS = [
    "Artistic Expression",
    "Courtesy",
    "Craft",
    "Dance",
    "Disguise",
    "Engineering",
    "Enchanting",
    "Healing",
    "Language",
    "Lore",
    "Martial Arts",
    "Mechanisms",
    "Oratory",
    "Play Instrument",
    "Shiphandling",
    "Streetwise",
    "Survival",
    "Tracking"
]
CRAFT = [
    "Armourer", "Baker", "Basketweaver", "Blacksmith", "Bowyer", "Brewer", "Butcher", "Candlemaker", "Carpenter", "Cartographer", "Cobbler", "Cooper", "Fletcher", "Joiner", "Leatherworker", "Mason", "Painter", "Potter", "Sculptor", "Smith", "Tailor", "Weaponsmith", "Weaver"
]
LORE = [
    "Alchemy",
    "Art",
    "Astronomy",
    "Court" ,
    "Gambling",
    "Geography",
    "Heraldry",
    "Law",
    "Logistics",
    "Military",
    "Mineral",
    "Philosophy",
    "Poisons",
    "Regional",
    "Theology",
    "Specific Theology"
]
__SPECIFIC_SKILLS = [
    "Artistic Expression",
    "Craft",
    "Language",
    "Lore",
    "Lore(Specific Theology)",
    "Play Instrument",
    "Runecasting"
]
SKILL_TYPE = {
    BASIC:"BASIC",
    ADVANCED:"ADVANCED",
    RUNE:"RUNE"
}
RACES = []
    /*
    Broo
    Ducks
    Aldryami
    Mostali
    Dragonewts
    */

function lookupHitPoints(part, size, con) {
    var bonus = Math.ceil((size + con) / 5);
    bonus = isNaN(bonus) ? 0 : bonus;
    var base = 0;

    if (part == 'leg' || part == 'head') {
        base = 0;
    } else if (part == 'abdomen') {
        base = 1;
    } else if (part == 'chest') {
        base = 2;
    } else if (part == 'arm') {
        bonus = bonus - 1;
        if (bonus == 0)
            bonus = 1;
        base = 0;
    }

    return base + bonus;
}

function lookupCombatActions(int, dex) {
    var avg = (int + dex) / 2
    return Math.ceil(avg / 6)

}

function lookupDamageModifier(str, siz) {
    var ss = str + siz;

    // p. 6 luxury srd, handles 1 - 100
    if (ss > 100) {
        return "Chart"
    }
    var line = Math.ceil(ss / 5)

    var positive = 0;
    line > 5 ? positive = '+' : '';
    line < 5 ? positive = '-' : '';


    var diceStep = "ERROR"

    if (line === 11 || line === 13 || line === 15)
        diceStep = '12'
    else if (line === 10 || line === 12 || line === 14)
        diceStep = '10'
    else if (line === 1 || line === 9 || line === 13)
        diceStep = '8'
    else if (line === 2 || line === 8 || line === 12)
        diceStep = '6'
    else if (line === 3 || line === 7)
        diceStep = '4'
    else if (line === 4 || line === 6)
        diceStep = '2'
    else
        diceStep = '12'

    var numDice = -1000;
    if (line > 12)
        numDice = 2
    else if (line > 5)
        numDice = 1
    else if (line == 5)
        numDice = 0
    else
        numDice = 1

    var modifier = 'ERROR'
    if (positive == 0) {
        modifier = 0
    } else {
        modifier = positive + numDice + 'd' + diceStep
    }
    return modifier
}

function rollAge(){
    var age = rollDice(1, 20, 0, ROLL_RULES.STANDARD)

    while(age == 1){
        age = rollDice(1, 20, 0, ROLL_RULES.STANDARD)
    }
    while(age == 20){
        age += rollDice(1, 20, 0, ROLL_RULES.STANDARD)
    }
    return age + 18
}