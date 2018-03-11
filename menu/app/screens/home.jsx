import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;`;
const OfferContainer = styled.div`
  flex: 1;
  position: relative`;
const Offer = styled.div`
  position: absolute;
  left: 100px;
  font-family: latoblack`;
const H1 = styled.h1`
	line-height: 30px;
  font-size: 85px;
  letter-spacing: 4px;`;
const Description = styled.div`
	font-family: roboto_slabregular;
  width: 400px;
  color: #908f8f;`;
const ImageContainer  = styled.div`
  flex: 1;`;
const Image = styled.img`
  background: url('../app/images/hi.png');
  height: 480px;
  width: 494px;
  content: 'Hi, visitors! Here should be an img :)';
  `;
const Button = styled.div`
  background-color: blue;
  color: white;
  border-radius: 65px;
  width: inherit;
  font-family: roboto_slabregular;
  padding: 10px 20px;
  display: inline-block;
  margin: 30px 0 0 0;
  cursor: pointer;
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
        <Button>
          Let's start
        </Button>
      </Offer>
    </OfferContainer>

    <ImageContainer>
      <Image />
    </ImageContainer>
	</Wrapper>
};
