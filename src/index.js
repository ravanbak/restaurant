import "./style.css";
import { loadPage } from "./loadpage";
import { getHomeContent } from "./home";
import { getMenuContent } from "./menu";
import { getContactContent } from "./contact";

const initPage = function() {
    loadPage();
    addTabButtonEventListeners();
    
    updateTabContent('home'); // Start at home tab
}();

function clearTabContent() {
    const tabContent = document.querySelector('#tabcontent');
    if (!tabContent) {
        return;
    }    

    while (tabContent.lastChild) {
        tabContent.removeChild(tabContent.lastChild);
    }
}

function addTabButtonEventListeners() {
    let btn = document.querySelector('#btn-home');
    btn.addEventListener('click', () => updateTabContent('home'));
    
    btn = document.querySelector('#btn-menu');
    btn.addEventListener('click', () => updateTabContent('menu'));
    
    btn = document.querySelector('#btn-contact');
    btn.addEventListener('click', () => updateTabContent('contact'));
}

function updateTabContent(tab) {
    clearTabContent();

    const tabContent = document.querySelector('#tabcontent');
    if (!tabContent) {
        return;
    }

    switch (tab) {
        case 'home':
            tabContent.appendChild(getHomeContent());
            break;
        
        case 'menu':
            tabContent.appendChild(getMenuContent());
            break;
        
        case 'contact':
            tabContent.appendChild(getContactContent());
            break;
    }

    hilightTab(tab);
}

function hilightTab(tab) {
    const buttons = document.querySelectorAll('#topnav button');
    for (let i = 0; i < buttons.length; i++) {
        // buttons[i].style.border = '1px solid';
        // buttons[i].style.borderBottom = '8px solid';
        // buttons[i].style.borderBottom = 'none';
        // buttons[i].style.borderColor = '#f8c9a0'; // 'rgb(0, 183, 168)';
        buttons[i].style.backgroundColor = '#f8c9a0'; // 'rgb(0, 183, 168)';
    }

    let button;
    switch (tab) 
    {
        case 'home':
            button = document.querySelector('#btn-home');
            break;
        case 'menu':
            button = document.querySelector('#btn-menu');
            break;
        case 'contact':
            button = document.querySelector('#btn-contact');
            break;
    }

    // button.style.borderColor = '#f4a460'; // '#123a43';
    button.style.backgroundColor = '#f4a460';
}

export { updateTabContent };