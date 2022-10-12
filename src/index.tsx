// import './style.less';
import './style.scss';
// import './style.css';

class TypeScripter {
  text = '';

  constructor() {
    //..
  }

  /**
   * Setter
   * @param text
   */
  setText(text: string) {
    this.text = text;
  }

  /**
   * Getter
   */
  getText() {
    return this.text;
  }

  output() {
    let element = document.createElement('div'),
      content = document.createTextNode(this.getText());
    element.appendChild(content);
    return element;
  }
}

let obj = new TypeScripter();
obj.setText("Hi there and i'am the index.tsx file, with CSS, SASS and LESS!");

document.body.appendChild(obj.output());
