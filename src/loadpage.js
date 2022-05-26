import hero from './assets/hero.jpg';

function loadPage() {
    const content = document.querySelector('div#content');
    if (!content) {
        return;
    }

    content.appendChild(getHeaderElement());
    content.appendChild(getBodyElement());
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
    h3.textContent = 'Discover the taste of cheese and bread (and other things) in the Carribean';

    heroText.appendChild(h1);
    heroText.appendChild(h2);
    heroText.appendChild(h3);

    header.appendChild(heroText);

    const img = new Image();
    img.src = hero;
    img.alt = 'A round table, with seating for six, with a view of the Carribean.'
    img.classList.add('hero');

    header.appendChild(img);

    return header;
}

function getBodyElement() {
    const body = document.createElement('div');
    body.classList.add('body');

    const div = document.createElement('div');
    div.textContent = "Body content";

    body.appendChild(div);

    return body;
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

export default loadPage;