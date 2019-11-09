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
		font-size: 30px;
		left: 5.5vw;
		padding-right: 0;
		transform:rotate(-90deg) translateX(-100%);
		transform-origin: left center;
		margin-top: 23px;
	}
`;

export const Ul = styled.ul`
	align-items: center;
	display: flex;
	justify-content: space-between;
	padding-inline-start: 0;
	list-style-type: none;
	text-decoration: none;
`;

export const Li = styled.li`
	color: #232226;
	display: inline-block;
	font-size: 1.6em;
	height: 100%;
	line-height: 45px;

	@media ${device.laptop} {
		float: right;
		margin-right: 40px;

		&:first-child {
			margin-right: -31px;
		}
	}
`;

export const Logo = styled.img`
	@media ${device.laptop} {
		transform-origin: left center;
		transform:rotate(90deg) translateX(-100%);
		margin: 26px 0 0 96px;
	}
`;