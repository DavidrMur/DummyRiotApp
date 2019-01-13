import { championList } from './ChampionList';

export const sample= {
    "39": {
        "id": "irelia",
        "name": "Irelia",
        "title": "the Blade Dancer",
        "tags": [
        "Fighter",
        "Assassin"
        ],
        "stats": {
        "hp": 550,
        "hpperlevel": 85,
        "mp": 350,
        "mpperlevel": 30,
        "movespeed": 340,
        "armor": 34,
        "armorperlevel": 3,
        "spellblock": 32,
        "spellblockperlevel": 1.25,
        "attackrange": 200,
        "hpregen": 8.5,
        "hpregenperlevel": 0.85,
        "mpregen": 8,
        "mpregenperlevel": 0.8,
        "crit": 0,
        "critperlevel": 0,
        "attackdamage": 60,
        "attackdamageperlevel": 4,
        "attackspeedoffset": 0,
        "attackspeedperlevel": 2.5
        },
        "icon": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Irelia.png",
        "sprite": {
        "url": "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/sprite/champion1.png",
        "x": 432,
        "y": 0
        },
        "description": "The Noxian occupation of Ionia produced many heroes, none more unlikely than young Irelia of Navori. Trained in the ancient dances of her province, she adapted her art for war, using the graceful and carefully practised movements to levitate a host of..."
}};

export const updateObject = ( oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const paramToChampion = (championId, param) => {
    console.log(championId);
    return championList[championId][param];
};

export const nestedParamToChampion = (championId, parentParam, param) => {
    return championList[championId][parentParam][param];
};
