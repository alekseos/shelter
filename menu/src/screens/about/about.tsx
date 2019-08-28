import * as React from 'react';

import { AboutContainer, Image, ImageContainer, Information } from './styled';

export const About = () => {
    return <AboutContainer>
        <ImageContainer>
            <Image />
        </ImageContainer>

        <Information>
            <p>
                <strong>DDP studio</strong> is design agency with office in the creative hubs 
                of Saint-Petersburg, Russia. In today's net-savvy world is 
                has become common for any business to have a website which 
                they use mostly for advertising their product and services.
            </p>

            <p>
                <strong>The companies</strong> were either boutique and beautiful, but not 
                managing to work on a few projects or of a massive scale and 
                relationships. We want to help you cross this line. And we like 
                to travel.
            </p>
        </Information>
    </AboutContainer>
}