import React from 'react';
import { ExperienceContainer, ExperienceContent, ExperienceH1, Timeline, TimelineItem, TimelineContent, TimelineCircle } from './ExperienceElements';

const Experience = () => {
    return (
        <ExperienceContainer>
            <ExperienceContent>
                <ExperienceH1>Experience</ExperienceH1>
                    <Timeline>
                        <TimelineItem>
                            <TimelineCircle />
                            <TimelineContent>
                                <strong>Current Role:</strong> Working as a computer lab monitor at UTD, providing technical support to fellow students.
                                Participating in full-stack web development training as a lab associate.
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineContent>
                                <strong>ACM Projects (2024):</strong> Collaborated with a team to create a 2D top-down rouge-like video game in unity that placed 2nd out of 11 teams.
                            </TimelineContent>
                            <TimelineCircle />
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineCircle />
                            <TimelineContent>
                                <strong>HackUTD (2023):</strong> Participated in one of the biggest hackathons in the country.
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineContent>
                                <strong>ACM Research (2023):</strong> Co-authored two papers published at the IEEE 2024 VR conference as part of ACM research in 2023.
                            </TimelineContent>
                            <TimelineCircle />
                        </TimelineItem>
                    </Timeline>
            </ExperienceContent>
        </ExperienceContainer>
    );
}

export default Experience;