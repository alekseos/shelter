import styled from 'styled-components';
import { device } from 'Utils/adaptation';

export const ProcessContainer = styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  height: 100%;
  width: 100%;
`;
export const ProcessSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100px;
    align-items: center;
  }
`;
export const ProcessTitle = styled.p`
  font-weight: 700;
  font-size: 1.6em;
  line-height: 1.4em;
`;
export const Count = styled.span`
  background-color: blue;
  border-radius: 40px;
  color: white;
  padding: 10px 20px;
  margin: 0 10px 0 0;
`;
export const ProcessDescription = styled.div`
  margin: 20px 0 0 0;
  max-width: 100px;
  text-align: center;
`;
export const ProcessItem = styled.div.attrs({
  className: 'process__item'
})`
  align-items: center;
  display: flex;
  height: 170px;
  flex-direction: column;
  justify-content: flex-end;

  :first-child {
    margin: 20px 0 0 0;
  }

  @media ${device.laptop} {
    height: 10em;
  }
`;
export const ProcessItemContainer = styled.div``;