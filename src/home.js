function getHomeContent() {
    const home = document.createElement('div');
    home.classList.add('tab-content');

    const h1 = document.createElement('h1');
    h1.textContent = "Located in the heart of Barbados, or maybe the stomach of Barbados?";

    home.appendChild(h1);

    return home;
}

export { getHomeContent };