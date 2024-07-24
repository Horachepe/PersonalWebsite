import React from 'react';
import { AboutContainer, AboutContent, AboutH1, AboutP, ProfileImage, SocialIconContainer, SocialTitle, IconsRow } from './AboutElements';
import profilePic from '../..//assets/profile-pic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';

const About = () => {
    return (
        <AboutContainer>
            <AboutContent>
                <ProfileImage src={profilePic} alt="Profile Picture" />
                <div>
                    <AboutH1>About Me</AboutH1>
                    <AboutP>
                    I'm a Computer Science major at the University of Texas at Dallas with a background in research and practical application.
My experience demonstrates a balance of academic excellence, research capabilities, and practical skills in software development and technical support.
                    </AboutP>
                </div>
            </AboutContent>
            <SocialIconContainer>
                <SocialTitle>Connect with me</SocialTitle>
                <IconsRow>
                    <a href="https://www.linkedin.com/in/jose-garcia-787664279" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    {/* <a href="www.linkedin.com/in/jose-garcia-787664279" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFilePdf} size="2x" />
                    </a> */}
                </IconsRow>
            </SocialIconContainer>
        </AboutContainer>
    );
};

export default About;