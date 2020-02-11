import styled from 'styled-components';
import { device } from 'Utils/adaptation';

export const PagerContainer = styled.div`
	align-items: center;
	display: flex;
`;

export const Arrow = styled.div`
	cursor: pointer;
	flex: 1;

	&:hover polyline,
	&:focus polyline {
		stroke-width: 3;
	}

	&:active polyline {
		stroke-width: 6;
		transition: all 100ms ease-in-out;
	}

	polyline {
		transition: all 250ms ease-in-out;
	}
`;

export const PageNumber = styled.div`
	color: #99999a;
	flex: 1;
	font-size: 2em;
	text-align: center;
`;

export const Hr = styled.div`
	border-bottom: .5px solid #99999a;
	flex: 4;
	height: .5px;
`;