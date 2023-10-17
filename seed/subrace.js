const db = require('../db/index')

const { Subrace } = require('../models/subrace.js')

db.on('error', console.error.bind(console, 'MongoDB Subrace connection error:'))

// Dragonborn -> Black, Blue, Brass, Bronze, Copper, Gold, Green, Red, Silver, White
// Drow -> Seldarine Drow, or Lolth Drow
// Dwarf -> Gold Dwarf, Shield Dwarf, or Duergar
// Elf -> High Elf, or Wood Elf
// Gnome -> Forest Gnome, Deep Gnome, and Rock Gnome
// Half-Elf -> High Half-Elf, Wood Half-Elf, Drow Half-Elf
// Halfling -> Lightfoot Halfling, and Strongheart Halfling
// Tiefling -> Asmodeus Tiefling, Mephistopheles Tiefling, and Zariel Tiefling

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
    db.close()
}
