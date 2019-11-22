import styled from 'styled-components';
import { device } from 'Utils/adaptation';

export const Wrapper = styled.div`
	box-sizing: border-box;
	display: flex;
	height: 100vh;
	height: calc(var(--vh, 1vh) * 100);
	flex-direction: column;
	margin: 0;
	padding: 60px;
`;

export const Content = styled.div`
	display: flex;
	flex: 6;
	flex-direction: column;

	@media ${device.laptop} {
		margin: 0 220px;
		height: 95vh;
		transform: translate(0, -84px);
	}
`;

export const Slider = styled.nav`
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: flex-end;
	
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