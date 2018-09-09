import styled from 'styled-components';

export const Wrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
    justify-content: center;
    
    h1 {
        color: white;
    }`;
export const Container = styled.div`
	display: flex;
	flex-direction: column;
    align-items: center;`;
export const VerticalAlignment = styled.div`
    background-color: grey;
    padding: 80px 200px;

    p {
        font-family: roboto_slabregular;
  		color: white;
		font-size: 24px;
		line-height: 27px;
		padding: 10px 0 0 4px;
		letter-spacing: 0.2px;
    }
`;