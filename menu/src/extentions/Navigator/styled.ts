import styled from 'styled-components';
import { device } from 'Utils/adaptation';

export const Ul = styled.ul`
	list-style-type: none;
	text-decoration: none;    
`;

export const Li = styled.li`
	color: #232226;
	display: inline-block;
	float: right;
	font-size: 1.6em;
	height: 100%;
	line-height: 45px;

	&:first-child {
		margin-right: -31px;
	}
	
	margin-right: 40px;
`;

export const Nav = styled.nav`
	box-sizing: border-box;
	font-size: 1em;
	height: 45px;
	margin-top: 23px;
	position: absolute;

	a {
		text-decoration: none;
		color: inherit;
	}

	@media ${device.laptop} {
		font-size: 30px;
		transform:rotate(-90deg) translateX(-100%);
		transform-origin: left center;
		left: 5.5vw;
		padding-right: 0;
	}
`;

export const Logo = styled.img`
	width: 79px;
	height: 73px;
	content: 'logo here :)';
	margin: -10px 0 0 0;

	@media ${device.laptop} {
		transform-origin: left center;
		transform:rotate(90deg) translateX(-100%);
		margin: 26px 0 0 96px;
	}
`;