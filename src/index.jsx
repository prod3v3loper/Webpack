
import './style.scss';

function component() {
    let element = document.createElement('div');
    let content = document.createTextNode("Hi there and i'am the index.jsx file!");
    element.appendChild(content); // füge den Textknoten zum neu erstellten div hinzu.
    return element;
}

document.body.appendChild(component());