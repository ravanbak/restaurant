function getMenuContent() {
    const menuContent = document.createElement('div');
    menuContent.classList.add('tab-content');
    
    let h1 = document.createElement('h1');
    h1.textContent = "Appetizers";
    menuContent.appendChild(h1);

    h1 = document.createElement('h1');
    h1.textContent = "Mains";
    menuContent.appendChild(h1);

    h1 = document.createElement('h1');
    h1.textContent = "Desserts";
    menuContent.appendChild(h1);

    return menuContent;
}

export { getMenuContent };