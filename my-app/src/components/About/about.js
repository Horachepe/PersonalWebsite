import React from 'react';
import { AboutContainer, AboutContent, AboutH1, AboutP } from './AboutElements';

const About = () => {
    return (
        <AboutContainer>
            <AboutContent>
                <AboutH1>About Me</AboutH1>
                <AboutP>
                    I am a 21-year-old junior at the University of Texas at Dallas pursuing a degree in Computer Science. I have been a part of ACM research in 2023, publishing two papers at the IEEE 2024 VR conference. I also participated in HackUTD 2023 and ACM Projects 2024, placing 2nd out of 11 teams. Currently, I work as a monitor in a computer lab at UTD, where I help other students with their technical problems. I am also taking part of a full stack web developer training as a lab associate.
                </AboutP>
            </AboutContent>
        </AboutContainer>
    );
};

export default About;