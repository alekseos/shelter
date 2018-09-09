import styled from 'styled-components';

export const ProcessContainer = styled.div`
  display: flex;
  margin: 0 auto;

  height: 100%;
  -webkit-box-align: center;
  align-items: center;
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
  font-size: 20px;
`;
export const Count = styled.span`
  background-color: blue;
  border-radius: 40px;
  padding: 5px 10px 5px 10px;
  color: white;
  margin: 0 10px 0 0;
`;
export const ProcessDescription = styled.div`
  margin: 20px 0 0 0;
  max-width: 100px;
  text-align: center;
`;
export const ProcessItem = styled.div`
  height: 170px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const ProcessItemContainer = styled.div``;