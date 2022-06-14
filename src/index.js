import "./style.css";
import { loadPage } from "./loadpage";
import { getHomeContent, showSlides } from "./home";
import { getMenuContent } from "./menu";
import { getContactContent } from "./contact";

const initPage = function() {
    loadPage();
    addTabButtonEventListeners();
    
    updateTabContent('home'); // Start on home tab
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
            showSlides();
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
        buttons[i].style.borderBottom = '9px solid';
        buttons[i].style.borderColor = '#f8c9a000';
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

    button.style.borderColor = '#123a43';
}

export { updateTabContent };