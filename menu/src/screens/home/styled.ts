import image from 'Images/hi.png';
import styled from 'styled-components';
import { device } from 'Utils/adaptation';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  font-size: 30px;
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
  left: 100px;
  margin: -22px 0px 0px 21px;
  padding: 67px 0 0 0;
  position: absolute;
`;

export const H1 = styled.h1`
  color: #232226;
  font-size: 6em;
  letter-spacing: .05em;
  line-height: .3em;
`;

export const Description = styled.div`
  color: #908f8f;
  font-size: 1.4em;
	font-family: roboto_slabregular;
  letter-spacing: 0.2px;
  line-height: 27px;
  padding: 10px 0 0 4px;
  width: 400px;
`;

export const ImageContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const Image = styled.div`  
  @media ${device.laptop} {
    content: 'Hi, visitors! Here should be an img :)';
    background: url(${image}) 105% 55% / 73% 80% no-repeat;
    height: 480px;
    margin: 0 0 0 -274px;
    width: 494px;
  }
`;
