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
    
    const h1 = document.createElement('h1');
    h1.textContent = "Located in the heart of Barbados (not pictured here - this is some other part of Barbados)";
    container.appendChild(h1);

    home.appendChild(container);

    return home;
}

export { getHomeContent };