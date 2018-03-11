import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
	line-height: 30px;
  font-size: 85px;`;
const Description = styled.div`
	font-family: roboto_slabregular;`;

export const Home = () => {
	return <div>
		<H1>Design</H1>
		<H1>Development</H1>
		<H1>Promotion</H1>
		<Description>
			You have been looking for and found!
			Our team will help your bussines
			to rise to a new level.
		</Description>
	</div>
};
