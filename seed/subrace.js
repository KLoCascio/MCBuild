const db = require('../db/index')

const Subrace = require('../models/subrace.js')

db.on('error', console.error.bind(console, 'MongoDB Subrace connection error:'))

const main = async () => {
    const dragonbornSubrace = await new Subrace(
        { name: Black },
        { name: Blue }, 
        { name: Brass },
        { name: Bronze }, 
        { name: Copper },
        { name: Gold }, 
        { name: Green },
        { name: Red }, 
        { name: Silver },
        { name: White }, 
        
    )
    dragonbornSubrace.save()

    const drowSubrace = await new Subrace(
        { name: Seldarine },
        { name: Lolth}
    )
    drowSubrace.save()

    const dwarfSubrace = await new Subrace(
        { name: Gold },
        { name: Shield },
        { name: Duergar }
    )
    dwarfSubrace.save()

    const elfSubrace = await new Subrace(
        { name: High },
        { name: Wood }
    )
    elfSubrace.save()

    const gnomeSubrace = await new Subrace(
        { name: Forest },
        { name: Deep },
        { name: Rock }
    )
    gnomeSubrace.save()

    const halfElfSubrace = await new Subrace(
        { name: High },
        { name: Wood },
        { name: Drow }
    )
    halfElfSubrace.save()

    const halflingSubrace = await new Subrace(
        { name: Lightfoot },
        { name: Strongheart }
    )
    halflingSubrace.save()

    const tieflingSubrace = await new Subrace(
        { name: Asmodeus },
        { name: Mephistopheles },
        { name: Zariel }
    )
}

const run = async () => {
    await main()
    // db.close()
}
