export const PIRATE_CHANCE = 0.2;
export const RESOURCES = [
    "NO_SPECIAL_RESOURCES",
    "MINERAL_RICH",
    "MINERAL_POOR",
    "DESERT",
    "LOTS_OF_WATER",
    "RICH_SOIL",
    "POOR_SOIL",
    "RICH_FAUNA",
    "LIFELESS",
    "WEIRD_MUSHROOMS",
    "LOTS_OF_HERBS",
    "ARTISTIC",
    "WARLIKE"
];
export const TECH_LEVELS = [
    "Pre-Agricultural",
    "Agricultural",
    "Medieval",
    "Renaissance",
    "EarlyIndustrial",
    "PostIndustrial",
    "HighTech"
];
export const SYSTEM_NAMES = [
    "Adahn", // The alternate personality for The Nameless One in "Planescape: Torment"
    "Aldea",
    "Andevian",
    "Antedi",
    "Balosnee",
    "Baratas",
    "Brax", // One of the heroes in Master of Magic
    "Bretel", // This is a Dutch device for keeping your pants up.
    "Calondia",
    "Campor",
    "Capelle", // The city I lived in while programming this game
    "Carzon",
    "Castor", // A Greek demi-god
    "Cestus",
    "Cheron",
    "Courteney", // After Courteney Cox…
    "Daled",
    "Damast",
    "Davlos",
    "Deneb",
    "Deneva",
    "Devidia",
    "Draylon",
    "Drema",
    "Endor",
    "Esmee", // One of the witches in Pratchett's Discworld
    "Exo"
];

export const TRADE_GOODS = {
    WATER: {
        MLTP: 0,
        MLTU: 0,
        TTP: 2,
        basePrice: 30,
        IPL: 3,
        var: 4,
        CR: "LOTS_OF_WATER",
        ER: "DESERT"
    },

    FURS: {
        MLTP: 0,
        MLTU: 0,
        TTP: 0,
        basePrice: 250,
        IPL: 10,
        var: 10,
        CR: "RICH_FAUNA",
        ER: "LIFELESS"
    },
    FOOD: {
        MLTP: 1,
        MLTU: 0,
        TTP: 1,
        basePrice: 100,
        IPL: 5,
        var: 5,
        CR: "RICH_SOIL",
        ER: "POOR_SOIL"
    },
    ORE: {
        MLTP: 2,
        MLTU: 2,
        TTP: 3,
        basePrice: 350,
        IPL: 20,
        var: 10,
        CR: "MINERAL_RICH",
        ER: "MINERAL_POOR"
    },
    GAMES: {
        MLTP: 3,
        MLTU: 1,
        TTP: 6,
        basePrice: 250,
        IPL: -10,
        var: 5,
        CR: "ARTISTIC",
        ER: "NO_SPECIAL_RESOURCES"
    },

    FIREARMS: {
        MLTP: 3,
        MLTU: 1,
        TTP: 5,
        basePrice: 1250,
        IPL: -75,
        var: 100,
        CR: "WARLIKE",
        ER: "NO_SPECIAL_RESOURCES"
    },
    MEDICINE: {
        MLTP: 4,
        MLTU: 1,
        TTP: 6,
        basePrice: 650,
        IPL: -20,
        var: 10,
        CR: "LOTS_OF_HERBS",
        ER: "NO_SPECIAL_RESOURCES"
    },
    MACHINES: {
        MLTP: 4,
        MLTU: 3,
        TTP: 5,
        basePrice: 900,
        IPL: -30,
        var: 5,
        CR: "NO_SPECIAL_RESOURCES",
        ER: "NO_SPECIAL_RESOURCES"
    },
    NARCOTICS: {
        MLTP: 5,
        MLTU: 0,
        TTP: 5,
        basePrice: 3500,
        IPL: -125,
        var: 150,
        CR: "WEIRD_MUSHROOMS",
        ER: "NO_SPECIAL_RESOURCES"
    },
    ROBOTS: {
        MLTP: 6,
        MLTU: 4,
        TTP: 7,
        basePrice: 5000,
        IPL: -150,
        var: 100,
        CR: "NO_SPECIAL_RESOURCES,",
        ER: "NO_SPECIAL_RESOURCES"
    }
};
