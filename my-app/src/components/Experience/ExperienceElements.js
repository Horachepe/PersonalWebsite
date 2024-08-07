import styled from 'styled-components';

export const Timeline = styled.div`
    position: relative;
    margin: 20px 0;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        width: 2px;
        background: #b22222;
        transform: translateX(-50%);
    }

    @media screen and (max-width: 768px) {
        &:before {
            left: 20px;
            transform: none;
        }
    }
`;

export const TimelineCircle = styled.div`
    width: 20px;
    height: 20px;
    background-color: #b22222;
    border-radius: 50%;
    position: absolute;
    top: 35px;
    
    @media screen and (max-width: 768px) {
        left: 0;
        right: auto;
    }
`;

export const TimelineItem = styled.div`
    position: relative;
    width: 50%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: ${({even}) => (even ? 'flex-end' : 'flex-start')};
    align-items: center;

    &:nth-child(odd) {
        left: -25%;
    }
    &:nth-child(even) {
        left: 25%;
    }
    &:nth-child(odd) ${TimelineCircle} {
        right: -10px;
    }
    &:nth-child(even) ${TimelineCircle} {
        left: -10px;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 40px;
        justify-content: flex-start;

        &:nth-child(odd), &:nth-child(even) {
            left: -2.5%;
        }
        &:nth-child(odd) ${TimelineCircle}, &:nth-child(even) ${TimelineCircle} {
            left: 0;
            right: auto;
        }
    
    
`;

export const TimelineContent = styled.div`
    padding: 10px 20px;
    background: #2a3439;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-size: 20px;
    color: #e5e4e2;
    text-align: ${({even}) => (even ? 'right' : 'left')};

    @media screen and (max-width: 768px) {
        text-align: left;
        margin-left: 40px;
    }
`;

export const ExperienceContainer = styled.div`
    background: linear-gradient(135deg, #2a3439, #0f0f0f);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 0 30px;
    position: relative;
    z-index: 1;
`;

export const ExperienceContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ExperienceH1 = styled.h1`
    color: #800000;
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
    color: #e5e4e2;
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