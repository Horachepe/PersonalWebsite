import React from 'react';
import { HomeContainer, HomeContent, HomeH1, HomeP } from './HomeElements';

const Home = () => {
    return (
        <HomeContainer>
            <HomeContent>
                <HomeH1>Jose M. Garcia</HomeH1>
                <HomeP>
                    Web Developer
                </HomeP>
            </HomeContent>
        </HomeContainer>
    );
};

export default Home;