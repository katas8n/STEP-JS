import './style.css'
import { Button } from './components/Button';
import { render } from './core/render';

const btns = [
  {
    button_txt : "GET Planets",
    url : "https://swapi.dev/api/planets",
    listener : () => {
      console.log("THERE IS PLANET");
    }
  } , 
  
  {
    button_txt : "GET People",
    url : "https://swapi.dev/api/people",
    listener : () => {
      console.log("people");
    }
  } , 
  
  {
    button_txt : "GET Starship",
    url : "https://swapi.dev/api/starship",
    listener : (e) => {
      console.log("Starship");
    }
  } 
  
]

let counter = 0;

for (const btn of btns) {
  counter++;
  const htmlBTN = new Button("button","menu-btn" ,btn.button_txt ,"id:" + counter , {"click" : btn.listener});

  document.querySelector("#app").append(htmlBTN);
 
}



