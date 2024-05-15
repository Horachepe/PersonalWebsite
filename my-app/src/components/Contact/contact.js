import React from 'react';
import { ContactContainer, ContactContent, ContactH1, ContactForm, ContactInput, ContactTextArea, ContactButton } from './ContactElements';

const Contact = () => {
    return (
        <ContactContainer>
            <ContactContent>
                <ContactH1>Contact Me</ContactH1>
                <ContactForm>
                    <ContactInput type="text" placeholder="Your Name" />
                    <ContactInput type="email" placeholder="Your Email" />
                    <ContactTextArea placeholder="Your Message"></ContactTextArea>
                    <ContactButton type="submit">Send Message</ContactButton>
                </ContactForm>
            </ContactContent>
        </ContactContainer>
    );
};

export default Contact;