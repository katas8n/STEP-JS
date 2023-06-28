export class Component {
    constructor(tagName , className , htmlCode , id ,listeners="" , ...attrs) {
        this.component = document.createElement(tagName);
        this.component.className = className;
        this.component.id = id;
        this.component.innerHTML += htmlCode

        if(!listeners) return this.component;

        for (const key in listeners) {
            const value = listeners[key];


            this.component.addEventListener(key,() => value())
        }

        return this.component;
    }
}

export default Component;
