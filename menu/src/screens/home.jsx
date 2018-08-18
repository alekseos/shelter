import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../components/Button/Button.jsx';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;`;
const OfferContainer = styled.div`
  flex: 1;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;`;
const Offer = styled.div`
  position: absolute;
  left: 100px;
  font-family: latoblack;
  margin: -45px 0 0 0;

  /* @media (min-width: 1800px) and (min-height: 1000px) { */
    margin: -26px 0px 0px 21px;
  /* } */
  `;
const H1 = styled.h1`
	line-height: 40px;
  font-size: 85px;
  letter-spacing: 2px;
  
  /* @media (min-width: 1800px) and (min-height: 1000px) { */
    font-size: 112px;
    letter-spacing: 3px;
  /* } */
  `;
const Description = styled.div`
	font-family: roboto_slabregular;
  width: 400px;
  color: #908f8f;`;
const ImageContainer  = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;`;
const Image = styled.img`
  background: url('../src/images/hi.png');
  height: 480px;
  width: 494px;
  content: 'Hi, visitors! Here should be an img :)';

    	/* @media (min-width: 1800px) and (min-height: 1000px) { */
      height: 650px;
      width: 664px;
      background-size: 100% 100%;
	  /* } */
  `;

export const Home = () => {
	return <Wrapper>
    <OfferContainer>
      <Offer>
        <H1>Design</H1>
        <H1>Development</H1>
        <H1>Promotion</H1>
        <Description>
          You have been looking for and found!
          Our team will help your bussines
          to rise to a new level.
        </Description>

        <Link exact to="/portfolio" activeClassName="active">
          <Button
            content={'Start'}
            style={{margin: '30px 0 0 0'}}
          />
        </Link>
      </Offer>
    </OfferContainer>

    <ImageContainer>
      <Image />
    </ImageContainer>
	</Wrapper>
};
