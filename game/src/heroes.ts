import { Pick } from './main';

export const DAMAGE_BY_DEFAULT : number = 23;
export const HP_BY_DEFAULT : number = 100;
export const MANA_BY_DEFAULT : number = 100;

export const HEROES_BY_DEFAULT:Heroes = [
    {
        name : "Shadow Fiend" ,
        damage : DAMAGE_BY_DEFAULT , 
        hp :  HP_BY_DEFAULT ,
        manapool : MANA_BY_DEFAULT - 30,
        skills: [
            {
                name : "Coil" ,
                mana : 10,
                description : "Pull souls from the ground",
                damage : DAMAGE_BY_DEFAULT + 10,
                isFatal : getRandomValue(),
            }
        ],
        description : "This person is Dota2 character ." ,
        img : ""
    },
    {
        name : "ORK" ,
        damage : DAMAGE_BY_DEFAULT - 10, 
        hp :  HP_BY_DEFAULT + 20 ,
        manapool : MANA_BY_DEFAULT - 80,
        skills : [
            {
                name : "Coil" ,
                mana : 10,
                description : "Pull souls from the ground",
                damage : DAMAGE_BY_DEFAULT + 10,
                isFatal : getRandomValue(),
            }
        ],
        description : "This character lives on the swamp. It's a main enemy of every intelligent hero." ,
        img : "https://upload.wikimedia.org/wikipedia/en/c/cb/Weinstein-like_Orc.jpg"
    },
    {
        name : "Kulya" ,
        damage : DAMAGE_BY_DEFAULT + 5, 
        hp :  HP_BY_DEFAULT - 20 ,
        manapool : MANA_BY_DEFAULT,
        skills : [
            {
                name : "Coil" ,
                mana : 10,
                description : "Pull souls from the ground",
                damage : DAMAGE_BY_DEFAULT + 10,
                isFatal : getRandomValue(),
            }
        ],
        description : "Kulya was one of the main faces of revolution . Also fame to Arseniy brought the quote : 'If it would be a kulya in my forehead , it'll be alright' " ,
        img : "https://upload.wikimedia.org/wikipedia/commons/e/e8/%D0%90%D1%80%D1%81%D0%B5%D0%BD%D1%96%D0%B9_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D0%B8%D1%87_%D0%AF%D1%86%D0%B5%D0%BD%D1%8E%D0%BA_%28cropped%29.jpg"
    },
    {
        name : "Get'man" ,
        damage : DAMAGE_BY_DEFAULT + 10, 
        hp :  HP_BY_DEFAULT + 20,
        manapool : MANA_BY_DEFAULT ,
        skills : [
            {
                name : "Coil" ,
                mana : 10,
                description : "Pull souls from the ground",
                damage : DAMAGE_BY_DEFAULT + 10,
                isFatal : getRandomValue(),
            }
        ],
        description : "Chocolate lord of Ukraine. Member of Olena Zelenska" ,
        img : ""
    },
    
]

export const PICKED_HEROES:Pick= {
    hero:{
        name : "" ,
        damage : DAMAGE_BY_DEFAULT , 
        hp :  HP_BY_DEFAULT ,
        manapool : MANA_BY_DEFAULT ,
        skills : [],
        description : "" ,
    },
    opponent: {
        name : "" ,
        damage : DAMAGE_BY_DEFAULT , 
        hp :  HP_BY_DEFAULT ,
        manapool : MANA_BY_DEFAULT ,
        skills : [],
        description : "" ,
    },
};

export function getHeroName(heroesNames:string[]) {
    const pickedHero = prompt("Pick ur hero : " + heroesNames);

    return pickedHero;
}

function getRandomValue () : boolean { 
    const value:number = +Math.random().toString().slice(4,5);

    if(value < 5) return true ;

    return false ;
};