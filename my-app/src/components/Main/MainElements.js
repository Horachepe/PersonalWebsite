import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Section = styled.section`
    padding: 100px 20px;
        background: linear-gradient(135deg, #2a3439, #0f0f0f);
    color: #e5e4e2;

    &:nth-child(even) {
        background: linear-gradient(135deg, #2a3439, #0f0f0f);
    }
`;

export const SectionTitle = styled.h1`
    color: #b22222;
    font-size: 48px;
    text-align: center;
    margin-bottom: 24px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 34px;
    }
`;

export const SectionContent = styled.div`
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    font-size: 24px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;
