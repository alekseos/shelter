import image from 'Images/team.png';
import styled from 'styled-components';

export const AboutContainer = styled.div`
	height: 100%;
	position: relative;
`;

export const Image = styled.div`
	background: url(${image});
	background-size: 100% 100%;
	border: 'none';
	height: 50vh;      
	text-indent: 100vw;
	background-size: cover;
`;

export const ImageContainer = styled.div`

`;

export const Information = styled.div`
	background-color: rgba(255, 255, 255, .6);
	bottom: 0;
	font-size: 17px;
	font-weight: 500;
	flex: 1;
	letter-spacing: 0.2px;
	line-height: 28px;
	padding: 10px 30px;
	position: absolute;
	right: 0;
	width: 500px;
`;