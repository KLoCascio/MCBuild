const db = require('../db')

const Class = require('../models/class.js')

db.on('error', console.error.bind(console, 'MongoDB Class connection error:'))

const main = async () => {
    const Barbarian = await new Class({

    })
    Barbarian.save()
    
    const Bard = await new Class({

    })
    Bard.save()
    
    const Cleric = await new Class({

    })
    Cleric.save()

    const Druid = await new Class({

    })
    Druid.save()

    const Fighter = await new Class({

    })
    Fighter.save()

    const Monk = await new Class({

    })
    Monk.save()

    const Paladin = await new Class({

    })
    Paladin.save()

    const Ranger = await new Class({

    })
    Ranger.save()

    const Rogue = await new Class({

    })
    Rogue.save()

    const Sorcerer = await new Class({

    })
    Sorcerer.save()

    const Warlock = await new Class({

    })
    Warlock.save()

    const Wizard = await new Class({

    })
    Wizard.save()

}

const run = async () => {
    await main()
    // db.close()
}

run()