import "./menu.css";
import { addElement } from "./loadpage";

const appetizers = [
    {
        name: 'Fried Plantains',
        description: 'Plantains that have been fried. In a pan.',
        price: 4.99
    },
    {
        name: 'Fish Cakes',
        description: 'Cakes. Made out of fish.',
        price: 6.99
    },
    {
        name: 'Conkies',
        description: 'No idea what these actually are. Probably delicious, though.',
        price: 5.99
    },
    {
        name: 'Jug-Jug',
        description: 'Not sure about this one, either. Maybe two jugs?',
        price: 7.99
    },
    {
        name: 'Rice and Peas',
        description: 'Rice. With peas.',
        price: 5.49
    },
];

const mains = [
    {
        name: 'Cou-cou',
        description: 'The national dish of Barbados when eaten with flying fish.',
        price: 18.99
    },
    {
        name: 'Jug-Jug',
        description: 'This again. Still don\'t know what it is.',
        price: 18.99
    },
    {
        name: 'Fried Flying Fish',
        description: 'Fresh flying fish fillets, fried frantically for five fortnights. Featuring fashionably fat french fries.',
        price: 18.99
    }
];

const desserts = [
    {
        name: 'Bajan Black Cake',
        description: 'Just read the name.',
        price: 14.99
    },
    {
        name: 'Corn Pie',
        description: 'This has onion in it, yet it\'s listed as a dessert. You can\'t explain that.',
        price: 14.99
    }
];

const beverages = [
    {
        name: 'Water',
        description: 'Only the finest hydrogen and oxygen atoms, combined in the perfect ratio of 2:1.',
        price: 0.00
    },
    {
        name: 'Paw-Paw and Coconut Drink',
        description: 'We take a paw and combine it with another paw, for a total of two paws, then we throw in some coconut.',
        price: 3.99
    }
];

function getMenuContent() {
    const menuContent = document.createElement('div');
    menuContent.classList.add('tab-content');
    
    addMenuItems(menuContent, 'Appetizers', appetizers);
    addMenuItems(menuContent, 'Main Courses', mains);
    addMenuItems(menuContent, 'Desserts', desserts);
    addMenuItems(menuContent, 'Beverages', beverages);

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