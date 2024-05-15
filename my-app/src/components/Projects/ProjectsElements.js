import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    background: #0a192f;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 30px;
    position: relative;
    z-index: 1;
`;

export const ProjectsContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProjectsH1 = styled.h1`
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

export const Project = styled.div`
    margin-top: 24px;
    background: #112240;
    padding: 16px;
    border-radius: 8px;
    max-width: 800px;
    width: 100%;
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
`;

export const ProjectTitle = styled.h2`
    color: #64ffda;
    font-size: 24px;
`;

export const ProjectDescription = styled.p`
    color: #8892b0;
    font-size: 18px;
    margin-top: 8px;
`;