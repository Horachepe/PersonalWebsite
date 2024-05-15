import React from 'react';
import { AboutContainer, AboutContent, AboutH1, AboutP } from './AboutElements';

const About = () => {
    return (
        <AboutContainer>
            <AboutContent>
                <AboutH1>About Me</AboutH1>
                <AboutP>
                    I am a 21-year-old junior at the University of Texas at Dallas pursuing a degree in Computer Science with a minor in Information Assurance. I have been part of ACM research in 2023, publishing two papers at the IEEE 2024 VR conference. I also participated in HackUTD 2023 and ACM Projects 2024, placing 2nd out of 11 teams. Currently, I work as a monitor in a computer lab and am learning the .NET framework to build GUI applications.
                </AboutP>
            </AboutContent>
        </AboutContainer>
    );
};

export default About;