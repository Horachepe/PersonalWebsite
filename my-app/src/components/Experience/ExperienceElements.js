import styled from 'styled-components';

export const Timeline = styled.div`
    position: relative;
    margin: 20px 0;
    padding: 20px;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        width: 2px;
        background: #64ffda;
        transform: translateX(-50%);
    }
`;

export const TimelineItem = styled.div`
    position: relative;
    width: 50%;
    padding: 20px;
    box-sizing: border-box;
    &:nth-child(even) {
        left: 50%;
    }
    
`;

export const TimelineCircle = styled.div`
    width: 20px;
    height: 20px;
    background-color: #64ffda;
    border-radius: 50%;
    position: absolute;
    top: 35px;
    &:nth-child(odd) {
        right: -10px;
    }
    &:nth-child(even) {
        left: -10px;
    }
    
`;

export const TimelineContent = styled.div`
    padding: 10px 20px;
    background: #0a192f;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-size: 20px;
    &:nth-child(odd) {
        text-align: left;
    }
    &:nth-child(even) {
        text-align: right;
    }
`;

export const ExperienceContainer = styled.div`
    background: #0a192f;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 30px;
    position: relative;
    z-index: 1;
`;

export const ExperienceContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ExperienceH1 = styled.h1`
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

export const ExperienceP = styled.p`
    margin-top: 24px;
    color: #8892b0;
    font-size: 24px;
    text-align: center;
    max-width: 800px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;