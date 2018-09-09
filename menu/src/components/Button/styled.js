import styled from 'styled-components';

export const ButtonContainer = styled.div`
  background-color: blue;
  color: white;
  border-radius: 65px;
  width: inherit;
  font-size: 24px;
  font-family: roboto_slabregular;
  padding: 10px 20px;
  display: inline-block;
  margin: 30px auto 0 auto;
  cursor: pointer;
  min-width: 100px;
  text-align: center;

  text-decoration: underline;
  -webkit-text-decoration-color: blue; 
  text-decoration-color: blue;

  /* @media (min-width: 1800px) and (min-height: 1000px) { */
  padding: 8px 46px 12px 46px;
  font-size: 22px;
  border-radius: 25px;
  letter-spacing: 0.2px;
  /* } */
`;

export const WrapperContainer = styled.section`
    display: flex;
`;