import styled from 'styled-components';

export const ProjectsContainer = styled.div`
        background: linear-gradient(135deg, #2a3439, #0f0f0f);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 0 30px;
    position: relative;
    z-index: 1;
`;

export const ProjectsContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: relative;
    padding: 8px 24px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: center
`;

export const ProjectsH1 = styled.h1`
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

export const Project = styled.div`
    background: #2a3439;
    padding: 16px;
    border-radius: 8px;
    max-width: 360px;
    width: calc(33.333% - 16px);
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
    margin: 1.5% 1.5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 150px;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    @media screen and (max-width: 1024px) {
        width: calc(50% - 16px);
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
    
    &:hover {
        transform: translateY(-10px) scale(1.03);
        box-shadow: 0 20px 40px -10px rgba(2, 12, 27, 0.8);
    }
`;

export const ProjectTitle = styled.h2`
    color: #b22222;
    font-size: 24px;
    text-align: center;
`;

export const ProjectDescription = styled.p`
    color: #e5e4e2;
    font-size: 18px;
    margin-top: 8px;
    text-align: center;
`;

export const ProjectsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px; 
    align-items: stretch;

    @media screen and (max-width: 1024px) {
        justify-content: space-around;
    }
`;
