import styled from 'styled-components';

export const Hr = styled.div`
	border-bottom: .5px solid #99999a;
	margin: 0 0 0 67.4px;
	width: 277px;
`;

export const StartPage = styled.div`
	margin: 0;
	color: #99999a;
`;

export const EndPage = styled.div`
	margin: 0 0 0 394px;
	color: #99999a;
`;

export const Arrow = styled.div`
	cursor: pointer;
	position: absolute;
	top: 50%;
	margin-top: -45px;
	margin-left: -35px;

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

export const PagerContainer = styled.div`
	margin: 0 0 0 225px;
`;

export const ImgContainer = styled.div`
`;