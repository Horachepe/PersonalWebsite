import React from 'react';
import { ProjectsContainer, ProjectsContent, ProjectsH1, ProjectsGrid, Project, ProjectTitle, ProjectDescription } from './ProjectsElements';

const Projects = () => {
    return (
        <ProjectsContainer>
            <ProjectsContent>
                <ProjectsH1>Projects</ProjectsH1>
                <ProjectsGrid>
                    <Project>
                        <ProjectTitle>Survey Form</ProjectTitle>
                        <ProjectDescription>The goal was to create a survvey form to collect data from users.</ProjectDescription>
                    </Project>
                    <Project>
                        <ProjectTitle>Tribute Page</ProjectTitle>
                        <ProjectDescription>I created a tribute page for myself.</ProjectDescription>
                    </Project>
                    <Project>
                        <ProjectTitle>Technical Documentation Page</ProjectTitle>
                        <ProjectDescription>This project serves as a reference to C++.</ProjectDescription>
                    </Project>
                    <Project>
                        <ProjectTitle>Product Landing Page</ProjectTitle>
                        <ProjectDescription>This is a product landing page for the company LEGO.</ProjectDescription>
                    </Project>
                    <Project>
                        <ProjectTitle>Personal Portfolio Webpage</ProjectTitle>
                        <ProjectDescription>This is a simple Portfolio Webpage.</ProjectDescription>
                    </Project>
                </ProjectsGrid>
            </ProjectsContent>
        </ProjectsContainer>
    );
};

export default Projects;