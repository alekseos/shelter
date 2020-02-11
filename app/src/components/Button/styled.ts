import styled from 'styled-components';
import { device } from 'Utils/adaptation';

export const ButtonContainer = styled.div`
  background-color: blue;
  border-radius: 1em;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: roboto_slabregular;
  font-size: 2em;
  margin: 30px auto 0 auto;
  min-width: 100px;
  padding: .4em 1.3em .4em 1.3em;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: blue; 
  letter-spacing: 0.2px;

  @media ${device.laptop} {
    font-size: 1.2em;
  }
`;

export const WrapperContainer = styled.section`
  display: flex;
`;