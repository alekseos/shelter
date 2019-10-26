import styled from 'styled-components';
import { device } from 'Utils/adaptation';

export const Wrapper = styled.div`
	margin: 0;
`;

export const NavContainer = styled.div`
	line-height: 0;
`;

export const Content = styled.div`
	height: 95vh;

	@media ${device.laptop} {
		margin: 0 220px;
	}
`;
    
export const SliderContainer = styled.div`
	font-size: 2em;
	line-height: 0;
	position: absolute;
	right: 0;
`;

export const Slider = styled.nav`
  @media ${device.laptop} {
		height: 45px;
		padding-right: 26vh;
		transform-origin: left center;
		transform:rotate(-270deg) translateX(-100%);
		box-sizing: border-box;
		position: absolute;
		padding-right: 0;
		width: 94vh;
		height: 10px;
		left: -168px;
		font-size: 25px;
	}
`;