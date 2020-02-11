import styled from 'styled-components';
import { device } from 'Utils/adaptation';

export const ContactsContainer = styled.div`
	align-items: center;
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: center;

	@media ${device.laptop} {
		flex-direction: row;
	}
`;

export const RightPart = styled.div`
	flex-direction: column;
	margin: 0 50px;
	width: 100%;
`;

export const LeftPart = styled.div`
	flex-direction: column;
	margin: 0 50px 50px;
	width: 100%;

	div {
		align-items: center;
    display: flex;
    justify-content: space-between;
		margin: -40px 0 0 0;
	}

	a {
		text-decoration: none;
	}

	p {
		font-family: roboto_slabregular;
		color: #908f8f;
		font-size: 1.6em;
    line-height: 1.6em;
		letter-spacing: 0.2px;
		margin: 0 0 0 0;
	}
`;