import _ from 'lodash';
import './style.css';
import Image from './image.jpg';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myImage = new Image();
    myImage.src = Image;

    element.appendChild(myImage);

    return element;
}

document.body.appendChild(component());