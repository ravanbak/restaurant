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

    const divTitleAndImage = addElement(header, 'div');
    const divTitle = addElement(divTitleAndImage, 'div', '', 'hero-text');

    const h1 = addElement(divTitle, 'h1', 'Cheese on Bread');
    const h2 = addElement(divTitle, 'h2', 'Bajan Restaurant');

    const img = new Image();
    img.src = hero;
    img.alt = 'A round table, with seating for six, with a view of the Caribbean Sea.'
    img.classList.add('hero');

    divTitleAndImage.appendChild(img);

    const h3 = addElement(header, 'h3', 'Discover the taste of cheese and bread in the Caribbean');

    return header;
}

function getNavElement() {
    const topnav = document.createElement('div');
    topnav.id = 'topnav';

    addElement(topnav, 'button', "Home", '', 'btn-home');
    addElement(topnav, 'button', "Menu", '', 'btn-menu');
    addElement(topnav, 'button', 'Contact', '', 'btn-contact');

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

    const footerContent = addElement(footer, 'div', '', 'footer-content');

    addElement(footerContent, 'span', 'Copyright © 2022 David Ravanbakhsh');

    const a = addElement(footerContent, 'a');
    a.href = 'https://github.com/ravanbak';
    a.target = '_blank';

    const i = addElement(a, 'i');
    i.classList.add('fa-brands');
    i.classList.add('fa-github-square');
    i.classList.add('fa-2x');

    return footer;
}

function addElement(parent, tagName, textContent, className, id) {
    const el = document.createElement(tagName);

    if (textContent) {
        el.textContent = textContent;
    }
    
    if (className) {
        el.classList.add(className);
    }

    if (id) {
        el.id = id;
    }

    parent.appendChild(el);

    return el;
}

export { 
    loadPage,
    addElement,
};