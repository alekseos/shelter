import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  padding: 20px 0;
`;

export const MenuContainer = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const ItemActive = styled.div`
  background-color: blue;
  border-radius: 32px;
  color: white;
  cursor: pointer;
  flex: 1 0;
  padding: 10px 20px;
  margin: 0 10px;
  text-align: center;
  width: 100px;
  transition: all 2s ease-in-out;
`;

export const Item = styled.div`
  color: black;
  cursor: pointer;
  flex: 1 0;
  padding: 10px 20px;
  margin: 0 10px;
  text-align: center;
  width: 100px;
  transition: all .1s ease-in-out;
  border-radius: 32px;

  &:hover {
    background: blue;
    border-radius: 32px;
    color: white;
    opacity: .5;
  }
`;