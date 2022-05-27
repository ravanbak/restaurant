function getHomeContent() {
    const home = document.createElement('div');
    home.classList.add('home');

    const div = document.createElement('div');
    div.textContent = "Home content";

    home.appendChild(div);

    return home;
}

export { getHomeContent };