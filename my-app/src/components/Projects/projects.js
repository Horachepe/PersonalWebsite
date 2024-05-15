import React from 'react';
import { ProjectsContainer, ProjectsContent, ProjectsH1, Project, ProjectTitle, ProjectDescription } from './ProjectsElements';

const Projects = () => {
    return (
        <ProjectsContainer>
            <ProjectsContent>
                <ProjectsH1>Projects</ProjectsH1>
                <Project>
                    <ProjectTitle>Project 1</ProjectTitle>
                    <ProjectDescription>Description of Project 1...</ProjectDescription>
                </Project>
                <Project>
                    <ProjectTitle>Project 2</ProjectTitle>
                    <ProjectDescription>Description of Project 2...</ProjectDescription>
                </Project>
                <Project>
                    <ProjectTitle>Project 3</ProjectTitle>
                    <ProjectDescription>Description of Project 3...</ProjectDescription>
                </Project>
            </ProjectsContent>
        </ProjectsContainer>
    );
};

export default Projects;