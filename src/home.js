import beach from './assets/beach.jpg';
import { addElement } from './loadpage';

const reviews = [
    {
        'review': '"To say that both the meal and its maker have challenged my preconceptions about fine cooking is a gross understatement. They have rocked me to my core."',
        'name': 'Anton Ego',
    },
    {
        'review': '"I tried to order a cheeseburger but they said they don\'t have any cheese or bread."',
        'name': 'Kevin Reynette',
    },
    {
        'review': '"I like the fact that they serve food here because sometimes I get hungry."',
        'name': 'Reissa Scott',
    },
    {
        'review': '"I ordered some fried plantains and they were exactly as described."',
        'name': 'Natasha Ichiro',
    }    
];

let slideIdx = 0;
let slideIntervalID = -1;
const SLIDE_INTERVAL_MS = 7000;

function getHomeContent() {
    slideIdx = 0;

    const home = document.createElement('div');
    home.classList.add('tab-content');

    const container = document.createElement('div');
    container.id = 'home-img-container';

    const img = new Image();
    img.src = beach;
    img.alt = 'A beach in Barbados'
    container.appendChild(img);
    
    const textContainer = document.createElement('div');

    const h1 = document.createElement('h1');
    h1.textContent = "Located in the heart of Barbados"
    textContainer.appendChild(h1);

    const h3 = document.createElement('h3');
    h3.textContent = "(not pictured here — this is a different part of Barbados)";
    textContainer.appendChild(h3);

    container.appendChild(textContainer);

    home.appendChild(container);

    home.appendChild(getCustomerReviewSlideshowElement());

    return home;
}

function getCustomerReviewSlideshowElement() {
    const slideshow = document.createElement('div');
    slideshow.classList.add('slideshow-container');

    const prev = addElement(slideshow, 'a', '❮', 'prev');
    prev.addEventListener('click', () => showNextSlide(-1));

    let slide;
    for (let i = 0; i < reviews.length; i++) {
        slide = addElement(slideshow, 'div', '', 'slides');
        slide.classList.add('fade');
        addElement(slide, 'blockquote', reviews[i].review, 'quote');
        addElement(slide, 'figcaption', '—' + reviews[i].name, 'attrib');
    }
    
    const next = addElement(slideshow, 'a', '❯', 'next');
    next.addEventListener('click', () => showNextSlide(1));
    
    return slideshow;
}

function showNextSlide(n) {
    // Clear the interval and restart it so that, if the user clicked an arrow to
    // change slides, the next slide will be displayed for the full interval length.

    if (slideIntervalID >= 0) {
        clearInterval(slideIntervalID);
        slideIntervalID = -1;
    }

    let slides = document.getElementsByClassName('slides');
    if (!slides) {
        return;
    }

    slideIntervalID = setInterval(() => showNextSlide(1), SLIDE_INTERVAL_MS);

    slideIdx += n;
    
    if (slideIdx >= slides.length) {
        slideIdx = 0;
    } 
    else if (slideIdx < 0) {
        slideIdx = slides.length - 1;
    }

    showSlides();
}

function showSlides() {
    // Show a slideshow of customer reviews.

    let slides = document.getElementsByClassName('slides');
    if (slides) {
        if (slideIntervalID < 0) {
            slideIntervalID = setInterval(() => showNextSlide(1), SLIDE_INTERVAL_MS);
        }
    }

    // Show the current slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIdx].style.display = 'block';
}

export { getHomeContent, showSlides };