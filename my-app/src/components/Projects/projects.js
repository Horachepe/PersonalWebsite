import React from 'react';
import { ProjectsContainer, ProjectsContent, ProjectsH1, ProjectsGrid, Project, ProjectTitle, ProjectDescription } from './ProjectsElements';

const Projects = () => {
    return (
        <ProjectsContainer>
            <ProjectsContent>
                <ProjectsH1>Projects</ProjectsH1>
                <ProjectsGrid>
                    <Project>
                        <ProjectTitle> <a rel="noreferrer" href="https://github.com/SowreshMS/EXPLORING-INTERACTIVE-AI-VIRTUAL-STREAMERS-IN-2D-AND-VR-environments" target="_blank">AI Virtual Streamer</a></ProjectTitle>
                        <ProjectDescription>Unity ML-Agents were used to create an autonomous V-Tuber who can play video games and a text-to-speech API was used to allow avatar interactions with the livestream chat.</ProjectDescription>
                    </Project>
                    <Project>
                        <ProjectTitle><a rel="noreferrer" href="https://ieeexplore.ieee.org/document/10536542" target="_blank">AI Virtual Streamer 2.0</a></ProjectTitle>
                        <ProjectDescription>The V-Tuber was updgraded to a virtual environment where the user is able to tactically interact and communicate with the agent using B-haptics technologies on Unity's platform.</ProjectDescription>
                    </Project>
                    <Project>
                        <ProjectTitle><a rel="noreferrer" href="https://github.com/acm-projects/RPG" target="_blank">RPG!</a></ProjectTitle>
                        <ProjectDescription>A 2D top-down rouge-like video game where the user traverses multiple environments and encounters multiple different enemies.</ProjectDescription>
                    </Project>
                    <Project>
                        <ProjectTitle>Athlima</ProjectTitle>
                        <ProjectDescription>A web application that is targeted towards sports fanatics and is used to track different sports. Work in progress.</ProjectDescription>
                    </Project>
                    <Project>
                        <ProjectTitle>Hair Salon Webpage</ProjectTitle>
                        <ProjectDescription>A webpage used to display the portfolio of a hair salon, while increasing the online personality of the business. Work in progress.</ProjectDescription>
                    </Project>
                    
                </ProjectsGrid>
            </ProjectsContent>
        </ProjectsContainer>
    );
};

export default Projects;