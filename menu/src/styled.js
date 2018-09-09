import styled from 'styled-components';

export const Wrapper = styled.div`
	margin: -50px 20px 0 20px;

	/* @media (min-width: 1800px) and (min-height: 1000px) { */
		margin: 0;
	/* } */
`;

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

export const NavContainer = styled.div`
	line-height: 0;
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
	
	/* @media (min-width: 1800px) and (min-height: 1000px) { */
		font-size: 30px;
		margin-top: 23px;
		position: absolute;
		left: 106px;
		padding-right: 0;
		width: 94vh;
	}
	/* } */
`;

export const Logo = styled.img`
	-webkit-transform-origin: left center;
    -webkit-transform:rotate(90deg) translateX(-100%);
	width: 79px;
	height: 73px;
	content: 'logo here :)';
	margin: 26px 0px 0px 96px;
`;

export const Content = styled.div`
	margin: 0 80px;
	height: 95vh;

	/* @media (min-width: 1800px) and (min-height: 1000px) { */
		margin: 0 220px;

		height: 95vh;
		/* display: flex;
		flex-direction: column;
		-webkit-box-align: center;
		align-items: center;
		-webkit-box-pack: center;
		justify-content: center; */
	/* } */
`;
    
export const SliderContainer = styled.div`
	line-height: 0;
	position: absolute;
    right: 0;
`;

export const Slider = styled.nav`
	height: 45px;
	padding-right: 26vh;
	-webkit-transform-origin: left center;
    -webkit-transform:rotate(-270deg) translateX(-100%);
	box-sizing: border-box;

	/* @media (min-width: 1800px) and (min-height: 1000px) { */
		position: absolute;
		padding-right: 0;
		width: 94vh;
		height: 10px;
		left: -168px;
    	font-size: 25px;
	}
	/* } */
`;