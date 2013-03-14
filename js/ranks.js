RANKS = []
__RANKS = [
    {   name:"Novice",
        age:18,
        money_multiplier:1,
        free_skill_points:0,
        bonus_characteristic_points:0,
        individual_max:20,
        runes:"1d0",
        hero_points:2,
        legendary_abilities:0
    },
    {   name:"Seasoned",
        age:19,
        money_multiplier:2,
        free_skill_points:150,
        individual_max:50,
        bonus_characteristic_points:"1d3",
        runes:"1d3",
        hero_points:3,
        legendary_abilities:0
    },
    {   name:"Veteran",
        age:23,
        money_multiplier:5,
        free_skill_points:200,
        individual_max:70,
        bonus_characteristic_points:"1d4+1",
        runes:"1d4+1",
        hero_points:6,
        legendary_abilities:0
    },
    {   name:"Master",
        age:27,
        money_multiplier:10,
        free_skill_points:300,
        individual_max:90,
        bonus_characteristic_points:"1d6+2",
        runes:"1d6+2",
        hero_points:9,
        legendary_abilities:1
    },
    {   name:"Hero",
        age:31,
        money_multiplier:20,
        free_skill_points:500,
        individual_max:90,
        bonus_characteristic_points:"1d8+4",
        runes:"1d8+4",
        hero_points:12,
        legendary_abilities:2
    }
]

for (var i in __RANKS) {
    var b = __RANKS[i];
    RANKS.push(new Rank(b))
}