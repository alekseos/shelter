import image from 'Images/team.png';
import styled from 'styled-components';
import { device } from 'Utils/adaptation';

export const AboutContainer = styled.div`
	height: 100%;
	position: relative;
`;

export const Image = styled.div`
	background: url(${image});
	background-size: 100% 100%;
	height: 35vh;      
	text-indent: 100vw;
	background-size: cover;
`;

export const ImageContainer = styled.div`

`;

export const Information = styled.div`
	background-color: rgba(255, 255, 255, .6);
	font-weight: 500;
	flex: 1;
	letter-spacing: 0.2px;
	font-size: 1.4em;
	line-height: 1.3em;
	width: 100%;

	@media ${device.laptop} {
		bottom: 0;
		right: 0;
		position: absolute;
		padding: 10px 30px;
	}
`;