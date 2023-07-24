import './style.css'
import { HEROES_BY_DEFAULT, getHeroName } from './heroes';
import { Hero , Heroes } from './interfaces'

const names:string[] = getNames(HEROES_BY_DEFAULT);
const pickedHero = getHeroName(names);
const hero:Hero | null = getHero(HEROES_BY_DEFAULT , pickedHero)[0];

const htmlHero = toHTML(Object.assign(hero,{className : "hero"}));
const htmlOpponent = toHTML(Object.assign(HEROES_BY_DEFAULT[1],{className : "hero"}));

document.querySelector("#area")?.append(htmlHero);
document.querySelector("#area")?.append(htmlOpponent);

function getNames(arr:Heroes[]): string[] {
  const heroesNames:string[] = []; 

  let index = 0;

  while(index < arr.length) {
    const hero:Hero = arr[index];
  
    heroesNames.push(hero['name']);
  
    index++;
  }

  return heroesNames
  
}

function getHero(arr:Heroes[] , name:string) {
  return arr.filter(el => el['name'] === name);
}

function toHTML(option) {
  const { 
          tagName="div",
          className,
          name ,
          damage ,
          hp ,
          manapool ,
          skills ,
          img,
          description ,
          ...attrs
        } = option;

    const element = document.createElement(tagName) as HTMLElement;
    element.className = className;
    const htmlString:string = `
      <h2>NAME : ${name}</h2> 
      ${img ? `<img class="hero-img" src=${img} />` :""}
      <h3>DAMAGE : ${damage}</h3>
      <h3>HP : ${hp}</h3>
      <div>MANAPOOL : ${manapool}</div> 
      <p>DESCRIPTION : ${description}</p>
    `;

    element.insertAdjacentHTML('afterbegin',htmlString );

    return element;
}

function attack(hero1:Hero ,hero2:Hero) {
  hero1['hp'] = hero1['hp'] - hero2['damage'];

  return [hero1,hero2];
}

function render() {
  
}

