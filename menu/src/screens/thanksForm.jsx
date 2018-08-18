import React from 'react';
import styled from 'styled-components';

export const ThanksForm = () => {
    return <Wrapper>
        <Container>
            <VerticalAlignment>
                <h3>
                    Thank you for your request. We'll response you in recent time.
                </h3>
            </VerticalAlignment>
        </Container>
    </Wrapper>
};

const Wrapper= styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
    justify-content: center;
    
    h3 {
        color: white;
    }`;
const Container = styled.div`
	display: flex;
	flex-direction: column;
    align-items: center;`;
const VerticalAlignment = styled.div`
    background-color: grey;
`;