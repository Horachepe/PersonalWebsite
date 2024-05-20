import React, { useState } from 'react';
import { ContactContainer, ContactContent, ContactH1, ContactForm, ContactInput, ContactTextArea, ContactButton, BackArrow, SuccessMessage, ErrorMessage } from './ContactElements';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://garciacodes.com/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSuccess(true);
                setError(false);
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                setSuccess(false);
                setError(true);
            }
        } catch (err) {
            setSuccess(false);
            setError(true);
        }
    };

    return (
        <ContactContainer>
            <ContactContent>
                <BackArrow to="/">⬅ Back to Main</BackArrow>
                <ContactH1>Contact Me</ContactH1>
                <ContactForm onSubmit={handleSubmit}>
                    <ContactInput
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <ContactInput
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <ContactTextArea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></ContactTextArea>
                    <ContactButton type="submit">Send Message</ContactButton>
                </ContactForm>
                {success && <SuccessMessage>Message sent successfully!</SuccessMessage>}
                {error && <ErrorMessage>There was an error sending your message. Please try again.</ErrorMessage>}
            </ContactContent>
        </ContactContainer>
    );
};

export default Contact;