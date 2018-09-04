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
    margin: -22px 0px 0px 21px;
    padding: 67px 0 0 0;
  /* } */
  `;
const H1 = styled.h1`
	line-height: 40px;
  font-size: 85px;
  letter-spacing: 2px;
  
  /* @media (min-width: 1800px) and (min-height: 1000px) { */
	  line-height: 38px;
    font-size: 112px;
    letter-spacing: 2.7px;
  /* } */
  `;
const Description = styled.div`
	font-family: roboto_slabregular;
  width: 400px;
  color: #908f8f;

  /* @media (min-width: 1800px) and (min-height: 1000px) { */
    font-size: 24px;
    width: 430px;
    line-height: 27px;
    padding: 10px 0 0 4px;
    letter-spacing: 0.2px;
  /* } */
  `;
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
      background-size: 100% 100%;
      margin: 115px 0px 0px -274px;
      height: 690px;
      width: 711px;
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
          You have been looking for and found! <br />
          Our team will help your bussines <br />
          to rise to a new level. <br />
        </Description>

        <Link exact to="/portfolio" activeClassName="active">
          <Button
            content={'Let\'s start?'}
            style={{ margin: '54px 0 0 7px'}}
          />
        </Link>
      </Offer>
    </OfferContainer>

    <ImageContainer>
      <Image />
    </ImageContainer>
	</Wrapper>
};
