export interface Skill {
  
    name : string,
    mana : number,
    description : string ,
    damage : number , 
    isFatal : boolean
    
  }
  
export interface Hero {
    name : string,
    damage : number , 
    hp : number ,
    manapool : number,
    skills : Skill[],
    description : string ,
    img? : string
}
  
export interface Pick {
    hero : Hero,
    opponent : Hero,
}
  
export type Heroes = Hero[];
