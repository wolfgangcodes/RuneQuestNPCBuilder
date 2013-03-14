function init() {
    character = new Character()
    character.age (0)


    //-- Characterisitcs
    character.str (new RolledAttribute(4, 0, true))
    character.con (new RolledAttribute(4, 0, true))
    character.dex (new RolledAttribute(4, 0, true))
    character.siz (new RolledAttribute(2, 6, false))
    character.int (new RolledAttribute(2, 6, false))
    character.pow (new RolledAttribute(4, 0, true))
    character.cha (new RolledAttribute(4, 0, true))

    ko.applyBindings(character);
    character.reroll()
    character.magic_points().max()

}

