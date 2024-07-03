import React from 'react';
import { ExperienceContainer, ExperienceContent, ExperienceH1, ExperienceP } from './ExperienceElements';

const Experience = () => {
    return (
        <ExperienceContainer>
            <ExperienceContent>
                <ExperienceH1>Experience</ExperienceH1>
                <ExperienceP>
                    <strong>Current Role:</strong> Working as a monitor in a computer lab and taking part of a full stack web developer training as a lab associate.<br />
                    <strong>ACM Projects (2024):</strong> Collaborated with a team to create a project that placed 2nd out of 11 teams.<br />
                    <strong>HackUTD (2023):</strong> Participated in one of the biggest hackathons in the country.<br />
                    <strong>ACM Research (2023):</strong> Published two papers at the IEEE 2024 VR conference.<br />
                </ExperienceP>
            </ExperienceContent>
        </ExperienceContainer>
    );
}

export default Experience;