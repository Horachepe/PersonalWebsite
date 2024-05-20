import React from 'react';
import { MainContainer, Section, SectionTitle, SectionContent } from './MainElements';
import Home from '../Home/home';
import About from '../About/about';
import Experience from '../Experience/experience';
import Projects from '../Projects/projects';

const Main = () => {
    return (
        <MainContainer>
            <Section id="home">
                <Home />
            </Section>
            <Section id="about">
                <About />
            </Section>
            <Section id="experience">
                <Experience />
            </Section>
            <Section id="projects">
                <Projects />
            </Section>
        </MainContainer>
    );
};

export default Main;