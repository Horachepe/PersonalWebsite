import styled from 'styled-components';

export const SocialTitle = styled.p`
    color: #b22222;
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
    flex-wrap: wrap;
    a {
        margin: 10px;
    }
`;

export const ProfileImage = styled.img`
    width: 100%;
    max-width: 500px;
    border-radius: 10px;
    margin-right: 20px;

    @media screen and (max-width: 768px) {
        margin-right: 0;
        margin-bottom: 20px;
    }
`;

export const AboutContainer = styled.div`
        background: linear-gradient(135deg, #2a3439, #0f0f0f);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
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

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const AboutH1 = styled.h1`
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

export const AboutP = styled.p`
    margin-top: 24px;
    color: #e5e4e2;
    font-size: 24px;
    text-align: center;
    max-width: 800px;
    padding: 0 20px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
        padding: 0 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
        padding: 0 20px;
    }
`;