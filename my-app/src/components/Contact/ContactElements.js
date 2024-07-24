import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContactContainer = styled.div`
    background: #0f0f0f;
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
    color: #b22222;
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
    background: #2a3439;
    color: #e5e4e2;
`;

export const ContactTextArea = styled.textarea`
    margin: 8px 0;
    padding: 12px;
    width: 100%;
    height: 150px;
    border: none;
    border-radius: 4px;
    background: #2a3439;
    color: #e5e4e2;
`;

export const ContactButton = styled.button`
    margin: 16px 0;
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    background: #b22222;
    color: #e5e4e2;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background: #800000;
    }
`;

export const BackArrow = styled(Link)`
    color: #b22222;
    font-size: 24px;
    margin-bottom: 20px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: #800000;
    }
`;

export const SuccessMessage = styled.p`
    color: #b22222;
    font-size: 20px;
    margin-top: 18px;
`;

export const ErrorMessage = styled.p`
    color: #b22222;
    font-size: 20px;
    margin-top: 18px;
`;