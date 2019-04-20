import styled from 'styled-components';


export const Ul = styled.ul`
	list-style-type: none;
    text-decoration: none;    
`;

export const Li = styled.li`
	display: inline-block;
	margin-right: 20px;
	float: right;
	height: 100%;
	line-height: 45px;
	color: #232226;

	&:first-child {
		margin-right: -31px;
	}
	
	/* @media (min-width: 1800px) and (min-height: 1000px) { */
		margin-right: 40px;
	/* } */
	
`;

export const Nav = styled.nav`
	height: 45px;
	padding-right: 26vh;
	-webkit-transform-origin: left center;
    -webkit-transform:rotate(-90deg) translateX(-100%);
	box-sizing: border-box;

	a {
		text-decoration: none;
		color: inherit;
	}
	
	font-size: 30px;
	margin-top: 23px;
	position: absolute;
	left: 5.5vw;
	padding-right: 0;
	width: 94vh;

	/* @media (max-width: 700px) and (min-height: 1000px) { */

`;

export const Logo = styled.img`
	-webkit-transform-origin: left center;
    -webkit-transform:rotate(90deg) translateX(-100%);
	width: 79px;
	height: 73px;
	content: 'logo here :)';
	margin: 26px 0px 0px 96px;
`;