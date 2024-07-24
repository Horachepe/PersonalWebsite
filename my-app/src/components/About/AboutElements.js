import styled from 'styled-components';

export const SocialTitle = styled.p`
    color: #64ffda;
    font-size: 18px;
    text-align: center;
    margin-bottom: 15px;
`;

export const SocialIconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    width: 100%;
`;

export const IconsRow = styled.div`
    display: flex;
    justify-content: center;
    a {
        margin: 0 10px;
    }
`;

export const ProfileImage = styled.img`
    width: 50%;
    border-radius: 10px;
    margin-right: 20px;
`;

export const AboutContainer = styled.div`
    background: #0a192f;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 30px;
    position: relative;
    z-index: 1;
`;

export const AboutContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    padding: 8px 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`;

export const AboutH1 = styled.h1`
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

export const AboutP = styled.p`
    margin-top: 24px;
    color: #8892b0;
    font-size: 24px;
    text-align: center;
    max-width: 800px;
    padding: 0 80px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;