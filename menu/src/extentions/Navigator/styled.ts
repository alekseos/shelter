import styled from 'styled-components';
import { device } from 'Utils/adaptation';

export const Nav = styled.nav`
	box-sizing: border-box;
	font-size: 1em;
	height: 45px;
	flex: 1;

	a {
		text-decoration: none;
		color: inherit;
	}

	@media ${device.laptop} {
		transform:rotate(-90deg) translateX(calc(-100% + 120px));
		transform-origin: left center;
		width: 100vh;
		padding: 0 60px;
	}
`;

export const Ul = styled.ul`
	align-items: center;
	display: flex;
	justify-content: space-between;
	padding-inline-start: 0;
	list-style-type: none;
	text-decoration: none;

	@media ${device.laptop} {
		flex-direction: row-reverse;
	}
`;

export const Li = styled.li`
	color: #232226;
	display: inline-block;
	font-size: 1.6em;
	height: 100%;
	line-height: 45px;
`;

export const Logo = styled.img`
	@media ${device.laptop} {
		/* transform-origin: left center; */
		transform:rotate(90deg);
	}
`;