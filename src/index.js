import "./style.css";
import { loadPage } from "./loadpage";
import { getHomeContent } from "./home";
import { getMenuContent } from "./menu";
import { getContactContent } from "./contact";

loadPage();

function clearTabContent() {
    const tabContent = document.querySelector('#tabcontent');
    if (!tabContent) {
        return;
    }    

    while (tabContent.lastChild) {
        tabContent.removeChild(tabContent.lastChild);
    }
}

function updateContent(e) {
    clearTabContent();

    const tabContent = document.querySelector('#tabcontent');

    if (!tabContent) {
        return;
    }

    switch (e.target.value) {
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
}

export { updateContent };