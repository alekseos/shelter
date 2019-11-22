import image from 'Images/hi.png';
import styled from 'styled-components';
import { device } from 'Utils/adaptation';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const OfferContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  position: relative;
`;

export const Offer = styled.div`
  font-family: latoblack;
`;

export const H1 = styled.h1`
  color: #232226;
  font-size: 4.5em;
  letter-spacing: .02em;
  line-height: .45em;
`;

export const Description = styled.div`
  color: #908f8f;
  font-size: 1.8em;
	font-family: roboto_slabregular;
  letter-spacing: 1.2px;
  line-height: 1.3em;
  padding: 10px 0 0 4px;

  @media ${device.laptop} {
    font-size: 1.2em;
    width: 600px;
  }
`;

export const ImageContainer = styled.div`
  display: none;

  @media ${device.laptop} {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
  }
`;

export const Image = styled.div`  
  @media ${device.laptop} {
    content: 'Hi, visitors! Here should be an img :)';
    background: url(${image});
    background-size: cover;
    height: 100%;
    width: 100%;
  }
`;
