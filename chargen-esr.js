Hooks.on("setup", () => {
    const WFRP4E = game.wfrp4e.config //DO NOT TOUCH


    let config = { 
        subspecies: {
            nord: {},
            imperial: {},
            breton: {},
            redguard: {},
            orsimer:{},
            dunmer:{},
            khajiit:{},
            bosmer:{},
            altmer:{},
            argonian:{}
        }
    }
    //---------------------//
    //NORD//
    //---------------------//
    WFRP4E.species["nord"] = "Nord"

    WFRP4E.speciesCharacteristics["nord"] = {
        "ws": "2d10+30",
        "bs": "2d10+23",
        "s": "2d10+30",
        "t": "2d10+28",
        "i": "2d10+25",
        "ag": "2d10+23",
        "dex": "2d10+23",
        "int": "2d10+21",
        "wp": "2d10+24",
        "fel": "2d10+23"
    }

    WFRP4E.speciesSkills["nord"] = [
        "Melee (basic)",
        "Endurance",
        "Consume Alcohol",
        "Sail",
        "Outdoor Survival",
        "Intimidate",
        "Swim",
        "Row",
        "Athletics",
        "Entertain (Storytelling)",
        "Gossip",
        "Lore (Skyrim)"
    ]

    WFRP4E.speciesTalents["nord"] = [
        "Warrior born, Old Salt",
        "War Leader, Fisherman",
        "Resistance (Cold)",
        2
    ]

    WFRP4E.speciesFate["nord"] = 1;

    WFRP4E.speciesRes["nord"] = 2;

    WFRP4E.speciesExtra["nord"] = 3;

    WFRP4E.speciesMovement["nord"] = 4;

    WFRP4E.speciesAge.nord = "2d4 + 15"

    WFRP4E.speciesHeight.nord = {
        feet : 6,
        inches : 0,
        die : "1d10"
    }

    
    //NORD SUBSPECIES

    config.subspecies["nord"]["eastmarcher"] = {
        name: "Eastmarcher",
        skills: [
           "Melee (basic)",
           "Endurance",
           "Consume Alcohol",
           "Sail",
           "Outdoor Survival",
           "Intimidate",
           "Swim",
           "Row",
           "Athletics",
           "Entertain (Storytelling)",
           "Gossip",
           "Lore (Skyrim)"
        ],
        talents: [
        "Warrior born, Old Salt",
        "War Leader, Fisherman",
        "Resistance (Cold)",
        2
        ]
    }
    config.subspecies["nord"]["westholder"] = {
        name: "Westholder",
        skills: [
            "Charm",
            "Gossip",
            "Trade (Any)",
            "Sail",
            "Row",
            "Endurance",
            "Cool",
            "Melee (Basic)",
            "Language (Any)",
            "Ride (Horse)",
            "Lore (Skyrim)",
            "Entertain (Sing)"
        ],
        talents: [
        "Savvy, Suave",
        "Seasoned Traveller",
        "Resistance (Cold)",
        2
        ]
    }
    config.subspecies["nord"]["skaal"] = {
        name: "Skaal",
        skills: [
            "Outdoor Survival",
            "Set Trap",
            "Endurance",
            "Lore (Magic)",
            "Stealth (Rural)",
            "Cool",
            "Intuition", 
            "Ranged (Throwing)",
            "Lore (Solstheim)",
            "Melee (Basic)",
            "Perception",
            "Dodge"
        ],
        talents: [
        "Resistance (Cold)",
        "Hardy",
        "Coolheaded, Savvy",
        "Rover",
        1
        ]
    }

    //---------------------//
    //IMPERIAL//
    //---------------------//
    WFRP4E.species["imperial"] = "Imperial"

    WFRP4E.speciesCharacteristics["imperial"] = {
        "ws": "2d10+25",
        "bs": "2d10+24",
        "s": "2d10+25",
        "t": "2d10+25",
        "i": "2d10+25",
        "ag": "2d10+25",
        "dex": "2d10+22",
        "int": "2d10+26",
        "wp": "2d10+25",
        "fel": "2d10+28"
    }

    WFRP4E.speciesSkills["imperial"] = [
        "Animal Care",
        "Cool",
        "Evaluate",
        "Gossip",
        "Leadership",
        "Language (Any)",
        "Melee (Basic)",
        "Ride (Horse)",
        "Lore (Cyrodiil)",
        "Intimidate",
        "Animal Training (Horse)",
        "Endurance"
    ]

    WFRP4E.speciesTalents["imperial"] = [
        "Warrior Born, Roughrider",
        "Strong-minded",
        "Strong back, Crack the Whip",
        2
    ]

    WFRP4E.speciesFate["imperial"] = 2;

    WFRP4E.speciesRes["imperial"] = 1;

    WFRP4E.speciesExtra["imperial"] = 3;

    WFRP4E.speciesMovement["imperial"] = 4;

    WFRP4E.speciesAge.imperial = "2d4 + 15"

    WFRP4E.speciesHeight.imperial = {
        feet : 5,
        inches : 5,
        die : "1d10"
    }
  


    //IMPERIAL SUBSPECIES

    config.subspecies["imperial"]["colovian"] = {
        name: "Colovian",
        skills: [
           "Animal Care",
           "Cool",
           "Evaluate",
           "Gossip",
           "Leadership",
           "Language (Any)",
           "Melee (Basic)",
           "Ride (Horse)",
           "Lore (Cyrodiil)",
           "Intimidate",
           "Animal Training (Horse)",
           "Endurance"
        ],
        talents: [
           "Warrior Born, Roughrider",
           "Strong-minded",
           "Strong back, Crack the Whip",
           2
        ]
    }
	config.subspecies["imperial"]["heartlander"] = {
        name: "Heartlander",
        skills: [
            "Evaluate",
            "Haggle",
            "Charm",
            "Bribery",
            "Language (Any)",
            "Gamble",
            "Lore (Poltics)",
            "Trade (Any)",
            "Gossip",
            "Intuition",
            "Consume Alcohol",
            "Sleight of Hand"
        ],
        talents: [
            "Savvy, Suave",
            "Linguistics",
            "Read/Write, Fisherman",
            "Etiquette (any)",
            1
        ]
    }
    config.subspecies["imperial"]["nibenese"] = {
        name: "Nibenese",
        skills: [
            "Art (Any)",
            "Cool",
            "Lore (Magic)",
            "Outdoor Survival",
            "Language (Any)",
            "Charm",
            "Ranged (Bow)",
            "Melee (Basic)",
            "Lore (Theology)",
            "Gossip",
            "Haggle",
            "Channel (Any)"
        ],
        talents: [
            "Argumentative, Fisherman",
            "Coolheaded, Nimble Fingered",
            "Impassioned Zeal",
            2
        ]
    }

	//---------------------//
    //Breton//
    //---------------------//
    WFRP4E.species["breton"] = "Breton"

    WFRP4E.speciesCharacteristics["breton"] = {
        "ws": "2d10+25",
        "bs": "2d10+22",
        "s": "2d10+23",
        "t": "2d10+21",
        "i": "2d10+25",
        "ag": "2d10+27",
        "dex": "2d10+24",
        "int": "2d10+28",
        "wp": "2d10+30",
        "fel": "2d10+25"
    }

    WFRP4E.speciesSkills["breton"] = [
        "Channel",
        "Lore (Magic)",
        "Melee (Basic)",
        "Cool",
        "Lore (Heraldry)",
        "Lore (High Rock)",
        "Gossip",
        "Intuition",
        "Ride (Horse)",
        "Animal Care",
        "Animal Training (Horse)",
        "Charm Animal"
    ]

    WFRP4E.speciesTalents["breton"] = [
        "Noble Blood, Beneath Notice",
        "Petty Magic, Strong Back",
        "Savvy, Craftsman",
        "Read/Write, Supportive",
        "Resistance (Magic)"
    ]

    WFRP4E.speciesFate["breton"] = 2;

    WFRP4E.speciesRes["breton"] = 1;

    WFRP4E.speciesExtra["breton"] = 3;

    WFRP4E.speciesMovement["breton"] = 4;

    WFRP4E.speciesAge.breton = "2d4 + 15"

    WFRP4E.speciesHeight.breton = {
        feet : 5,
        inches : 2,
        die : "1d10"
    }



    //BRETON SUBSPECIES

    config.subspecies["breton"]["glenumbran"] = {
        name: "Glenumbran",
        skills: [
            "Channel",
            "Lore (Magic)",
            "Melee (Basic)",
            "Cool",
            "Lore (Heraldry)",
            "Lore (High Rock)",
            "Gossip",
            "Intuition",
            "Ride (Horse)",
            "Animal Care",
            "Animal Training (Horse)",
            "Charm Animal"
        ],
        talents: [
            "Noble Blood, Beneath Notice",
            "Petty Magic, Strong Back",
            "Savvy, Suave",
            "Read/Write, Supportive",
            "Resistance (Magic)"
        ]
    }
    config.subspecies["breton"]["iliac"] = {
        name: "Iliac",
        skills: [
            "Evaluate",
            "Melee (Polearm)",
            "Haggle",
            "Gossip",
            "Sail",
            "Swim",
            "Trade (Any)",
            "Language (Any)",
            "Lore (Trade)",
            "Lore (Poltics)",
            "Intuition",
            "Stealth (Urban)"
        ],
        talents: [
            "Lightning Reflexes, Nimble Fingered",
            "Read/Write, Beneath Notice",
            "Super Numerate, Dealmaker",
            "Resistance (Magic)",
            1
        ]
    }
    config.subspecies["breton"]["northman"] = {
        name: "Northman",
        skills: [
            "Endurance",
            "Melee (Basic)",
            "Climb",
            "Athletics",
            "Outdoor Survival",
            "Cool",
            "Stealth (Rural",
            "Sail",
            "Swim",
            "Navigation",
            "Perception",
            "Track"
        ],
        talents: [
            "Scale Sheer Surface, Old Salt",
            "Very Resilient, Fisherman",
            "Resistance (Magic)",
            "Strider (Mountains)",
            1
        ]
    }
    
    //---------------------//
    //Redguard//
    //---------------------//
    WFRP4E.species["redguard"] = "Redguard"

    WFRP4E.speciesCharacteristics["redguard"] = {
        "ws": "2d10+26",
        "bs": "2d10+26",
        "s": "2d10+26",
        "t": "2d10+26",
        "i": "2d10+25",
        "ag": "2d10+26",
        "dex": "2d10+26",
        "int": "2d10+22",
        "wp": "2d10+23",
        "fel": "2d10+24"
    }

    WFRP4E.speciesSkills ["redguard"] = [
        "Sail",
        "Swim",
        "Trade (Any)",
        "Melee (basic)",
        "Athletics",
        "Lore (Hammerfell)",
        "Cool",
        "Evaluate",
        "Gossip",
        "Haggle",
        "Lore (Yokuda)",
        "Ride (Camel)"
    ]

    WFRP4E.speciesTalents["redguard"] = [
        "Noble Blood, Old Salt",
        "Lightning Reflexes, Suave",
        "Impassioned Zeal",
        "Resistance (Poison)",
        1
    ]
    
    WFRP4E.speciesFate["redguard"] = 2;

    WFRP4E.speciesRes["redguard"] = 1;

    WFRP4E.speciesExtra["redguard"] = 3;

    WFRP4E.speciesMovement["redguard"] = 4;

    WFRP4E.speciesAge.redguard = "2d4 + 15"

    WFRP4E.speciesHeight.redguard = {
        feet : 5,
        inches : 7,
        die : "1d10"
    }



    //REDGUARD SUBSPECIES

    config.subspecies["redguard"]["crown"] = {
        name: "Crown",
        skills: [
            "Sail",
            "Swim",
            "Trade (Any)",
            "Melee (basic)",
            "Athletics",
            "Lore (Hammerfell)",
            "Cool",
            "Evaluate",
            "Gossip",
            "Haggle",
            "Lore (Yokuda)",
            "Ride (Camel)"
        ],
        talents: [
            "Noble Blood, Old Salt",
            "Lightning Reflexes, Suave",
            "Impassioned Zeal",
            "Resistance (Poison)",
            1
        ]
    }
    config.subspecies["redguard"]["forebear"] = {
        name: "Forebear",
        skills: [
            "Sail",
            "Swim",
            "Melee (Basic)",
            "Endurance",
            "Athletics",
            "Outdoor Survival",
            "Dodge",
            "Lore (Hammerfell",
            "Cool",
            "Ranged (Bow)",
            "Ride (Camel)",
            "Consume Alcohol"
        ],
        talents: [
            "Resistance (Poison)",
            "Warrior Born, Old Salt",
            "Tenacious, Strong-minded",
            2
        ]
    }
    config.subspecies["redguard"]["alik'r"] = {
        name: "Alik'r",
        skills: [
            "Outdoor Survival",
            "Melee (Basic)",
            "Endurance",
            "Ride (Camel)",
            "Navigation",
            "Haggle",
            "Evaluate",
            "Animal Care",
            "Animal Training (Camel)",
            "Lore (Hammerfell)",
            "Track",
            "Ranged (Bow)"
        ],
        talents: [
            "Hardy",
            "Warrior Born, Marksman",
            "Seasoned Traveller, Stone Soup",
            2
        ]
    }

    //---------------------//
    //Orsimer//
    //---------------------//
    WFRP4E.species["orsimer"] = "Orsimer"

    WFRP4E.speciesCharacteristics["orsimer"] = {
        "ws": "2d10+28",
        "bs": "2d10+22",
        "s": "2d10+30",
        "t": "2d10+30",
        "i": "2d10+24",
        "ag": "2d10+23",
        "dex": "2d10+22",
        "int": "2d10+23",
        "wp": "2d10+26",
        "fel": "2d10+22"
    }

    WFRP4E.speciesSkills ["orsimer"] = [
        "Endruance",
        "Trade (Smith)",
        "Athletics",
        "Consume Alcohol",
        "Intimidate",
        "Melee (Basic)",
        "Melee (Two-Handed)",
        "Language (Osmieric)",
        "Gossip",
        "Lore (Cyrodiil)",
        "Outdoor Survival",
        "Cool"
    ]

    WFRP4E.speciesTalents["orsimer"] = [
        "Very Resilient, Craftsman (Smith)",
        "Menacing, Sturdy",
        "Resistance (Magic)",
        2
    ]

    WFRP4E.speciesFate["orsimer"] = 1;

    WFRP4E.speciesRes["orsimer"] = 2;

    WFRP4E.speciesExtra["orsimer"] = 3;

    WFRP4E.speciesMovement["orsimer"] = 4;

    WFRP4E.speciesAge.orsimer = "2d4 + 15"

    WFRP4E.speciesHeight.orsimer = {
        feet : 6,
        inches : 2,
        die : "1d10"
    }


    //ORSIMER SUBSPECIES

    config.subspecies["orsimer"]["imperial_orsimer"] = {
        name: "Imperial Orsimer",
        skills: [
            "Endurance",
            "Trade (Smith)",
            "Athletics",
            "Consume Alcohol",
            "Intimidate",
            "Melee (Basic)",
            "Melee (Two-Handed)",
            "Language (Osmieric)",
            "Gossip",
            "Lore (Cyrodiil)",
            "Outdoor Survival",
            "Cool"
        ],
        talents: [
            "Very Resilient, Craftsman (Smith)",
            "Menacing, Sturdy",
            "Resistance (Magic)",
            2
        ]
    }
    config.subspecies["orsimer"]["malacath_orsimer"] = {
        name: "Malacath Orsimer",
        skills: [
            "Endurance",
            "Trade (Smith)",
            "Athletics",
            "Outdoor Survival",
            "Melee (Basic)",
            "Melee (Two-Handed)",
            "Intimidate",
            "Consume Alcohol",
            "Lore (Malacath)",
            "Navigation",
            "Heal",
            "Leadership"
        ],
        talents: [
            "Very Resilient, Craftsman (Smith)",
            "Hardy",
            "Menacing, Sturdy",
            "Resistance (Magic)",
            "Warrior Born, War leader"
        ]
    }

    //---------------------//
    //Dunmer//
    //---------------------//
    WFRP4E.species["dunmer"] = "Dunmer"

    WFRP4E.speciesCharacteristics["dunmer"] = {
        "ws": "2d10+25",
        "bs": "2d10+28",
        "s": "2d10+25",
        "t": "2d10+24",
        "i": "2d10+25",
        "ag": "2d10+30",
        "dex": "2d10+22",
        "int": "2d10+25",
        "wp": "2d10+24",
        "fel": "2d10+22"
    }

     WFRP4E.speciesSkills ["dunmer"] = [
        "Destruction",
        "Melee (Basic)",
        "Haggle",
        "Consume Alcohol",
        "Athletics",
        "Lore (Morrowind)",
        "Lore (Politics)",
        "Outdoor Survival",
        "Stealth (Urban)",
        "Perecption",
        "Intuition",
        "Navigation"
     ]

     WFRP4E.speciesTalents["dunmer"] = [
        "Resistance (Fire)",
        "Warrior Born, Coolheaded, Suave, Very Resilient",
        "Argumentative, Impassioned Zeal",
        2
     ]

     WFRP4E.speciesFate["dunmer"] = 2;

     WFRP4E.speciesRes["dunmer"] = 1;

     WFRP4E.speciesExtra["dunmer"] = 3;

     WFRP4E.speciesMovement["dunmer"] = 4;

     WFRP4E.speciesAge.dunmer = "2d4 + 45"

     WFRP4E.speciesHeight.dunmer = {
        feet : 5,
        inches : 5,
        die : "1d10"
    }


    //DUNMER SUBSPECIES

    config.subspecies["dunmer"]["house_dunmer"] = {
    name: "House Dunmer",
    skills: [
        "Destruction",
        "Melee (Basic)",
        "Haggle",
        "Consume Alcohol",
        "Athletics",
        "Lore (Morrowind)",
        "Lore (Politics)",
        "Outdoor Survival",
        "Stealth (Urban)",
        "Perecption",
        "Dodge",
        "Navigation"
    ],
    talents: [
        "Resistance (Fire)",
        "Warrior Born, Coolheaded, Suave, Very Resilient",
        "Argumentative, Impassioned Zeal",
        2
    ]
 }
    config.subspecies["dunmer"]["ashlander"] = {
    name: "Ashlander",
    skills: [
        "Destruction",
        "Perecption",
        "Navigation",
        "Outdoor Survival",
        "Stealth (Rural)",
        "Lore (Morrowind)",
        "Melee (Basic)",
        "Ranged (Bow)",
        "Animal Care",
        "Track",
        "Dodge",
        "Consume Alcohol"
    ],
    talents: [
        "Hardy",
        "Rover, Very Resilient",
        "Warrior Born, Impassioned Zeal",
        2
    ]
}

    //---------------------//
    //Khajiit//
    //---------------------//
    WFRP4E.species["khajiit"] = "Khajiit"

    WFRP4E.speciesCharacteristics["khajiit"] = {
        "ws": "2d10+22",
        "bs": "2d10+28",
        "s": "2d10+22",
        "t": "2d10+22",
        "i": "2d10+28",
        "ag": "2d10+30",
        "dex": "2d10+28",
        "int": "2d10+25",
        "wp": "2d10+21",
        "fel": "2d10+24"
    }
    WFRP4E.speciesSkills ["khajiit"] = [
        "Stealth (Any)",
        "Sleight of Hand",
        "Melee (Brawling)",
        "Athletics",
        "Dodge",
        "Cool",
        "Gossip",
        "Haggle",
        "Gamble",
        "Intuition",
        "Lore (Elsweyr)",
        "Perception"
    ]
    WFRP4E.speciesTalents["khajiit"] = [
        "Night Vision",
        "Natural Weapons (Claws)",
        "Lightning Reflexes, Sprinter",
        2
    ]

    WFRP4E.speciesFate["khajiit"] = 2;

    WFRP4E.speciesRes["khajiit"] = 1;

    WFRP4E.speciesExtra["khajiit"] = 3;

    WFRP4E.speciesMovement["khajiit"] = 4;

    WFRP4E.speciesAge.khajiit = "2d4 + 15"

    WFRP4E.speciesHeight.khajiit = {
        feet : 5,
        inches : 5,
        die : "1d10"
    }


    //khajiit SUBSPECIES

    config.subspecies["khajiit"]["suthay_raht"] = {
    name: "Suthay-Raht",
    skills: [
        "Stealth (Any)",
        "Sleight of Hand",
        "Melee (Brawling)",
        "Athletics",
        "Dodge",
        "Cool",
        "Gossip",
        "Haggle",
        "Gamble",
        "Intuition",
        "Lore (Elsweyr)",
        "Perception"
    ],
    talents: [
        "Night Vision",
        "Natural Weapons (Claws)",
        "Lightning Reflexes, Sprinter",
        2
    ]
}
    config.subspecies["khajiit"]["alfiq"] = {
    name: "Alfiq",
    skills: [
        "Lore (Magic)",
        "Magic (Any)",
        "Athletics",
        "Dodge",
        "Cool",
        "Intuition",
        "Stealth (Any)",
        "Track",
        "Charm",
        "Climb",
        "Perform (Acrobatics)",
        "Gossip"               
    ],
    talents: [
        "Night Vision",
        "Catfall",
        "Animal Telepathy",
        "Size (Little)",
        "Stride"
    ]
}
    config.subspecies["khajiit"]["pahmar"] = {
    name: "Pahmar",
    skills: [
        "Melee (Two-Handed)",
        "Endurance",
        "Athletics",
        "Cool",
        "Outdoor Survival",
        "Intimidate",
        "Dodge",
        "Consume Alcohol",
        "Climb",
        "Intuition",
        "Navigation",
        "Leadership"
    ],
    talents: [
        "Very Strong",
        "Very Resilient",
        "Natural Weapons (Claws)",
        2
    ]
}

    //---------------------//
    //Bosmer//
    //---------------------//
    WFRP4E.species["bosmer"] = "Bosmer"

    WFRP4E.speciesCharacteristics["bosmer"] = {
        "ws": "2d10+21",
        "bs": "2d10+32",
        "s": "2d10+21",
        "t": "2d10+21",
        "i": "2d10+26",
        "ag": "2d10+31",
        "dex": "2d10+26",
        "int": "2d10+25",
        "wp": "2d10+23",
        "fel": "2d10+24"
    }
    WFRP4E.speciesSkills ["bosmer"] = [
        "Stealth (Rural)",
        "Ranged (Bow)",
        "Charm Animal",
        "Athletics",
        "Dodge",
        "Cool",
        "Language (Wilds)",
        "Haggle",
        "Lore (Beast)",
        "Intuition",
        "Lore (Valenwood)",
        "Perception"
    ]
    WFRP4E.speciesTalents["bosmer"] = [
        "Marksman",
        "Beneath Notice",
        "Resistance (Poison)",
        2
    ]

    WFRP4E.speciesFate["bosmer"] = 2;

    WFRP4E.speciesRes["bosmer"] = 1;

    WFRP4E.speciesExtra["bosmer"] = 3;

    WFRP4E.speciesMovement["bosmer"] = 4;

    WFRP4E.speciesAge.bosmer = "2d4 + 45"

    WFRP4E.speciesHeight.bosmer = {
        feet : 5,
        inches : 0,
        die : "1d10"
    }


    //Bosmer SUBSPECIES

    config.subspecies["bosmer"]["bosmer_male"] = {
    name: "Bosmer Male",
    skills:[
        "Stealth (Rural)",
        "Ranged (Bow)",
        "Charm Animal",
        "Athletics",
        "Dodge",
        "Cool",
        "Language (Wilds)",
        "Haggle",
        "Lore (Beast)",
        "Intuition",
        "Lore (Valenwood)",
        "Perception"
    ],
    talents: [
        "Marksman",
        "Beneath Notice",
        "Resistance (Poison)",
        2
    ]
 }
    config.subspecies["bosmer"]["bosmer_female"] = {
    name: "Bosmer Female",
    skills: [
        "Stealth (Rural)",
        "Ranged (Bow)",
        "Charm",
        "Athletics",
        "Dodge",
        "Cool",
        "Language (Wilds)",
        "Lore (Beast)",
        "Lore (Valenwood)",
        "Perception",
        "Charm Animal",
        "Haggle"
    ],
    talents: [
        "Marksman",
        "Attractive",
        "Suave",
        "Resitance (Poison)",
        1
    ]
  }
    
    //---------------------//
    //Altmer//
    //---------------------//
    WFRP4E.species["altmer"] = "Altmer"

    WFRP4E.speciesCharacteristics["altmer"] = {
        "ws": "2d10+25",
        "bs": "2d10+23",
        "s": "2d10+20",
        "t": "2d10+23",
        "i": "2d10+25",
        "ag": "2d10+25",
        "dex": "2d10+24",
        "int": "2d10+30",
        "wp": "2d10+30",
        "fel": "2d10+25"
    }
    WFRP4E.speciesSkills ["altmer"] = [
        "Magic (Any)",
        "Melee (Basic)",
        "Lore (Magic)",
        "Sail",
        "Swim",
        "Navigation",
        "Perception",
        "Intuiton",
        "Lore (Summerset Isle)",
        "Evaluate",
        "Athletics",
        "Art (Any)"
    ]
    WFRP4E.speciesTalents["altmer"] = [
        "Coolheaded, Savvy",
        "Sixth Sense",
        "Petty Magic",
        2
    ]
     WFRP4E.speciesFate["altmer"] = 2;

     WFRP4E.speciesRes["altmer"] = 1;

     WFRP4E.speciesExtra["altmer"] = 3;

     WFRP4E.speciesMovement["altmer"] = 4;

     WFRP4E.speciesAge.altmer = "2d4 + 45"

     WFRP4E.speciesHeight.altmer = {
        feet : 6,
        inches : 4,
        die : "1d10"
    }


    //Altmer SUBSPECIES

    config.subspecies["altmer"]["Altmer"] = {
    name: "Altmer",
    skills: [
        "Magic (Any)",
        "Melee (Basic)",
        "Lore (Magic)",
        "Sail",
        "Swim",
        "Navigation",
        "Perception",
        "Intuiton",
        "Lore (Summerset Isle)",
        "Evaluate",
        "Athletics",
        "Art (Any)"
    ],
    talents: [
        "Coolheaded, Savvy",
        "Sixth Sense",
        "Petty Magic",
        2
    ]
 }
    config.subspecies["altmer"]["altmer_pureblood"] = {
    name: "Altmer Pureblood",
    skills: [
        "Magic (Any)",
        "Melee (Basic)",
        "Lore (Magic)",
        "Sail",
        "Swim",
        "Navigation",
        "Perception",
        "Intuiton",
        "Lore (Summerset Isle)",
        "Evaluate",
        "Athletics",
        "Lore (Poltics)"
    ],
    talents: [
        "Coolheaded",
        "Savvy",
        "Petty Magic",
        "Sixth Sense",
        "Warrior Born"
    ]
  }

    //---------------------//
    //Argonian//
    //---------------------//
    WFRP4E.species["argonian"] = "Argonian"

    WFRP4E.speciesCharacteristics["argonian"] = {
        "ws": "2d10+25",
        "bs": "2d10+28",
        "s": "2d10+25",
        "t": "2d10+24",
        "i": "2d10+25",
        "ag": "2d10+28",
        "dex": "2d10+25",
        "int": "2d10+25",
        "wp": "2d10+24",
        "fel": "2d10+21"
    }
    WFRP4E.speciesSkills ["argonian"] = [
        "Swim",
        "Melee (Basic)",
        "Athletics",
        "Navigation",
        "Perception",
        "Track",
        "Lore (Black Marsh)",
        "Endurance",
        "Outdoor Survival",
        "Stealth (Rural)",
        "Ranged (Throwing)",
        "Dodge"
    ]
    WFRP4E.speciesTalents["argonian"] = [
        "Amphibious",
        "Resistance (Poison)",
        "Strider (Swamp)",
        "Lightning Reflexes, Rover"
    ]
     WFRP4E.speciesFate["argonian"] = 2;

     WFRP4E.speciesRes["argonian"] = 1;

     WFRP4E.speciesExtra["argonian"] = 3;

     WFRP4E.speciesMovement["argonian"] = 4;

     WFRP4E.speciesAge.argonian = "2d4 + 20"

     WFRP4E.speciesHeight.argonian = {
        feet : 5,
        inches : 7,
        die : "1d10"
    }
    
    mergeObject(game.wfrp4e.config, config) //DO NOT TOUCH
  
});