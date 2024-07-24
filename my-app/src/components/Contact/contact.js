import React, { useState } from 'react';
import { db } from '../../firebase-config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ContactContainer, ContactContent, ContactH1, ContactForm, ContactInput, ContactTextArea, ContactButton, BackArrow, SuccessMessage, ErrorMessage } from './ContactElements';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await addDoc(collection(db, 'messages'), {
                name,
                email,
                message,
                timestamp: serverTimestamp()
            });
            setStatus('success');
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            setStatus('error');
            console.error("Error writing document: ", error);
        }
    };

    return (
        <ContactContainer>
            <ContactContent>
                <BackArrow to='/'>←</BackArrow>
                <ContactH1>Contact Me</ContactH1>
                <ContactForm onSubmit={handleSubmit}>
                    <ContactInput type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your Name" required />
                    <ContactInput type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your Email" required />
                    <ContactTextArea value={message} onChange={e => setMessage(e.target.value)} placeholder="Your Message" required />
                    <ContactButton type="submit">Send Message</ContactButton>
                </ContactForm>
                {status === 'success' && <SuccessMessage>Message sent successfully!</SuccessMessage>}
                {status === 'error' && <ErrorMessage>Message failed to send.</ErrorMessage>}
            </ContactContent>
        </ContactContainer>
    );
};

export default Contact;