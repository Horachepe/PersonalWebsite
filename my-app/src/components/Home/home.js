import React from 'react';
import { HomeContainer, HomeContent, HomeH1, HomeP } from './HomeElements';

const Home = () => {
    return (
        <HomeContainer>
            <HomeContent>
                <HomeH1>Welcome to my portfolio</HomeH1>
                <HomeP>
                    Hi, I'm Jose M Garcia, a Computer Science student at the university of Texas at Dallas. Explore my projects and eperiences below.
                </HomeP>
            </HomeContent>
        </HomeContainer>
    );
};

export default Home;