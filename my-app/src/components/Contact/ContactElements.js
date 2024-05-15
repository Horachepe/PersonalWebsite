import styled from 'styled-components';

export const ContactContainer = styled.div`
    background: #0a192f;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 30px;
    position: relative;
    z-index: 1;
`;

export const ContactContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContactH1 = styled.h1`
    color: #64ffda;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    width: 100%;
`;

export const ContactInput = styled.input`
    margin: 8px 0;
    padding: 12px;
    width: 100%;
    border: none;
    border-radius: 4px;
    background: #112240;
    color: #8892b0;
`;

export const ContactTextArea = styled.textarea`
    margin: 8px 0;
    padding: 12px;
    width: 100%;
    height: 150px;
    border: none;
    border-radius: 4px;
    background: #112240;
    color: #8892b0;
`;

export const ContactButton = styled.button`
    margin: 16px 0;
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    background: #64ffda;
    color: #0a192f;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background: #52e0b1;
    }
`;