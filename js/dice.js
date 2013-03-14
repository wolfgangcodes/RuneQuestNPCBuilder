var ROLL_RULES = {
    STANDARD:1,
    DROP_LOWEST:2,
    DROP_HIGHEST:3,
    DROP_LOWEST_AND_HIGHEST:4,
    KEEP_LOWEST:5,
    KEEP_HIGHEST:6
}

function randomInt(intMin, intMax) {
    intMax = Math.round(intMax);
    intMin = Math.round(intMin);
    return intMin + Math.floor(intMax * (Math.random() % 1));
}

function rollDice(numRolls, numSides, bonus, rollingRules) {
    var total = 0;
    var rolls = new Array(numRolls);

    for (var i = 0; i < numRolls; i++) {
        var roll = randomInt(1, numSides);
        rolls[i] = roll;
        total += roll;
    }


    switch (rollingRules) {
        case ROLL_RULES.STANDARD:
            break;
        case ROLL_RULES.DROP_LOWEST:
            // dropLowest
            drop = getLowest(rolls);
            total -= drop;
            break;
        case ROLL_RULES.DROP_HIGHEST:
            // dropHighest
            drop = getHighest(rolls);
            total -= drop;

            break;
        case ROLL_RULES.DROP_LOWEST_AND_HIGHEST:
            // dropHigestAndLowest
            drop = getLowest(rolls);
            total -= drop;


            drop = getHighest(rolls);
            total -= drop;

            break;
        case ROLL_RULES.KEEP_HIGHEST:
            // drop all but lowest
            keep = getLowest(rolls);
            total = keep;
            break;
        case ROLL_RULES.KEEP_LOWEST:
            // drop all but highest
            keep = getHighest(rolls);
            total = keep;

            break;
    }

    total += bonus;


    return total;
}

function getLowest(rollArray) {
    var lowest = rollArray[0];

    for (var i = 1; i < rollArray.length; i++) {
        if (rollArray[i] < lowest) {
            lowest = rollArray[i];
        }
    }

    return lowest;
}

function getHighest(rollArray) {
    var highest = rollArray[0];

    for (var i = 1; i < rollArray.length; i++) {
        if (rollArray[i] > highest) {
            highest = rollArray[i];
        }
    }

    return highest;
}

function rollDie(numSides) {
    var roll = randomInt(1, numSides);
    return roll;
}
