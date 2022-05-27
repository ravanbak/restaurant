function getContactContent() {
    const contactContent = document.createElement('div');

    let h1 = document.createElement('h1');
    h1.textContent = "Contact Us!";
    contactContent.appendChild(h1);

    h1 = document.createElement('h1');
    h1.textContent = "phone";
    contactContent.appendChild(h1);

    h1 = document.createElement('h1');
    h1.textContent = "e-mail";
    contactContent.appendChild(h1);

    return contactContent;
}

export { getContactContent };