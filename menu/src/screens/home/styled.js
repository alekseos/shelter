import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const OfferContainer = styled.div`
  flex: 1;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Offer = styled.div`
  position: absolute;
  left: 100px;
  font-family: latoblack;
  margin: -45px 0 0 0;

  /* @media (min-width: 1800px) and (min-height: 1000px) { */
    margin: -22px 0px 0px 21px;
    padding: 67px 0 0 0;
  /* } */
`;

export const H1 = styled.h1`
	line-height: 40px;
  font-size: 85px;
  letter-spacing: 2px;
  color: #232226;
  
  /* @media (min-width: 1800px) and (min-height: 1000px) { */
	  line-height: 38px;
    font-size: 112px;
    letter-spacing: 2.7px;
  /* } */
`;

export const Description = styled.div`
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

export const ImageContainer = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Image = styled.img`
  @media (min-width: 1860px) and (min-height: 800px) {
    background: url('../src/images/hi.png');
    content: 'Hi, visitors! Here should be an img :)';
    height: 480px;
    width: 494px;
    background-size: 100% 100%;
    margin: 115px 0px 0px -274px;
    height: 690px;
    width: 711px;
  }
`;