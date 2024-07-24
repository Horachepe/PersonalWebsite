import React from 'react';
import { HomeContainer, HomeContent, HomeH1, AnimatedTitle} from './HomeElements';

const Home = () => {
    return (
        <HomeContainer>
            <HomeContent>
                <HomeH1>Jose M. Garcia</HomeH1>
                <AnimatedTitle>
                    Web Developer
                </AnimatedTitle>
            </HomeContent>
        </HomeContainer>
    );
};

export default Home;