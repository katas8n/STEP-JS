import { Component } from '../../core/Component';
import "./Button.css";

export class Button extends Component {
    constructor(tagName, className, htmlCode, id="_", listeners , ...attrs) {
        super(tagName, className, htmlCode, id,listeners, ...attrs);
        return this.button;
    }
}

export default Button;
