import { text } from '@fortawesome/fontawesome-svg-core';
import beach from './assets/beach.jpg';

function getHomeContent() {
    const home = document.createElement('div');
    home.classList.add('tab-content');

    const container = document.createElement('div');
    container.id = 'home-img-container';

    const img = new Image();
    img.src = beach;
    img.alt = 'A beach in Barbados'
    container.appendChild(img);
    
    const textContainer = document.createElement('div');

    const h1 = document.createElement('h1');
    h1.textContent = "Located in the heart of Barbados"
    textContainer.appendChild(h1);

    const h2 = document.createElement('h3');
    h2.textContent = "(not pictured here - this is some other part of Barbados)";
    textContainer.appendChild(h2);

    container.appendChild(textContainer);

    home.appendChild(container);

    return home;
}

export { getHomeContent };