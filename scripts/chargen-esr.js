Hooks.on("setup", () => {
    const WFRP4E = game.wfrp4e.config //DO NOT TOUCH


    let config = { 
        subspecies: {
            nord: {},
            imperial: {}
        }
    }
    //---------------------//
    //NORD//
    //---------------------//
    WFRP4E.species["nord"] = "Nord"

    WFRP4E.speciesCharacteristics["nord"] = {
        "ws": "2d10+20",
        "bs": "2d10+20",
        "s": "2d10+20",
        "t": "2d10+20",
        "i": "2d10+20",
        "ag": "2d10+20",
        "dex": "2d10+20",
        "int": "2d10+20",
        "wp": "2d10+20",
        "fel": "2d10+20"
    }

    WFRP4E.speciesSkills["nord"] = [
        "...",
        "...",
        "...",
    ]

    WFRP4E.speciesTalents["nord"] = [
        "...",
        "...",
        "...",
        0
    ]

    WFRP4E.speciesFate["nord"] = 6;

    WFRP4E.speciesRes["nord"] = 6;

    WFRP4E.speciesExtra["nord"] = 10;

    WFRP4E.speciesMovement["nord"] = 10;

    WFRP4E.speciesAge.nord = "2d4 + 15"

    WFRP4E.speciesHeight.nord = {
        feet : 3,
        inches : 3,
        die : "1d10"
    }

    
    //NORD SUBSPECIES

    config.subspecies["nord"]["eastmarcher"] = {
        name: "Eastmarcher",
        skills: [
            "Charm",
            "Consume Alcohol",
            "Haggle",
            "Lore (Randomewrwer)",
            "Sleight of Hand",
            "Stealth (Any)",
            "Trade (Cook)",
            "Cool",
            "Intuition",
            "Language (Mootish)",
            "Ranged (any)"
        ],
        talents: [
            "Acute Sense (Taste)",
            "Night Vision",
            "Resistance (Chaos)",
            "Small",
            "Acute Sense (Sight), Etiquette (Soldiers)",
            1
        ]
    }

    //---------------------//
    //IMPERIAL//
    //---------------------//
    WFRP4E.species["imperial"] = "Imperial"

    WFRP4E.speciesCharacteristics["imperial"] = {
        "ws": "2d10+20",
        "bs": "2d10+20",
        "s": "2d10+20",
        "t": "2d10+20",
        "i": "2d10+20",
        "ag": "2d10+20",
        "dex": "2d10+20",
        "int": "2d10+20",
        "wp": "2d10+20",
        "fel": "2d10+30"
    }

    WFRP4E.speciesSkills["imperial"] = [
        "...",
        "...",
        "...",
    ]

    WFRP4E.speciesTalents["imperial"] = [
        "...",
        "...",
        "...",
        0
    ]

    WFRP4E.speciesFate["imperial"] = 6;

    WFRP4E.speciesRes["imperial"] = 6;

    WFRP4E.speciesExtra["imperial"] = 10;

    WFRP4E.speciesMovement["imperial"] = 10;

    WFRP4E.speciesAge.imperial = "2d4 + 15"

    WFRP4E.speciesHeight.imperial = {
        feet : 3,
        inches : 3,
        die : "1d10"
    }
  


    //IMPERIAL SUBSPECIES

    config.subspecies["imperial"]["heartlander"] = {
        name: "heartlander",
        skills: [
            "Charm",
            "Consume Alcohol",
            "Haggle",
            "Lore (Randomewrwer)",
            "Sleight of Hand",
            "Stealth (Any)",
            "Trade (Cook)",
            "Cool",
            "Intuition",
            "Language (Mootish)",
            "Ranged (any)"
        ],
        talents: [
            "Night Vision",
            "Resistance (Chaos)",
            "Small",
            "Acute Sense (Sight), Etiquette (Soldiers)",
            1
        ]
    }


    mergeObject(game.wfrp4e.config, config) //DO NOT TOUCH
  
});