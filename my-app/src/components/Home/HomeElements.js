import styled, { keyframes } from 'styled-components';

export const HomeContainer = styled.div`
    background: #0a192f;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
`;

export const HomeContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HomeH1 = styled.h1`
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

export const HomeP = styled.p`
    margin-top: 24px;
    color: #8892b0;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

const typing = keyframes`
    from { width: 0 }
    to { width: 50% }
`;

const blinkCaret = keyframes`
    from, to { border-color: transparent }
    50% { border-color: #64ffda }
`;

export const AnimatedTitle = styled.div`
    font-size: 24px;
    color: #8892b0;
    border-right: 2px solid #64ffda;
    white-space: nowrap;
    overflow: hidden;
    width: 11ch;  // Adjust the width based on content
    animation: ${typing} 2s steps(12, end), ${blinkCaret} .75s step-end 4;
    border-right-width: 0px;
`;
