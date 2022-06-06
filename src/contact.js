import { addElement } from "./loadpage";

function getContactContent() {
    const contactContent = document.createElement('div');
    contactContent.classList.add('tab-content');
    
    const contactCard = addElement(contactContent, 'div', '', 'contact-card');
    
    addElement(contactCard, 'h1', 'Contact Us!');
    addElement(contactCard, 'div', '29 Flamboyant Ave Sunset Crest,', 'contact-address');
    addElement(contactCard, 'div', 'Saint James', 'contact-address');
    addElement(contactCard, 'div', 'Barbados', 'contact-address');
    addElement(contactCard, 'p', '', '');
    addElement(contactCard, 'div', 'Phone: 246-432-7189', 'contact-address');
    addElement(contactCard, 'div', 'e-mail: cheese-on-bread@hotmail.com', 'contact-address');
    
    contactContent.appendChild(contactCard);

    return contactContent;
}

export { getContactContent };