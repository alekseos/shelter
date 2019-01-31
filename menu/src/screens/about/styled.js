import styled from 'styled-components';

export const AboutContainer = styled.div`
	height: 100%;
	position: relative;
`;

export const Image = styled.img`
	background: url('../../src/images/team.png');
	width: 1350px;
	height: 900px;      
	content: 'Hi, visitors! Here should be an img :)';
	background-size: 100% 100%;
	text-indent: 100vw;
	border: 'none';
`;

export const ImageContainer = styled.div`

`;

export const Information = styled.div`
	width: 500px;
	background-color: rgba(255, 255, 255, .6);
	position: absolute;
	font-size: 17px;
    line-height: 28px;
    padding: 10px 30px;
	letter-spacing: 0.2px;
	right: 0;
	bottom: 0;
	font-weight: 500;
`;