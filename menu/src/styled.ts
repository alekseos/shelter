import styled from 'styled-components';

export const Wrapper = styled.div`
	margin: -50px 20px 0 20px;

	/* @media (min-width: 1800px) and (min-height: 1000px) { */
		margin: 0;
	/* } */
`;

export const NavContainer = styled.div`
	line-height: 0;
`;

export const Content = styled.div`
	margin: 0 80px;
	height: 95vh;

	/* @media (min-width: 1800px) and (min-height: 1000px) { */
		margin: 0 220px;

		height: 95vh;
		/* display: flex;
		flex-direction: column;
		-webkit-box-align: center;
		align-items: center;
		-webkit-box-pack: center;
		justify-content: center; */
	/* } */
`;
    
export const SliderContainer = styled.div`
	line-height: 0;
	position: absolute;
    right: 0;
`;

export const Slider = styled.nav`
	height: 45px;
	padding-right: 26vh;
	-webkit-transform-origin: left center;
    -webkit-transform:rotate(-270deg) translateX(-100%);
	box-sizing: border-box;

	/* @media (min-width: 1800px) and (min-height: 1000px) { */
		position: absolute;
		padding-right: 0;
		width: 94vh;
		height: 10px;
		left: -168px;
    	font-size: 25px;
	/* } */
`;