import styled from 'styled-components'

export const FooterContainer = styled.footer`
    background: #0a192f;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    padding: 0 30px;
    position: relative;
    z-index: 1;
`;

export const FooterContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FooterText = styled.p`
    color: #8892b0;
    font-size: 16px;
    text-align: center;
`;