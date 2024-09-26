const DAMAGE_TYPES = [
    {
        name: "Acid",
        description: "",
        image: "acid_type.png",
        unlock: [
            "Spell/Passive that adds Acid Damage"
        ],
        stats: [
            {
                name: "Acid Damage",
                base: 1,
                boost: 1
            }
        ],
        connectTo: []
    },
    {
        name: "Desolate",
        description: "",
        image: "desolate_type.png",
        unlock: [
            "Weapon/Spell/Passive that adds Desolate Damage"
        ],
        stats: [
            {
                name: "Armor Desolation",
                base: 1,
                boost: 0.5
            }
        ],
        connectTo: []
    },
    {
        name: "Fire",
        description: "",
        image: "fire_type.png",
        unlock: [
            "Weapon/Spell/Passive that adds Fire Damage"
        ],
        stats: [
            {
                name: "Fire Damage",
                base: 1,
                boost: 1
            }
        ],
        connectTo: []
    },
    {
        name: "Lightning",
        description: "",
        image: "lightning_type.png",
        unlock: [
            "Weapon/Spell/Dash/Passive that adds Lightning Strike"
        ],
        stats: [
            {
                name: "Lightning Damage",
                base: 150,
                boost: 75
            },
            {
                name: "Lightning Radius",
                base: 25,
                boost: 15
            },
            {
                name: "Lightning Knockback",
                base: 5,
                boost: 1
            }
        ],
        connectTo: []
    }
];

const HEROES = [
    {
        name: "Student",
        description: "Greenhorn adventurer. Who knows how this one ends up.",
        image: "student.png",
        unlock: [
            "Starting class"
        ],
        stats: [
            {
                name: "Health",
                base: 100,
                boost: 20
            },
            {
                name: "Armor",
                base: 3,
                boost: 3
            },
            {
                name: "Regeneration",
                base: 2,
                boost: 4
            },
            {
                name: "iframes",
                base: 0.3,
                boost: 0
            },
            {
                name: "Speed",
                base: 40,
                boost: 6
            },
            {
                name: "Size",
                base: 1,
                boost: 0.1
            }
        ],
        connectTo: [
            "Elementalist",
            "Rogue",
            "Warrior",
            "Wizard",
            "Horse Armor",
            "Vampiress"
        ]
    },
    {
        name: "Elementalist",
        description: "Slightly improve your defenses and significantly increase the power of your elemental properties.",
        image: "elementalist.png",
        unlock: [
            "Student"
        ],
        stats: [
            {
                name: "Health",
                base: 100,
                boost: 20
            },
            {
                name: "Armor",
                base: 4,
                boost: 8
            },
            {
                name: "Regeneration",
                base: 4,
                boost: 8
            },
            {
                name: "iframes",
                base: 0.3,
                boost: 0
            },
            {
                name: "Speed",
                base: 40,
                boost: 6
            },
            {
                name: "Size",
                base: 1,
                boost: 0.1
            }
        ],
        connectTo: [
            "Elemental Master"
        ]
    },
    {
        name: "Rogue",
        description: "Become small, gain additional iframes, and attack quicker.",
        image: "rogue.png",
        unlock: [
            "Student"
        ],
        stats: [
            {
                name: "Health",
                base: 100,
                boost: 20
            },
            {
                name: "Armor",
                base: 3,
                boost: 3
            },
            {
                name: "Regeneration",
                base: 2,
                boost: 4
            },
            {
                name: "iframes",
                base: 0.5,
                boost: 0
            },
            {
                name: "Speed",
                base: 50,
                boost: 10
            },
            {
                name: "Size",
                base: 0.8,
                boost: 0.1
            }
        ],
        connectTo: [
            "Assassin"
        ]
    },
    {
        name: "Warrior",
        description: "Increases base stats and damage.",
        image: "warrior.png",
        unlock: [
            "Student"
        ],
        stats: [
            {
                name: "Health",
                base: 100,
                boost: 30
            },
            {
                name: "Armor",
                base: 9,
                boost: 3
            },
            {
                name: "Regeneration",
                base: 2,
                boost: 4
            },
            {
                name: "iframes",
                base: 0.3,
                boost: 0
            },
            {
                name: "Speed",
                base: 40,
                boost: 6
            },
            {
                name: "Size",
                base: 1,
                boost: 0.1
            }
        ],
        connectTo: [
            "Berserk",
            "Paladin"
        ]
    },
    {
        name: "Wizard",
        description: "Increases spell damage scaling.",
        image: "wizard.png",
        unlock: [
            "Student"
        ],
        stats: [
            {
                name: "Health",
                base: 100,
                boost: 20
            },
            {
                name: "Armor",
                base: 3,
                boost: 3
            },
            {
                name: "Regeneration",
                base: 2,
                boost: 4
            },
            {
                name: "iframes",
                base: 0.3,
                boost: 0
            },
            {
                name: "Speed",
                base: 40,
                boost: 6
            },
            {
                name: "Size",
                base: 1,
                boost: 0.1
            }
        ],
        connectTo: [
            "Disco Wizard"
        ]
    },
    {
        name: "Elemental Master",
        description: "Hugely increases the power of your elemental properties.",
        image: "elemental_master.png",
        unlock: [
            "Elementalist"
        ],
        stats: [
            {
                name: "Health",
                base: 100,
                boost: 20
            },
            {
                name: "Armor",
                base: 4,
                boost: 8
            },
            {
                name: "Regeneration",
                base: 3,
                boost: 6
            },
            {
                name: "iframes",
                base: 0.3,
                boost: 0
            },
            {
                name: "Speed",
                base: 40,
                boost: 6
            },
            {
                name: "Size",
                base: 1,
                boost: 0.1
            }
        ],
        connectTo: []
    },
    {
        name: "Assassin",
        description: "Become even smaller and attack incredibly quickly.",
        image: "assassin.png",
        unlock: [
            "Rogue"
        ],
        stats: [
            {
                name: "Health",
                base: 100,
                boost: 20
            },
            {
                name: "Armor",
                base: 3,
                boost: 3
            },
            {
                name: "Regeneration",
                base: 2,
                boost: 4
            },
            {
                name: "iframes",
                base: 0.5,
                boost: 0
            },
            {
                name: "Speed",
                base: 60,
                boost: 20
            },
            {
                name: "Size",
                base: 0.6,
                boost: 0.1
            }
        ],
        connectTo: []
    },
    {
        name: "Berserk",
        description: "Gain huge attack damage and attack speed, but lose armor and health regen upgrades.",
        image: "berserk.png",
        unlock: [
            "Warrior"
        ],
        stats: [
            {
                name: "Health",
                base: 100,
                boost: 60
            },
            {
                name: "iframes",
                base: 0.3,
                boost: 0
            },
            {
                name: "Speed",
                base: 50,
                boost: 9
            },
            {
                name: "Size",
                base: 1,
                boost: 0.1
            }
        ],
        connectTo: []
    },
    {
        name: "Paladin",
        description: "Powerful in every way, most notably in his defense. Lose movement speed upgrades.",
        image: "paladin.png",
        unlock: [
            "Warrior"
        ],
        stats: [
            {
                name: "Health",
                base: 200,
                boost: 40
            },
            {
                name: "Armor",
                base: 18,
                boost: 6
            },
            {
                name: "Regeneration",
                base: 4,
                boost: 8
            },
            {
                name: "iframes",
                base: 0.3,
                boost: 0
            },
            {
                name: "Speed",
                base: 32,
                boost: 0
            },
            {
                name: "Size",
                base: 1,
                boost: 0.1
            }
        ],
        connectTo: []
    },
    {
        name: "Disco Wizard",
        description: "Terrible at using weapons, but a master of spell damage scaling.",
        image: "disco_wizard.png",
        unlock: [
            "Wizard",
            "Dash Distance > 98"
        ],
        stats: [
            {
                name: "Health",
                base: 100,
                boost: 20
            },
            {
                name: "Armor",
                base: 3,
                boost: 3
            },
            {
                name: "Regeneration",
                base: 2,
                boost: 4
            },
            {
                name: "iframes",
                base: 0.3,
                boost: 0
            },
            {
                name: "Speed",
                base: 40,
                boost: 6
            },
            {
                name: "Ego",
                base: 1,
                boost: 0.2
            }
        ],
        connectTo: []
    },
    {
        name: "Horse Armor",
        description: "Double all of your hero's body stat scaling. Works retroactively.",
        image: "horse_armor.png",
        unlock: [
            "Student",
            "Hero Size > 1.3"
        ],
        stats: [
            {
                name: "Health",
                base: 100,
                boost: 20
            },
            {
                name: "Armor",
                base: 3,
                boost: 3
            },
            {
                name: "Regeneration",
                base: 2,
                boost: 4
            },
            {
                name: "iframes",
                base: 0.3,
                boost: 0
            },
            {
                name: "Speed",
                base: 40,
                boost: 6
            },
            {
                name: "Size",
                base: 1,
                boost: 0.1
            }
        ],
        connectTo: []
    },
    {
        name: "Vampiress",
        description: "Gain enormous lifesteal and powerful upgrade paths, but constantly lose health.",
        image: "vampiress.png",
        unlock: [
            "Student",
            "Life Steal > 0"
        ],
        stats: [
            {
                name: "Health",
                base: 100,
                boost: 20
            },
            {
                name: "Armor",
                base: 3,
                boost: 3
            },
            {
                name: "Regeneration",
                base: -10,
                boost: 0
            },
            {
                name: "iframes",
                base: 0.3,
                boost: 0
            },
            {
                name: "Lifesteal",
                base: "20%",
                boost: "5%"
            },
            {
                name: "Speed",
                base: 40,
                boost: 6
            },
            {
                name: "Size",
                base: 1,
                boost: 0.2
            }
        ],
        connectTo: [
            "Elder Vampire"
        ]
    },
    {
        name: "Elder Vampire",
        description: "Attack faster, deal more damage, get more powerful spells. Gain incredible lifesteal, but also rapidly drain hp.",
        image: "elder_vampire.png",
        unlock: [
            "Vampiress"
        ],
        stats: [
            {
                name: "Health",
                base: 100,
                boost: 20
            },
            {
                name: "Armor",
                base: 3,
                boost: 3
            },
            {
                name: "Regeneration",
                base: -100,
                boost: 0
            },
            {
                name: "iframes",
                base: 0.3,
                boost: 0
            },
            {
                name: "Lifesteal",
                base: "100%",
                boost: "10%"
            },
            {
                name: "Speed",
                base: 40,
                boost: 6
            },
            {
                name: "Size",
                base: 2,
                boost: 0
            }
        ],
        connectTo: []
    }
];

const WEAPONS = [
    {
        name: "Sword",
        description: "Every hero needs a sword.",
        image: "sword.png",
        unlock: [
            "Starting weapon"
        ],
        stats: [
            {
                name: "Damage",
                base: 100,
                boost: 20
            },
            {
                name: "Attack Speed",
                base: 80,
                boost: 8
            },
            {
                name: "Knockback",
                base: 2.5,
                boost: 0.25
            },
            {
                name: "Range",
                base: 50,
                boost: 5
            },
            {
                name: "Width",
                base: 20,
                boost: 1
            }
        ],
        connectTo: [
            "Flaming Sword",
            "Hollow Blade",
            "True Sword"
        ]
    },
    {
        name: "Axe",
        description: "High Damage, slow attack speed. Hits in an arc.",
        image: "axe.png",
        unlock: [
            "Starting weapon"
        ],
        stats: [
            {
                name: "Damage",
                base: 120,
                boost: 40
            },
            {
                name: "Attack Speed",
                base: 50,
                boost: 5
            },
            {
                name: "Knockback",
                base: 5,
                boost: 3
            },
            {
                name: "Range",
                base: 70,
                boost: 5
            },
            {
                name: "Width",
                base: 80,
                boost: 8
            }
        ],
        connectTo: [
            "Blood Reaver",
            "Grand Axe",
            "Spinter's Scythe"
        ]
    },
    {
        name: "Spear",
        description: "Long attack Range, fast hits.",
        image: "spear.png",
        unlock: [
            "Starting weapon"
        ],
        stats: [
            {
                name: "Damage",
                base: 50,
                boost: 16
            },
            {
                name: "Attack Speed",
                base: 120,
                boost: 12
            },
            {
                name: "Knockback",
                base: 1.25,
                boost: 1
            },
            {
                name: "Range",
                base: 75,
                boost: 7.5
            },
            {
                name: "Width",
                base: 5,
                boost: 0.5
            }
        ],
        connectTo: [
            "Shovel",
            "The Viper",
            "Wind Spear"
        ]
    },
    {
        name: "Dagger",
        description: "Fast strikes, small strikes, low Damage.",
        image: "dagger.png",
        unlock: [
            "Starting weapon"
        ],
        stats: [
            {
                name: "Damage",
                base: 50,
                boost: 10
            },
            {
                name: "Attack Speed",
                base: 120,
                boost: 16
            },
            {
                name: "Knockback",
                base: 0,
                boost: 0.25
            },
            {
                name: "Range",
                base: 40,
                boost: 3
            },
            {
                name: "Width",
                base: 8,
                boost: 0
            }
        ],
        connectTo: [
            "Blink Dagger",
            "Desolate Dagger",
            "Mrs. Stabby"
        ]
    },
    {
        name: "Katar",
        description: "Extremely low Damage, but extremely high attack speed. Can't change it's size.",
        image: "katar.png",
        unlock: [
            "Starting weapon"
        ],
        stats: [
            {
                name: "Damage",
                base: 6,
                boost: 8
            },
            {
                name: "Attack Speed",
                base: 100,
                boost: 50
            },
            {
                name: "Knockback",
                base: 0,
                boost: 0.25
            },
            {
                name: "Range",
                base: 40,
                boost: 0
            },
            {
                name: "Width",
                base: 20,
                boost: 0
            },
            {
                name: "Recoil",
                base: 0,
                boost: 0.25
            }
        ],
        connectTo: [
            "Claw",
            "Blood Seeker",
            "Twin Katar"
        ]
    },
    {
        name: "Staff",
        description: "High Knockback. Otherwise, trash.",
        image: "staff.png",
        unlock: [
            "Starting weapon"
        ],
        stats: [
            {
                name: "Damage",
                base: 25,
                boost: 16
            },
            {
                name: "Attack Speed",
                base: 50,
                boost: 10
            },
            {
                name: "Knockback",
                base: 5,
                boost: 5
            },
            {
                name: "Range",
                base: 75,
                boost: 0
            },
            {
                name: "Width",
                base: 3,
                boost: 0
            }
        ],
        connectTo: [
            "Druid Staff",
            "Stunning Staff",
            "Disco Stick"
        ]
    },
    {
        name: "Hammer",
        description: "Attacks in a radial in front of you.",
        image: "hammer.png",
        unlock: [
            "Starting weapon"
        ],
        stats: [
            {
                name: "Damage",
                base: 60,
                boost: 30
            },
            {
                name: "Attack Speed",
                base: 70,
                boost: 4
            },
            {
                name: "Knockback",
                base: 4,
                boost: 2
            },
            {
                name: "Range",
                base: 70,
                boost: 5
            },
            {
                name: "Width",
                base: 70,
                boost: 5
            }
        ],
        connectTo: [
            "Flail",
            "Skull Club",
            "Thor's Hammer"
        ]
    },
    {
        name: "Unarmed",
        description: "Fighting without a weapon? I hope you are good at magic.",
        image: "unarmed.png",
        unlock: [
            "Starting weapon"
        ],
        stats: [
            {
                name: "Damage",
                base: 1,
                boost: 1
            },
            {
                name: "Attack Speed",
                base: 50,
                boost: 0
            },
            {
                name: "Knockback",
                base: 0.5,
                boost: 0.5
            },
            {
                name: "Range",
                base: 30,
                boost: 0
            },
            {
                name: "Width",
                base: 10,
                boost: 0
            },
            {
                name: "Recoil",
                base: 0.5,
                boost: 0.5
            }
        ],
        connectTo: []
    },
    {
        name: "Flaming Sword",
        description: "The blacksmith left the sword to cool, only to find it had melted his anvil. Deals fire damage.",
        image: "flaming_sword.png",
        unlock: [
            "Sword"
        ],
        stats: [
            {
                name: "Damage",
                base: 100,
                boost: 20
            },
            {
                name: "Attack Speed",
                base: 80,
                boost: 8
            },
            {
                name: "Knockback",
                base: 2.5,
                boost: 0.25
            },
            {
                name: "Range",
                base: 50,
                boost: 5
            },
            {
                name: "Width",
                base: 40,
                boost: 3
            }
        ],
        connectTo: []
    },
    {
        name: "Hollow Blade",
        description: "Enemies killed may leave their soul behind. Pick it up to gain permanent bonus damage.",
        image: "hollow_blade.png",
        unlock: [
            "Sword"
        ],
        stats: [
            {
                name: "Damage",
                base: 100,
                boost: 20
            },
            {
                name: "Attack Speed",
                base: 80,
                boost: 8
            },
            {
                name: "Knockback",
                base: 2.5,
                boost: 0.25
            },
            {
                name: "Range",
                base: 50,
                boost: 5
            },
            {
                name: "Width",
                base: 20,
                boost: 1
            },
            {
                name: "Soul Chance",
                base: "25%",
                boost: "5%"
            }
        ],
        connectTo: []
    },
    {
        name: "True Sword",
        description: "Unlocks hidden potential. All future and previous boosts to the sword are doubled.",
        image: "true_sword.png",
        unlock: [
            "Sword",
            "Delete all Spell and Dash upgrades"
        ],
        stats: [
            {
                name: "Damage",
                base: 100,
                boost: 20
            },
            {
                name: "Attack Speed",
                base: 80,
                boost: 8
            },
            {
                name: "Knockback",
                base: 2.5,
                boost: 0.25
            },
            {
                name: "Range",
                base: 50,
                boost: 5
            },
            {
                name: "Width",
                base: 20,
                boost: 1
            }
        ],
        connectTo: []
    },
    {
        name: "Blood Reaver",
        description: "Kills have a chance to spawn a Bloob Blob that attacks enemies.",
        image: "blood_reaver.png",
        unlock: [
            "Axe"
        ],
        stats: [
            {
                name: "Damage",
                base: 120,
                boost: 40
            },
            {
                name: "Attack Speed",
                base: 50,
                boost: 5
            },
            {
                name: "Knockback",
                base: 5,
                boost: 5
            },
            {
                name: "Range",
                base: 80,
                boost: 6
            },
            {
                name: "Width",
                base: 100,
                boost: 10
            },
            {
                name: "Blob Power",
                base: "100%",
                boost: "50%"
            },
            {
                name: "Blob Chance",
                base: "10%",
                boost: "5%"
            }
        ],
        connectTo: []
    },
    {
        name: "Grand Axe",
        description: "Wider attacks and grander damage but with stagnation to attack speed.",
        image: "grand_axe.png",
        unlock: [
            "Axe"
        ],
        stats: [
            {
                name: "Damage",
                base: 120,
                boost: 50
            },
            {
                name: "Attack Speed",
                base: 50,
                boost: 0
            },
            {
                name: "Knockback",
                base: 5,
                boost: 5
            },
            {
                name: "Range",
                base: 90,
                boost: 15
            },
            {
                name: "Width",
                base: 110,
                boost: 10
            }
        ],
        connectTo: []
    },
    {
        name: "Spinter's Scythe",
        description: "Your attacks become segmented, giving your knockback a steep angle.",
        image: "spinters_scythe.png",
        unlock: [
            "Axe",
            "Weapon Width > 112"
        ],
        stats: [
            {
                name: "Damage",
                base: 120,
                boost: 40
            },
            {
                name: "Attack Speed",
                base: 50,
                boost: 5
            },
            {
                name: "Knockback",
                base: 5,
                boost: 5
            },
            {
                name: "Range",
                base: 70,
                boost: 10
            },
            {
                name: "Width",
                base: 80,
                boost: 40
            },
            {
                name: "Segments",
                base: 6,
                boost: 2
            }
        ],
        connectTo: []
    },
    {
        name: "Shovel",
        description: "Standing still for has a chance to dig up an extra pickup.",
        image: "shovel.png",
        unlock: [
            "Spear"
        ],
        stats: [
            {
                name: "Damage",
                base: 50,
                boost: 16
            },
            {
                name: "Attack Speed",
                base: 120,
                boost: 12
            },
            {
                name: "Knockback",
                base: 1.25,
                boost: 1
            },
            {
                name: "Range",
                base: 75,
                boost: 7.5
            },
            {
                name: "Width",
                base: 5,
                boost: 0.5
            },
            {
                name: "Max Digs",
                base: 3,
                boost: 1
            },
            {
                name: "Dig Time",
                base: 5,
                boost: 0.5
            },
            {
                name: "Dig Change",
                base: "20%",
                boost: "10%"
            }
        ],
        connectTo: []
    },
    {
        name: "The Viper",
        description: "Attacks snake beyond your attack range, causing collateral damage.",
        image: "the_viper.png",
        unlock: [
            "Spear",
            "Weapond Width > 5"
        ],
        stats: [
            {
                name: "Damage",
                base: 50,
                boost: 16
            },
            {
                name: "Attack Speed",
                base: 120,
                boost: 12
            },
            {
                name: "Knockback",
                base: 1.25,
                boost: 1
            },
            {
                name: "Range",
                base: 75,
                boost: 7.5
            },
            {
                name: "Width",
                base: 4,
                boost: 0.5
            },
            {
                name: "Segments",
                base: 2,
                boost: 1
            }
        ],
        connectTo: []
    },
    {
        name: "Wind Spear",
        description: "A channel of wind cuts not only through enemies, but also their projectiles.",
        image: "wind_spear.png",
        unlock: [
            "Spear"
        ],
        stats: [
            {
                name: "Damage",
                base: 50,
                boost: 16
            },
            {
                name: "Attack Speed",
                base: 120,
                boost: 12
            },
            {
                name: "Knockback",
                base: 3,
                boost: 2
            },
            {
                name: "Range",
                base: 75,
                boost: 8
            },
            {
                name: "Width",
                base: 5,
                boost: 0
            }
        ],
        connectTo: []
    },
    {
        name: "Blink Dagger",
        description: "Has chance to cast dash on attack.",
        image: "blink_dagger.png",
        unlock: [
            "Dagger",
            "Hero Size < 0.8"
        ],
        stats: [
            {
                name: "Damage",
                base: 50,
                boost: 10
            },
            {
                name: "Attack Speed",
                base: 120,
                boost: 16
            },
            {
                name: "Knockback",
                base: 0,
                boost: 0.25
            },
            {
                name: "Range",
                base: 40,
                boost: 3
            },
            {
                name: "Width",
                base: 8,
                boost: 0
            },
            {
                name: "Blink Chance",
                base: "20%",
                boost: "10%"
            }
        ],
        connectTo: []
    },
    {
        name: "Desolate Dagger",
        description: "Tears asunder enemy armor with each hit.",
        image: "desolate_dagger.png",
        unlock: [
            "Dagger"
        ],
        stats: [
            {
                name: "Damage",
                base: 50,
                boost: 10
            },
            {
                name: "Attack Speed",
                base: 160,
                boost: 24
            },
            {
                name: "Knockback",
                base: 0,
                boost: 0.25
            },
            {
                name: "Range",
                base: 40,
                boost: 3
            },
            {
                name: "Width",
                base: 8,
                boost: 0
            },
            {
                name: "Bonus Damage",
                base: 1,
                boost: 1
            },
            {
                name: "Modifier Stack",
                base: 1,
                boost: 0
            },
            {
                name: "Modifier Duration",
                base: "120s",
                boost: 0
            }
        ],
        connectTo: []
    },
    {
        name: "Mrs. Stabby",
        description: "Has infinite attack range but targets random enemies.",
        image: "mrs_stabby.png",
        unlock: [
            "Dagger"
        ],
        stats: [
            {
                name: "Damage",
                base: 60,
                boost: 12
            },
            {
                name: "Attack Speed",
                base: 140,
                boost: 18
            },
            {
                name: "Knockback",
                base: 0,
                boost: 0.25
            },
            {
                name: "Range",
                base: 40000,
                boost: 0
            },
            {
                name: "Width",
                base: 1,
                boost: 0
            }
        ],
        connectTo: []
    },
    {
        name: "Claw",
        description: "Has unique claw like attack pattern.",
        image: "claw.png",
        unlock: [
            "Katar"
        ],
        stats: [
            {
                name: "Damage",
                base: 6,
                boost: 8
            },
            {
                name: "Attack Speed",
                base: 100,
                boost: 50
            },
            {
                name: "Knockback",
                base: 0,
                boost: 0.25
            },
            {
                name: "Range",
                base: 55,
                boost: 0
            },
            {
                name: "Width",
                base: 10,
                boost: 0
            },
            {
                name: "Recoil",
                base: 0,
                boost: 0.25
            }
        ],
        connectTo: [
            "The Cerberus"
        ]
    },
    {
        name: "Blood Seeker",
        description: "The smell of carnage grants immense strength, but makes you lose reason.",
        image: "blood_seeker.png",
        unlock: [
            "Katar",
            "Weapon Recoil < -0.25"
        ],
        stats: [
            {
                name: "Damage",
                base: 6,
                boost: 40
            },
            {
                name: "Attack Speed",
                base: 100,
                boost: 75
            },
            {
                name: "Knockback",
                base: 5,
                boost: 1
            },
            {
                name: "Range",
                base: 40,
                boost: 0
            },
            {
                name: "Width",
                base: 30,
                boost: 0
            },
            {
                name: "Recoil",
                base: -2,
                boost: 0
            }
        ],
        connectTo: []
    },
    {
        name: "Twin Katar",
        description: "Every attack counts twice.",
        image: "twin_katar.png",
        unlock: [
            "Katar"
        ],
        stats: [
            {
                name: "Damage",
                base: 6,
                boost: 8
            },
            {
                name: "Attack Speed",
                base: 100,
                boost: 50
            },
            {
                name: "Knockback",
                base: 0,
                boost: 0.25
            },
            {
                name: "Range",
                base: 40,
                boost: 0
            },
            {
                name: "Width",
                base: 20,
                boost: 0
            },
            {
                name: "Recoil",
                base: 0,
                boost: 0.25
            }
        ],
        connectTo: []
    },
    {
        name: "The Cerberus",
        description: "Attacks snake beyond your attack range, causing collateral damage.",
        image: "the_cerberus.png",
        unlock: [
            "Claw"
        ],
        stats: [
            {
                name: "Damage",
                base: 6,
                boost: 8
            },
            {
                name: "Attack Speed",
                base: 100,
                boost: 50
            },
            {
                name: "Knockback",
                base: 0,
                boost: 0.25
            },
            {
                name: "Range",
                base: 40,
                boost: 0
            },
            {
                name: "Width",
                base: 8,
                boost: 0
            },
            {
                name: "Recoil",
                base: 0,
                boost: 0.25
            },
            {
                name: "Segments",
                base: 1,
                boost: 1
            }
        ],
        connectTo: []
    },
    {
        name: "Druid Staff",
        description: "Your attacks have a chance to increase the 'count' of your next spell cast.",
        image: "druid_staff.png",
        unlock: [
            "Staff"
        ],
        stats: [
            {
                name: "Damage",
                base: 25,
                boost: 16
            },
            {
                name: "Attack Speed",
                base: 50,
                boost: 30
            },
            {
                name: "Knockback",
                base: 5,
                boost: 10
            },
            {
                name: "Range",
                base: 75,
                boost: 0
            },
            {
                name: "Width",
                base: 3,
                boost: 0
            },
            {
                name: "Count Chance",
                base: "30%",
                boost: "15%"
            }
        ],
        connectTo: []
    },
    {
        name: "Stunning Staff",
        description: "Adds stun modifier to your attacks.",
        image: "stunning_staff.png",
        unlock: [
            "Staff"
        ],
        stats: [
            {
                name: "Damage",
                base: 25,
                boost: 16
            },
            {
                name: "Attack Speed",
                base: 50,
                boost: 10
            },
            {
                name: "Knockback",
                base: 5,
                boost: 5
            },
            {
                name: "Range",
                base: 75,
                boost: 0
            },
            {
                name: "Width",
                base: 3,
                boost: 0
            },
            {
                name: "Stun Duration",
                base: "0.5s",
                boost: "0.25s"
            }
        ],
        connectTo: []
    },
    {
        name: "Disco Stick",
        description: "True weapon of Disco Wizard.",
        image: "disco_stick.png",
        unlock: [
            "Staff",
            "Weapon Attack Speed < 22"
        ],
        stats: [
            {
                name: "Damage",
                base: 25,
                boost: 60
            },
            {
                name: "Attack Speed",
                base: 50,
                boost: 10
            },
            {
                name: "Knockback",
                base: 5,
                boost: 5
            },
            {
                name: "Range",
                base: 750,
                boost: 0
            },
            {
                name: "Width",
                base: 3,
                boost: 0
            },
            {
                name: "Max Multi Hits",
                base: 10,
                boost: 1
            },
            {
                name: "Multi Hit Delay",
                base: "0.5s",
                boost: 0
            },
            {
                name: "Multi Hit Chance",
                base: "16%",
                boost: "8%"
            }
        ],
        connectTo: []
    },
    {
        name: "Flail",
        description: "Has a huge attack range.",
        image: "flail.png",
        unlock: [
            "Hammer",
            "Weapon Range > 85"
        ],
        stats: [
            {
                name: "Damage",
                base: 60,
                boost: 30
            },
            {
                name: "Attack Speed",
                base: 70,
                boost: 4
            },
            {
                name: "Knockback",
                base: 4,
                boost: 2
            },
            {
                name: "Range",
                base: 120,
                boost: 30
            },
            {
                name: "Width",
                base: 70,
                boost: 5
            }
        ],
        connectTo: []
    },
    {
        name: "Skull Club",
        description: "Killing enemies creates an explosion that deals damage based on the overkill damage.",
        image: "skull_club.png",
        unlock: [
            "Starting weapon"
        ],
        stats: [
            {
                name: "Damage",
                base: 60,
                boost: 30
            },
            {
                name: "Attack Speed",
                base: 70,
                boost: 4
            },
            {
                name: "Knockback",
                base: 4,
                boost: 2
            },
            {
                name: "Range",
                base: 70,
                boost: 5
            },
            {
                name: "Width",
                base: 70,
                boost: 5
            },
            {
                name: "Explosion Radius",
                base: 45,
                boost: 15
            },
            {
                name: "Explosion Damage",
                base: "20%",
                boost: "10%"
            }
        ],
        connectTo: []
    },
    {
        name: "Thor's Hammer",
        description: "Hitting an enemy in the eye of the storm strikes them with lightning.",
        image: "thors_hammer.png",
        unlock: [
            "Hammer"
        ],
        stats: [
            {
                name: "Damage",
                base: 60,
                boost: 30
            },
            {
                name: "Attack Speed",
                base: 50,
                boost: 4
            },
            {
                name: "Knockback",
                base: 4,
                boost: 2
            },
            {
                name: "Range",
                base: 70,
                boost: 5
            },
            {
                name: "Width",
                base: 70,
                boost: 5
            },
            {
                name: "Eye Radius",
                base: 60,
                boost: 0
            }
        ],
        connectTo: [
            "Bigger Thor's Hammer"
        ]
    },
    {
        name: "Bigger Thor's Hammer",
        description: "You can now make eye of the storm bigger.",
        image: "bigger_thors_hammer.png",
        unlock: [
            "Thor's Hammer"
        ],
        stats: [
            {
                name: "Damage",
                base: 60,
                boost: 30
            },
            {
                name: "Attack Speed",
                base: 50,
                boost: 4
            },
            {
                name: "Knockback",
                base: 4,
                boost: 2
            },
            {
                name: "Range",
                base: 70,
                boost: 5
            },
            {
                name: "Width",
                base: 70,
                boost: 5
            },
            {
                name: "Eye Radius",
                base: 90,
                boost: 15
            }
        ],
        connectTo: []
    }
];

const SPELLS = [
    {
        name: "Clear",
        description: "Blast enemies and projectiles away from you.",
        image: "clear.png",
        unlock: [
            "Starting spell"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "10s",
                boost: 0
            },
            {
                name: "Charges",
                base: 1,
                boost: 1
            },
            {
                name: "Cast Point",
                base: "0.4s",
                boost: 0
            },
            {
                name: "Damage",
                base: 25,
                boost: 75
            },
            {
                name: "Radius",
                base: 120,
                boost: 20
            },
            {
                name: "Knockback",
                base: 10,
                boost: 5
            },
            {
                name: "Count",
                base: 1,
                boost: 0
            }
        ],
        connectTo: [
            "Cascade",
            "Vortex Armor"
        ]
    },
    {
        name: "Lightning Storm",
        description: "Summon random lightning strikes everywhere on the level.",
        image: "lightning_storm.png",
        unlock: [
            "Starting spell"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "12s",
                boost: 0
            },
            {
                name: "Charges",
                base: 1,
                boost: 1
            },
            {
                name: "Cast Point",
                base: "0.2s",
                boost: 0
            },
            {
                name: "Count",
                base: 10,
                boost: 3
            }
        ],
        connectTo: [
            "Directed Lightning",
            "Lightning Mastery"
        ]
    },
    {
        name: "Magic Missile",
        description: "Simple projectile that simply deals Damage.",
        image: "magic_missile.png",
        unlock: [
            "Starting spell"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "6s",
                boost: 0
            },
            {
                name: "Charges",
                base: 2,
                boost: 2
            },
            {
                name: "Cast Point",
                base: "0.1s",
                boost: 0
            },
            {
                name: "Distance",
                base: 300,
                boost: 50
            },
            {
                name: "Speed",
                base: 200,
                boost: 25
            },
            {
                name: "Knockback",
                base: 2,
                boost: 1
            },
            {
                name: "Damage",
                base: 150,
                boost: 75
            },
            {
                name: "Projectile Count",
                base: 1,
                boost: 0
            },
            {
                name: "Size",
                base: 12,
                boost: 3
            }
        ],
        connectTo: [
            "Lightning Bolt",
            "Spirit Missile"
        ]
    },
    {
        name: "Acid Pools",
        description: "Summon pools of acid in front of you.",
        image: "acid_pools.png",
        unlock: [
            "Starting spell"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "8s",
                boost: 0
            },
            {
                name: "Charges",
                base: 1,
                boost: 1
            },
            {
                name: "Cast Point",
                base: "0.1s",
                boost: 0
            },
            {
                name: "Damage",
                base: 10,
                boost: 0
            },
            {
                name: "Radius",
                base: 25,
                boost: 5
            },
            {
                name: "Distance",
                base: 100,
                boost: 10
            },
            {
                name: "Count",
                base: 2,
                boost: 1
            },
            {
                name: "Duration",
                base: "4s",
                boost: "1s"
            },
            {
                name: "Tick Rate",
                base: "0.7s",
                boost: 0
            },
            {
                name: "Acid Stacks",
                base: 1,
                boost: 1
            },
            {
                name: "Modifier Duration",
                base: "5s",
                boost: 0
            }
        ],
        connectTo: [
            "Acid Moat",
            "Living Acid"
        ]
    },
    {
        name: "Rain",
        description: "Conjure a calm and comforting rain shower.",
        image: "rain.png",
        unlock: [
            "Starting spell"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "12s",
                boost: 0
            },
            {
                name: "Charges",
                base: 1,
                boost: 0
            },
            {
                name: "Cast Point",
                base: "0.2s",
                boost: 0
            },
            {
                name: "Damage",
                base: 4,
                boost: 4
            },
            {
                name: "Count",
                base: 1,
                boost: 0
            },
            {
                name: "Duration",
                base: "8s",
                boost: "1s"
            },
            {
                name: "Tick Rate",
                base: "1s",
                boost: 0
            }
        ],
        connectTo: [
            "Storm",
            "Sudden Death"
        ]
    },
    {
        name: "Fire Wall",
        description: "Summon a moving wall of flame that burns enemies.",
        image: "fire_wall.png",
        unlock: [
            "Starting spell"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "10s",
                boost: 0
            },
            {
                name: "Charges",
                base: 1,
                boost: 1
            },
            {
                name: "Cast Point",
                base: "0.1s",
                boost: 0
            },
            {
                name: "Distance",
                base: 600,
                boost: 100
            },
            {
                name: "Speed",
                base: 100,
                boost: 0
            },
            {
                name: "Knockback",
                base: 1,
                boost: 0.5
            },
            {
                name: "Projectile Count",
                base: 9,
                boost: 3
            },
            {
                name: "Size",
                base: 10,
                boost: 5
            },
            {
                name: "Spread",
                base: 5,
                boost: 0
            },
            {
                name: "Pierce",
                base: 1,
                boost: 0
            },
            {
                name: "Speed Reduction",
                base: 40,
                boost: 0
            },
            {
                name: "Modifier Stack",
                base: 4,
                boost: 2
            }
        ],
        connectTo: [
            "Cursed Fire Wall",
            "Holy Fire Wall"
        ]
    },
    {
        name: "Summon Wiggy",
        description: "Summon Wiggy to attack your enemies.",
        image: "summon_wiggy.png",
        unlock: [
            "Starting spell"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "20s",
                boost: 0
            },
            {
                name: "Charges",
                base: 1,
                boost: 1
            },
            {
                name: "Cast Point",
                base: "0.2s",
                boost: 0
            },
            {
                name: "Count",
                base: 1,
                boost: 0
            },
            {
                name: "Duration",
                base: "60s",
                boost: "10s"
            },
            {
                name: "Damage",
                base: 100,
                boost: 50
            },
            {
                name: "Health",
                base: 100,
                boost: 100
            },
            {
                name: "Armor",
                base: 0,
                boost: 5
            },
            {
                name: "Health Regen",
                base: 10,
                boost: 0
            },
            {
                name: "Movement Speed",
                base: 40,
                boost: 10
            },
            {
                name: "Attack Speed",
                base: 50,
                boost: 10
            }
        ],
        connectTo: [
            "Bat",
            "Cyclops",
            "Fox Eye",
            "Giant Mouse",
            "Unstable Blob"
        ]
    },
    {
        name: "Talentless",
        description: "Bad at magic. All you can do is cast little wisp.",
        image: "talentless.png",
        unlock: [
            "Starting spell"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "6s",
                boost: 0
            },
            {
                name: "Charges",
                base: 1,
                boost: 1
            },
            {
                name: "Cast Point",
                base: "0.1s",
                boost: 0
            },
            {
                name: "Distance",
                base: 300,
                boost: 50
            },
            {
                name: "Speed",
                base: 50,
                boost: 0
            },
            {
                name: "Knockback",
                base: 1,
                boost: 2
            },
            {
                name: "Damage",
                base: 1,
                boost: 1
            },
            {
                name: "Projectile Count",
                base: 1,
                boost: 1
            },
            {
                name: "Size",
                base: 1,
                boost: 0
            },
            {
                name: "Spread",
                base: 25,
                boost: 0
            },
            {
                name: "Boomerang",
                base: 1,
                boost: 0
            }
        ],
        connectTo: []
    },
    {
        name: "Cascade",
        description: "Clear is cast again from where it hit an enemy.",
        image: "cascade.png",
        unlock: [
            "Clear"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "10s",
                boost: 0
            },
            {
                name: "Charges",
                base: 1,
                boost: 1
            },
            {
                name: "Cast Point",
                base: "0.4s",
                boost: 0
            },
            {
                name: "Damage",
                base: 25,
                boost: 75
            },
            {
                name: "Radius",
                base: 120,
                boost: 20
            },
            {
                name: "Knockback",
                base: 10,
                boost: 5
            },
            {
                name: "Count",
                base: 1,
                boost: 1
            },
            {
                name: "Cascade Damage %",
                base: 50,
                boost: 0
            },
            {
                name: "Cascade Radius %",
                base: 50,
                boost: 0
            }
        ],
        connectTo: [
            "Greater Cascade"
        ]
    },
    {
        name: "Vortex Armor",
        description: "Each foe hit grants temporary bonus armor.",
        image: "vortex_armor.png",
        unlock: [
            "Clear",
            "Spell Knockback < 1"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "10s",
                boost: 0
            },
            {
                name: "Charges",
                base: 1,
                boost: 1
            },
            {
                name: "Cast Point",
                base: "0.4s",
                boost: 0
            },
            {
                name: "Damage",
                base: 25,
                boost: 75
            },
            {
                name: "Radius",
                base: 120,
                boost: 20
            },
            {
                name: "Knockback",
                base: -5,
                boost: 5
            },
            {
                name: "Count",
                base: 1,
                boost: 0
            },
            {
                name: "Armor Bonus",
                base: 4,
                boost: 2
            },
            {
                name: "Armor Duration",
                base: "10s",
                boost: "5s"
            }
        ],
        connectTo: []
    },
    {
        name: "Greater Cascade",
        description: "Greater version of Cascade.",
        image: "greater_cascade.png",
        unlock: [
            "Cascade"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "10s",
                boost: 0
            },
            {
                name: "Charges",
                base: 1,
                boost: 1
            },
            {
                name: "Cast Point",
                base: "0.4s",
                boost: 0
            },
            {
                name: "Damage",
                base: 25,
                boost: 75
            },
            {
                name: "Radius",
                base: 120,
                boost: 20
            },
            {
                name: "Knockback",
                base: 10,
                boost: 5
            },
            {
                name: "Count",
                base: 1,
                boost: 1
            },
            {
                name: "Cascade Damage %",
                base: 50,
                boost: 5
            },
            {
                name: "Cascade Radius %",
                base: 50,
                boost: 5
            }
        ],
        connectTo: []
    },
    {
        name: "Directed Lightning",
        description: "Lightning storm is now cast in a cone infront of you.",
        image: "directed_lightning.png",
        unlock: [
            "Lightning Storm"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "12s",
                boost: 0
            },
            {
                name: "Charges",
                base: 1,
                boost: 1
            },
            {
                name: "Cast Point",
                base: "0.2s",
                boost: 0
            },
            {
                name: "Distance",
                base: 200,
                boost: 20
            },
            {
                name: "Count",
                base: 10,
                boost: 3
            }
        ],
        connectTo: []
    },
    {
        name: "Lightning Mastery",
        description: "Lightning strikes now target enemies.",
        image: "lightning_mastery.png",
        unlock: [
            "Lightning Storm",
            "Spell Count < 1"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "12s",
                boost: 0
            },
            {
                name: "Charges",
                base: 1,
                boost: 1
            },
            {
                name: "Cast Point",
                base: "0.2s",
                boost: 0
            },
            {
                name: "Count",
                base: 10,
                boost: 3
            }
        ],
        connectTo: []
    },
    {
        name: "Lightning Bolt",
        description: "Hitting an enemy with Magic Missile summons Lightning.",
        image: "lightning_bolt.png",
        unlock: [
            "Magic Missile"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "6s",
                boost: 0
            },
            {
                name: "Charges",
                base: 2,
                boost: 2
            },
            {
                name: "Cast Point",
                base: "0.1s",
                boost: 0
            },
            {
                name: "Distance",
                base: 300,
                boost: 50
            },
            {
                name: "Speed",
                base: 200,
                boost: 25
            },
            {
                name: "Knockback",
                base: 2,
                boost: 1
            },
            {
                name: "Damage",
                base: 300,
                boost: 100
            },
            {
                name: "Projectile Count",
                base: 1,
                boost: 0
            },
            {
                name: "Size",
                base: 12,
                boost: 3
            }
        ],
        connectTo: []
    },
    {
        name: "Spirit Missile",
        description: "Fire projectiles that curve towards the caster and have almost infinite travel distance.",
        image: "spirit_missile.png",
        unlock: [
            "Magic Missile",
            "Spell Speed > 275"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "6s",
                boost: 0
            },
            {
                name: "Charges",
                base: 2,
                boost: 2
            },
            {
                name: "Cast Point",
                base: "0.1s",
                boost: 0
            },
            {
                name: "Distance",
                base: 300000,
                boost: 0
            },
            {
                name: "Speed",
                base: 200,
                boost: 25
            },
            {
                name: "Knockback",
                base: 2,
                boost: 1
            },
            {
                name: "Damage",
                base: 150,
                boost: 75
            },
            {
                name: "Projectile Count",
                base: 1,
                boost: 0
            },
            {
                name: "Size",
                base: 12,
                boost: 3
            },
            {
                name: "Boomerang",
                base: 5,
                boost: 0
            }
        ],
        connectTo: []
    },
    {
        name: "Acid Moat",
        description: "Creates pools of acid around you.",
        image: "acid_moat.png",
        unlock: [
            "Acid Pools"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "8s",
                boost: 0
            },
            {
                name: "Charges",
                base: 1,
                boost: 1
            },
            {
                name: "Cast Point",
                base: "0.1s",
                boost: 0
            },
            {
                name: "Damage",
                base: 10,
                boost: 0
            },
            {
                name: "Radius",
                base: 25,
                boost: 5
            },
            {
                name: "Distance",
                base: 100,
                boost: 20
            },
            {
                name: "Count",
                base: 6,
                boost: 2
            },
            {
                name: "Duration",
                base: "4s",
                boost: "1s"
            },
            {
                name: "Tick Rate",
                base: "0.7s",
                boost: 0
            },
            {
                name: "Acid Stacks",
                base: 1,
                boost: 1
            },
            {
                name: "Modifier Duration",
                base: "5s",
                boost: 0
            }
        ],
        connectTo: []
    },
    {
        name: "Living Acid",
        description: "Acid pools start to wander around like they have a mind of their own.",
        image: "living_acid.png",
        unlock: [
            "Acid Pools",
            "Spell Distance < 80"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "8s",
                boost: 0
            },
            {
                name: "Charges",
                base: 1,
                boost: 1
            },
            {
                name: "Cast Point",
                base: "0.1s",
                boost: 0
            },
            {
                name: "Damage",
                base: 10,
                boost: 0
            },
            {
                name: "Radius",
                base: 25,
                boost: 5
            },
            {
                name: "Speed",
                base: 20,
                boost: 10
            },
            {
                name: "Count",
                base: 2,
                boost: 1
            },
            {
                name: "Duration",
                base: "8s",
                boost: "1s"
            },
            {
                name: "Tick Rate",
                base: "0.7s",
                boost: 0
            },
            {
                name: "Scatterbrined.",
                base: 10,
                boost: 0
            },
            {
                name: "Modifier Stacks",
                base: 1,
                boost: 1
            },
            {
                name: "Modifier Duration",
                base: "5s",
                boost: 0
            }
        ],
        connectTo: []
    },
    {
        name: "Storm",
        description: "Adds winds that push enemies to first five seconds of Rain.",
        image: "storm.png",
        unlock: [
            "Rain"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "12s",
                boost: 0
            },
            {
                name: "Charges",
                base: 1,
                boost: 0
            },
            {
                name: "Cast Point",
                base: "0.2s",
                boost: 0
            },
            {
                name: "Damage",
                base: 12,
                boost: 6
            },
            {
                name: "Wind Speed",
                base: 2,
                boost: 1
            },
            {
                name: "Count",
                base: 1,
                boost: 0
            },
            {
                name: "Duration",
                base: "8s",
                boost: "1s"
            },
            {
                name: "Tick Rate",
                base: "1s",
                boost: 0
            }
        ],
        connectTo: []
    },
    {
        name: "Sudden Death",
        description: "Deal massive amount of damage to all units on the map. Has very long cooldown.",
        image: "sudden_death.png",
        unlock: [
            "Rain",
            "Spell Duration < 4s"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "60s",
                boost: 0
            },
            {
                name: "Charges",
                base: 1,
                boost: 0
            },
            {
                name: "Cast Point",
                base: "0.2s",
                boost: 0
            },
            {
                name: "Damage",
                base: 100,
                boost: 100
            },
            {
                name: "Count",
                base: 1,
                boost: 0
            },
            {
                name: "Duration",
                base: "8s",
                boost: 0
            },
            {
                name: "Tick Rate",
                base: "0.2s",
                boost: 0
            }
        ],
        connectTo: []
    },
    {
        name: "Cursed Fire Wall",
        description: "Curse enemies that touch your Fire Wall with unending flames.",
        image: "cursed_fire_wall.png",
        unlock: [
            "Fire Wall",
            "Hero Speed < 31"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "10s",
                boost: 0
            },
            {
                name: "Charges",
                base: 1,
                boost: 1
            },
            {
                name: "Cast Point",
                base: "0.1s",
                boost: 0
            },
            {
                name: "Distance",
                base: 600,
                boost: 100
            },
            {
                name: "Speed",
                base: 100,
                boost: 0
            },
            {
                name: "Knockback",
                base: 1,
                boost: 0.5
            },
            {
                name: "Projectile Count",
                base: 9,
                boost: 3
            },
            {
                name: "Size",
                base: 10,
                boost: 5
            },
            {
                name: "Spread",
                base: 5,
                boost: 0
            },
            {
                name: "Pierce",
                base: 1,
                boost: 0
            },
            {
                name: "Speed Reduction",
                base: 40,
                boost: 0
            },
            {
                name: "Modifier Stack",
                base: 4,
                boost: 2
            }
        ],
        connectTo: [
            "Blasphemous Fire Wall"
        ]
    },
    {
        name: "Holy Fire Wall",
        description: "Bless your Fire Wall with the ability to absorb projectiles.",
        image: "holy_fire_wall.png",
        unlock: [
            "Fire Wall"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "10s",
                boost: 0
            },
            {
                name: "Charges",
                base: 1,
                boost: 1
            },
            {
                name: "Cast Point",
                base: "0.1s",
                boost: 0
            },
            {
                name: "Distance",
                base: 600,
                boost: 100
            },
            {
                name: "Speed",
                base: 100,
                boost: 0
            },
            {
                name: "Knockback",
                base: 1,
                boost: 0.5
            },
            {
                name: "Projectile Count",
                base: 9,
                boost: 3
            },
            {
                name: "Size",
                base: 10,
                boost: 5
            },
            {
                name: "Spread",
                base: 5,
                boost: 0
            },
            {
                name: "Pierce",
                base: 1,
                boost: 0
            },
            {
                name: "Speed Reduction",
                base: 40,
                boost: 0
            },
            {
                name: "Modifier Stack",
                base: 4,
                boost: 2
            }
        ],
        connectTo: [
            "Blasphemous Fire Wall"
        ]
    },
    {
        name: "Blasphemous Fire Wall",
        description: "Absorbs projectiles and curses enemies that touch it.",
        image: "blasphemous_fire_wall.png",
        unlock: [
            "Cursed Fire Wall or Holy Fire Wall",
            "Hero Speed < 31"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "10s",
                boost: 0
            },
            {
                name: "Charges",
                base: 1,
                boost: 1
            },
            {
                name: "Cast Point",
                base: "0.1s",
                boost: 0
            },
            {
                name: "Distance",
                base: 600,
                boost: 100
            },
            {
                name: "Speed",
                base: 100,
                boost: 0
            },
            {
                name: "Knockback",
                base: 1,
                boost: 0.5
            },
            {
                name: "Projectile Count",
                base: 9,
                boost: 3
            },
            {
                name: "Size",
                base: 10,
                boost: 5
            },
            {
                name: "Spread",
                base: 5,
                boost: 0
            },
            {
                name: "Pierce",
                base: 1,
                boost: 0
            },
            {
                name: "Speed Reduction",
                base: 40,
                boost: 0
            },
            {
                name: "Modifier Stack",
                base: 4,
                boost: 2
            }
        ],
        connectTo: []
    },
    {
        name: "Bat",
        description: "Wiggy grows wings and starts to fly while gaining increased stats.",
        image: "bat.png",
        unlock: [
            "Summon Wiggy"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "20s",
                boost: 0
            },
            {
                name: "Charges",
                base: 1,
                boost: 1
            },
            {
                name: "Cast Point",
                base: "0.2s",
                boost: 0
            },
            {
                name: "Count",
                base: 1,
                boost: 0
            },
            {
                name: "Duration",
                base: "60s",
                boost: "10s"
            },
            {
                name: "Damage",
                base: 120,
                boost: 60
            },
            {
                name: "Health",
                base: 120,
                boost: 120
            },
            {
                name: "Armor",
                base: 0,
                boost: 6
            },
            {
                name: "Health Regen",
                base: 12,
                boost: 0
            },
            {
                name: "Movement Speed",
                base: 48,
                boost: 12
            },
            {
                name: "Attack Speed",
                base: 60,
                boost: 12
            }
        ],
        connectTo: []
    },
    {
        name: "Cyclops",
        description: "Turn Wiggy into a powerful Cyclops with ranged attacks that deal damage in a line.",
        image: "cyclops.png",
        unlock: [
            "Summon Wiggy"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "20s",
                boost: 0
            },
            {
                name: "Charges",
                base: 1,
                boost: 1
            },
            {
                name: "Cast Point",
                base: "0.2s",
                boost: 0
            },
            {
                name: "Radius",
                base: 20,
                boost: 0
            },
            {
                name: "Distance",
                base: 100,
                boost: 10
            },
            {
                name: "Count",
                base: 1,
                boost: 0
            },
            {
                name: "Duration",
                base: "60s",
                boost: "10s"
            },
            {
                name: "Damage",
                base: 100,
                boost: 50
            },
            {
                name: "Health",
                base: 100,
                boost: 100
            },
            {
                name: "Armor",
                base: 0,
                boost: 5
            },
            {
                name: "Health Regen",
                base: 10,
                boost: 0
            },
            {
                name: "Movement Speed",
                base: 40,
                boost: 10
            },
            {
                name: "Attack Speed",
                base: 50,
                boost: 5
            }
        ],
        connectTo: []
    },
    {
        name: "Fox Eye",
        description: "Wiggy becomes an enchanted Fox Eye, firing magic missiles.",
        image: "fox_eye.png",
        unlock: [
            "Summon Wiggy"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "20s",
                boost: 0
            },
            {
                name: "Charges",
                base: 1,
                boost: 1
            },
            {
                name: "Cast Point",
                base: "0.2s",
                boost: 0
            },
            {
                name: "Distance",
                base: 300,
                boost: 30
            },
            {
                name: "Projectile Speed",
                base: 200,
                boost: 20
            },
            {
                name: "Knockback",
                base: 0.25,
                boost: 0.25
            },
            {
                name: "Count",
                base: 1,
                boost: 0
            },
            {
                name: "Duration",
                base: "60s",
                boost: "10s"
            },
            {
                name: "Damage",
                base: 100,
                boost: 50
            },
            {
                name: "Health",
                base: 100,
                boost: 100
            },
            {
                name: "Armor",
                base: 0,
                boost: 5
            },
            {
                name: "Health Regen",
                base: 10,
                boost: 0
            },
            {
                name: "Movement Speed",
                base: 40,
                boost: 10
            },
            {
                name: "Attack Speed",
                base: 50,
                boost: 10
            }
        ],
        connectTo: []
    },
    {
        name: "Giant Mouse",
        description: "Replace Wiggy with a Giant Mouse that is very powerful but can't increase in numbers.",
        image: "giant_mouse.png",
        unlock: [
            "Summon Wiggy"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "60s",
                boost: 0
            },
            {
                name: "Charges",
                base: 1,
                boost: 0
            },
            {
                name: "Knockback",
                base: 10,
                boost: 0
            },
            {
                name: "Cast Point",
                base: "0.2s",
                boost: 0
            },
            {
                name: "Count",
                base: 1,
                boost: 0
            },
            {
                name: "Duration",
                base: "60s",
                boost: "10s"
            },
            {
                name: "Damage",
                base: 200,
                boost: 100
            },
            {
                name: "Health",
                base: 200,
                boost: 200
            },
            {
                name: "Armor",
                base: 0,
                boost: 10
            },
            {
                name: "Health Regen",
                base: 20,
                boost: 0
            },
            {
                name: "Movement Speed",
                base: 40,
                boost: 20
            },
            {
                name: "Attack Speed",
                base: 100,
                boost: 20
            }
        ],
        connectTo: []
    },
    {
        name: "Unstable Blob",
        description: "Wiggy is compressed, turning into an Unstable Blop that deals damage in a radius.",
        image: "unstable_blob.png",
        unlock: [
            "Summon Wiggy"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "20s",
                boost: 0
            },
            {
                name: "Charges",
                base: 1,
                boost: 1
            },
            {
                name: "Cast Point",
                base: "0.2s",
                boost: 0
            },
            {
                name: "Radius",
                base: 80,
                boost: 10
            },
            {
                name: "Knockback",
                base: 2,
                boost: 2
            },
            {
                name: "Count",
                base: 1,
                boost: 0
            },
            {
                name: "Duration",
                base: "60s",
                boost: "10s"
            },
            {
                name: "Damage",
                base: 100,
                boost: 50
            },
            {
                name: "Health",
                base: 100,
                boost: 100
            },
            {
                name: "Armor",
                base: 0,
                boost: 5
            },
            {
                name: "Health Regen",
                base: 10,
                boost: 0
            },
            {
                name: "Movement Speed",
                base: 40,
                boost: 5
            },
            {
                name: "Attack Speed",
                base: 50,
                boost: 10
            }
        ],
        connectTo: []
    }
];

const DASHES = [
    {
        name: "Dash",
        description: "Basic movement skill. Required by law for everyone to learn for their adventure's licence.",
        image: "dash.png",
        unlock: [
            "Starting dash"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "6s",
                boost: 0
            },
            {
                name: "Charges",
                base: 1,
                boost: 1
            },
            {
                name: "Cast Point",
                base: "0.1s",
                boost: 0
            },
            {
                name: "Radius",
                base: 20,
                boost: 0
            },
            {
                name: "Distance",
                base: 80,
                boost: 16
            }
        ],
        connectTo: [
            "Dash Attack",
            "Lightning Dash"
        ]
    },
    {
        name: "Dash Attack",
        description: "Dashing through enemies attacks them.",
        image: "dash_attack.png",
        unlock: [
            "Dash"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "6s",
                boost: 0
            },
            {
                name: "Charges",
                base: 1,
                boost: 1
            },
            {
                name: "Cast Point",
                base: "0.1s",
                boost: 0
            },
            {
                name: "Damage %",
                base: 100,
                boost: 100
            },
            {
                name: "Radius",
                base: 30,
                boost: 10
            },
            {
                name: "Distance",
                base: 190,
                boost: 38
            }
        ],
        connectTo: []
    },
    {
        name: "Lightning Dash",
        description: "Dashing leaves behind an array of lightning strikes.",
        image: "lightning_dash.png",
        unlock: [
            "Dash"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "6s",
                boost: 0
            },
            {
                name: "Charges",
                base: 1,
                boost: 1
            },
            {
                name: "Cast Point",
                base: "0.1s",
                boost: 0
            },
            {
                name: "Distance",
                base: 80,
                boost: 16
            },
            {
                name: "Count",
                base: 4,
                boost: 2
            }
        ],
        connectTo: []
    }
];

const HERO_PASSIVES = [
    {
        name: "Devil's Deal",
        description: "Gain the ability to resurrect.",
        image: "devils_deal.png",
        unlock: [
            "Any hero"
        ],
        stats: [
            {
                name: "Extra Lives",
                base: 1,
                boost: 0.5
            }
        ],
        connectTo: []
    },
    {
        name: "Gaia's Thorns",
        description: "Returns a portion of your received damage to enemies around you.",
        image: "gaias_thorns.png",
        unlock: [
            "Any hero"
        ],
        stats: [
            {
                name: "Cast Point",
                base: "0.1s",
                boost: 0
            },
            {
                name: "Radius",
                base: 150,
                boost: 15
            },
            {
                name: "Knockback",
                base: 1,
                boost: 0
            },
            {
                name: "Return %",
                base: 30,
                boost: 15
            }
        ],
        connectTo: []
    },
    {
        name: "Guardian Belt",
        description: "Completely prevent the damage from an attack, with a cooldown.",
        image: "guardian_belt.png",
        unlock: [
            "Any hero"
        ],
        stats: [
            {
                name: "Guardian Layers",
                base: 1,
                boost: 1
            },
            {
                name: "Guardian Recovery",
                base: 0.05,
                boost: 0.05
            }
        ],
        connectTo: []
    },
    {
        name: "Self Doubt",
        description: "Adds one extra boost option. Enables faster reroll charge gain. 5 charges = 1 reroll.",
        image: "self_doubt.png",
        unlock: [
            "Any hero"
        ],
        stats: [
            {
                name: "Charge Speed",
                base: 1,
                boost: 1
            },
            {
                name: "Bonus Boost Options",
                base: 1,
                boost: 0
            }
        ],
        connectTo: [
            "Self Reflection"
        ]
    },
    {
        name: "Shield of Courage",
        description: "Grants you chance to block portion of damage.",
        image: "shield_of_courage.png",
        unlock: [
            "Any hero"
        ],
        stats: [
            {
                name: "Damage Block",
                base: 20,
                boost: 10
            },
            {
                name: "Block Chance",
                base: "20%",
                boost: "3%"
            }
        ],
        connectTo: []
    },
    {
        name: "Vampirism",
        description: "Grants you portion of damage you deal as health.",
        image: "vampirism.png",
        unlock: [
            "Any hero"
        ],
        stats: [
            {
                name: "Lifesteal",
                base: "1%",
                boost: "1%"
            }
        ],
        connectTo: []
    },
    {
        name: "Self Reflection",
        description: "Adds chance to get extra shops.",
        image: "self_reflection.png",
        unlock: [
            "Any hero",
            "Self Doubt"
        ],
        stats: [
            {
                name: "Tripple Shop Chance %",
                base: 5,
                boost: 0
            },
            {
                name: "Double Shop Chance %",
                base: 15,
                boost: 0
            }
        ],
        connectTo: []
    }
];

const WEAPON_PASSIVES = [
    {
        name: "AAAA Battery",
        description: "Adds a chance to trigger Lightning strikes to your weapon.",
        image: "aaaa_battery.png",
        unlock: [
            "Any weapon"
        ],
        stats: [
            {
                name: "Cast Point",
                base: "0.3s",
                boost: 0
            },
            {
                name: "Tick Rate",
                base: "1s",
                boost: 0
            },
            {
                name: "Lightning Chance",
                base: "10%",
                boost: "5%"
            }
        ],
        connectTo: []
    },
    {
        name: "Basilisk's Eye",
        description: "Adds a Stun chance to your weapon.",
        image: "basilisks_eye.png",
        unlock: [
            "Any weapon"
        ],
        stats: [
            {
                name: "Stun Chance",
                base: "20%",
                boost: "55"
            },
            {
                name: "Stun Duration",
                base: "0.5s",
                boost: "0.25s"
            }
        ],
        connectTo: []
    },
    {
        name: "Critical Strike",
        description: "Attacks have a chance to deal higher damage.",
        image: "critical_strike.png",
        unlock: [
            "Any weapon"
        ],
        stats: [
            {
                name: "Critical Damage",
                base: "50%",
                boost: "25%"
            },
            {
                name: "Critical Chance",
                base: "20%",
                boost: "5%"
            }
        ],
        connectTo: []
    },
    {
        name: "Crown of Swords",
        description: "Attacks all nearby enemies once a second with reduced damage.",
        image: "crown_of_swords.png",
        unlock: [
            "Any weapon"
        ],
        stats: [
            {
                name: "Damage %",
                base: 10,
                boost: 5
            },
            {
                name: "Radius",
                base: 140,
                boost: 10
            },
            {
                name: "Tick Rate",
                base: "1s",
                boost: 0
            }
        ],
        connectTo: []
    },
    {
        name: "Desolator's Tongue",
        description: "Adds Desolation to your attacks, stripping enemies of their armor.",
        image: "desolators_tongue.png",
        unlock: [
            "Any weapon"
        ],
        stats: [
            {
                name: "Desolate Chance",
                base: "50%",
                boost: "5%"
            },
            {
                name: "Modifier Stack",
                base: 1,
                boost: 0
            },
            {
                name: "Modifier Duration",
                base: "120s",
                boost: 0
            }
        ],
        connectTo: []
    },
    {
        name: "Multi-Hit",
        description: "Attacks have a chance to repeat.",
        image: "multi_hit.png",
        unlock: [
            "Any weapon without multi-hit"
        ],
        stats: [
            {
                name: "Max Multi Hits",
                base: 1,
                boost: 1
            },
            {
                name: "Multi Hit Delay",
                base: "0.3s",
                boost: 0
            },
            {
                name: "Multi Hit Chance",
                base: "15%",
                boost: "3%"
            }
        ],
        connectTo: [
            "Multi-Hit Size"
        ]
    },
    {
        name: "Mushroom Cap",
        description: "Attacks may cast spells.",
        image: "mushroom_cap.png",
        unlock: [
            "Any weapon",
            "Any spell with upgradable Charges",
            "Spell Charges < -2"
        ],
        stats: [
            {
                name: "Tick Rate",
                base: "1s",
                boost: 0
            },
            {
                name: "Spell Chance",
                base: "4%",
                boost: "2%"
            }
        ],
        connectTo: []
    },
    {
        name: "Pet Slime",
        description: "Adds Acid damage to your weapon.",
        image: "pet_slime.png",
        unlock: [
            "Any weapon"
        ],
        stats: [
            {
                name: "Acid Chance",
                base: "50%",
                boost: "5%"
            },
            {
                name: "Acid Stacks",
                base: 2,
                boost: 2
            },
            {
                name: "Modifier Duration",
                base: "5s",
                boost: 0
            }
        ],
        connectTo: []
    },
    {
        name: "Royal Flame",
        description: "Adds Fire damage to your weapon.",
        image: "royal_flame.png",
        unlock: [
            "Any weapon"
        ],
        stats: [
            {
                name: "Fire Chance",
                base: "30%",
                boost: "10%"
            },
            {
                name: "Fire Stacks",
                base: 3,
                boost: 3
            }
        ],
        connectTo: []
    },
    {
        name: "Multi-Hit Size",
        description: "Multi-Hits get bigger every repetition.",
        image: "multi_hit_size.png",
        unlock: [
            "Any weapon"
        ],
        stats: [
            {
                name: "Multi Hit Delay",
                base: "0s",
                boost: "0.2s"
            },
            {
                name: "Hit Range Extension",
                base: 0.1,
                boost: 0.05
            },
            {
                name: "Hit Width Extension",
                base: 0.1,
                boost: 0.05
            }
        ],
        connectTo: []
    }
];

const SPELL_PASSIVES = [
    {
        name: "Cooldown -4",
        description: "Reduce cooldown by 4s.",
        image: "cooldown_4.png",
        unlock: [
            "Any spell"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "-4s",
                boost: 0
            }
        ],
        connectTo: []
    },
    {
        name: "Critical",
        description: "Grants your spell a chance to deal increased damage.",
        image: "critical.png",
        unlock: [
            "Any spell"
        ],
        stats: [
            {
                name: "Critical Damage",
                base: "50%",
                boost: "25%"
            },
            {
                name: "Critical Chance",
                base: "10%",
                boost: "5%"
            }
        ],
        connectTo: []
    },
    {
        name: "Emerald Eye",
        description: "Adds Acid damage to your spell.",
        image: "emerald_eye.png",
        unlock: [
            "Any spell"
        ],
        stats: [
            {
                name: "Acid Chance",
                base: "50%",
                boost: "5%"
            },
            {
                name: "Acid Stacks",
                base: 1,
                boost: 1
            }
        ],
        connectTo: []
    },
    {
        name: "SSS Battery",
        description: "Adds a chance to trigger lightning strikes to your spell.",
        image: "sss_battery.png",
        unlock: [
            "Any spell"
        ],
        stats: [
            {
                name: "Cast Point",
                base: "0.3s",
                boost: 0
            },
            {
                name: "Tick Rate",
                base: "1s",
                boost: 0
            },
            {
                name: "Lightning Chance",
                base: "10%",
                boost: "5%"
            }
        ],
        connectTo: []
    },
    {
        name: "Stunning Rose",
        description: "Gives your spell a chance to stun.",
        image: "stunning_rose.png",
        unlock: [
            "Any spell besides Rain, Storm, and Sudden Death"
        ],
        stats: [
            {
                name: "Stun Chance",
                base: "20%",
                boost: "5%"
            },
            {
                name: "Stun Duration",
                base: "0.5s",
                boost: "0.25s"
            }
        ],
        connectTo: []
    },
    {
        name: "The Orb",
        description: "Your spell gains a chance to reduce the armor of enemies hit.",
        image: "the_orb.png",
        unlock: [
            "Any spell"
        ],
        stats: [
            {
                name: "Desolate Chance",
                base: "50%",
                boost: "5%"
            },
            {
                name: "Modifier Stack",
                base: 1,
                boost: 0
            },
            {
                name: "Modifier Duration",
                base: "120s",
                boost: 0
            }
        ],
        connectTo: []
    },
    {
        name: "Touch of Flame",
        description: "Adds Fire damage to your spell.",
        image: "touch_of_flame.png",
        unlock: [
            "Any spell"
        ],
        stats: [
            {
                name: "Fire Chance",
                base: "25%",
                boost: "5%"
            },
            {
                name: "Fire Stack",
                base: 1,
                boost: 1
            }
        ],
        connectTo: []
    },
    {
        name: "Homing Projectile",
        description: "Magic Missile steers towards enemies.",
        image: "homing_projectile.png",
        unlock: [
            "Any projectile based spell"
        ],
        stats: [
            {
                name: "Homing",
                base: 2,
                boost: 2
            }
        ],
        connectTo: []
    },
    {
        name: "Multi Projectile",
        description: "Magic Missile creates multiple projectiles.",
        image: "multi_projectile.png",
        unlock: [
            "Any projectile based spell"
        ],
        stats: [
            {
                name: "Projectile Count",
                base: 2,
                boost: 2
            },
            {
                name: "Spread",
                base: 5,
                boost: 5
            }
        ],
        connectTo: []
    },
    {
        name: "Piercing Projectile",
        description: "Magic Missile pierces through.",
        image: "piercing_projectile.png",
        unlock: [
            "Any projectile based spell"
        ],
        stats: [
            {
                name: "Pierce",
                base: 2,
                boost: 1
            }
        ],
        connectTo: []
    },
    {
        name: "Split",
        description: "Projectiles split on first impact.",
        image: "split.png",
        unlock: [
            "Any projectile based spell"
        ],
        stats: [
            {
                name: "Split Procs",
                base: 1,
                boost: 0
            },
            {
                name: "Split Count",
                base: 4,
                boost: 0
            },
            {
                name: "Split Angle",
                base: 25,
                boost: 0
            }
        ],
        connectTo: []
    },
    {
        name: "Summon BOOST",
        description: "Doubles the stats of your summons as they're right now.",
        image: "summon_boost.png",
        unlock: [
            "Summon Wiggy, Bat, Cyclops, Fox Eye, Giant Mouse, or Unstable Blob"
        ],
        stats: [],
        connectTo: [
            "Summon BOOST (2)"
        ]
    },
    {
        name: "Summon BOOST (2)",
        description: "Doubles the stats of your summons as they're right now.",
        image: "summon_boost_2.png",
        unlock: [
            "Summon BOOST",
            "Summon Wiggy, Bat, Cyclops, Fox Eye, Giant Mouse, or Unstable Blob"
        ],
        stats: [],
        connectTo: [
            "Summon BOOST (3)"
        ]
    },
    {
        name: "Summon BOOST (3)",
        description: "Doubles the stats of your summons as they're right now.",
        image: "summon_boost_3.png",
        unlock: [
            "Summon BOOST (2)",
            "Summon Wiggy, Bat, Cyclops, Fox Eye, Giant Mouse, or Unstable Blob"
        ],
        stats: [],
        connectTo: [
            "Summon BOOST (4)"
        ]
    },
    {
        name: "Summon BOOST (4)",
        description: "Doubles the stats of your summons as they're right now.",
        image: "summon_boost_4.png",
        unlock: [
            "Summon BOOST (3)",
            "Summon Wiggy, Bat, Cyclops, Fox Eye, Giant Mouse, or Unstable Blob"
        ],
        stats: [],
        connectTo: []
    }
];

const DASH_PASSIVES = [
    {
        name: "Cooldown -4",
        description: "Reduce cooldown by 4s.",
        image: "cooldown_4_dash.png",
        unlock: [
            "Any dash"
        ],
        stats: [
            {
                name: "Cooldown",
                base: "-4s",
                boost: 0
            }
        ],
        connectTo: []
    }
];