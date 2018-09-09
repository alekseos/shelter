import styled from 'styled-components';

export const ContactsContainer = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const LeftPart = styled.div`
	flex-direction: column;
	margin: 0 50px;
`;

export const RightPart = styled.div`
	flex-direction: column;
	margin: 0 50px;

	a {
		text-decoration: none;
	}

	p {
		font-family: roboto_slabregular;
  		color: #908f8f;
		font-size: 24px;
		line-height: 27px;
		padding: 10px 0 0 4px;
		letter-spacing: 0.2px;
	}
`;