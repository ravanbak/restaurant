import hero from './assets/hero.jpg';

function loadPage() {
    const content = document.querySelector('div#content');
    if (!content) {
        return;
    }

    content.appendChild(getHeaderElement());
    content.appendChild(getNavElement());
    content.appendChild(getTabContentElement());
    content.appendChild(getFooterElement());
}

function getHeaderElement() {
    const header = document.createElement('div');
    header.classList.add('header');

    const heroText = document.createElement('div');
    heroText.classList.add('hero-text');

    const h1 = document.createElement('h1');
    h1.textContent = 'Cheese on Bread';

    const h2 = document.createElement('h2');
    h2.textContent = 'Bajan Restaurant';

    const h3 = document.createElement('h3');
    h3.textContent = 'Discover the taste of cheese and bread in the Caribbean';

    heroText.appendChild(h1);
    heroText.appendChild(h2);
    heroText.appendChild(h3);

    header.appendChild(heroText);

    const img = new Image();
    img.src = hero;
    img.alt = 'A round table, with seating for six, with a view of the Caribbean Sea.'
    img.classList.add('hero');

    header.appendChild(img);

    return header;
}

function getNavElement() {
    const topnav = document.createElement('div');
    topnav.id = 'topnav';

    const btnHome = document.createElement('button');
    btnHome.type = 'button';
    btnHome.textContent = "Home";
    btnHome.id = 'btn-home';
    btnHome.value = 'home';
    // btnHome.addEventListener('click', () => updateTabContent('home'));
    topnav.appendChild(btnHome);

    const btnMenu = document.createElement('button');
    btnMenu.type = 'button';
    btnMenu.textContent = "Menu";
    btnMenu.id = 'btn-menu';
    btnMenu.value = 'menu';
    // btnMenu.addEventListener('click', () => updateTabContent('menu'));
    topnav.appendChild(btnMenu);

    const btnContact = document.createElement('button');
    btnContact.type = 'button';
    btnContact.textContent = "Contact";
    btnContact.id = 'btn-contact';
    btnContact.value = 'contact';
    // btnContact.addEventListener('click', () => updateTabContent('contact'));
    topnav.appendChild(btnContact);

    return topnav;
}

function getTabContentElement() {
    const tabContent = document.createElement('div');
    tabContent.id = 'tabcontent';

    return tabContent;
}

function getFooterElement() {
    const footer = document.createElement('div');
    footer.classList.add('footer');

    const footerContent = document.createElement('div');
    footerContent.classList.add('footer-content');

    const span = document.createElement('span');
    span.textContent='Copyright © 2022 David Ravanbakhsh';

    const a = document.createElement('a');
    a.href = 'https://github.com/ravanbak';
    a.target = '_blank';

    const i = document.createElement('i');
    i.classList.add('fa-brands');
    i.classList.add('fa-github-square');
    i.classList.add('fa-2x');
    a.appendChild(i);
    
    footerContent.appendChild(span);
    footerContent.appendChild(a);

    footer.appendChild(footerContent);

    return footer;
}

function addElement(parent, tagName, textContent, className) {
    const el = document.createElement(tagName);

    if (textContent) {
        el.textContent = textContent;
    }
    
    if (className) {
        el.classList.add(className);
    }

    parent.appendChild(el);

    return el;
}

export { 
    loadPage,
    addElement,
};