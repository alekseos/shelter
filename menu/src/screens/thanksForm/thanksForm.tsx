import React from 'react';

import { Container, VerticalAlignment, Wrapper } from './styled.ts';

export const ThanksForm = () => {
    return <Wrapper>
        <Container>
            <VerticalAlignment>
                <h1>
                    Thank you for your request!
                </h1>
                <p>We'll response you in recent time.</p>
            </VerticalAlignment>
        </Container>
    </Wrapper>
};