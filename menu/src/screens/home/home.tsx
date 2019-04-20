import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button.tsx';
import { Description, H1, Image, ImageContainer, Offer, OfferContainer, Wrapper } from './styled.ts';

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
