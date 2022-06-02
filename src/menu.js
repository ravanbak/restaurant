import "./menu.css";
import { addElement } from "./loadpage";
import menu from "./data/menu.json";

function getMenuContent() {
    const menuContent = document.createElement('div');
    menuContent.classList.add('tab-content');
    
    addMenuItems(menuContent, 'Appetizers', menu.appetizers);
    addMenuItems(menuContent, 'Main Courses', menu.mains);
    addMenuItems(menuContent, 'Desserts', menu.desserts);
    addMenuItems(menuContent, 'Beverages', menu.beverages);

    return menuContent;
}

function addMenuItems(parent, groupHeading, groupData) {
    addElement(parent, 'h1', groupHeading, 'menu-group-heading');

    groupData.forEach(el => {
        const price = `\$${el.price} BBD`;
        addMenuItem(parent, el.name, el.description, price);    
    });
}

function addMenuItem(parent, name, description, price) {
    const div = document.createElement('div');
    div.classList.add('menu-item');
    
    addElement(div, 'h2', name, 'menu-item-name');
    addElement(div, 'span', price, 'menu-item-price');
    addElement(div, 'div', description, 'menu-item-description');
    
    
    parent.appendChild(div);
}

export { getMenuContent };