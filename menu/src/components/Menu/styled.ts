import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  padding: 20px 0;
  flex-wrap: wrap;
  flex: 1;
`;

export const MenuContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
`;

export const ItemActive = styled.div`
  background-color: blue;
  border-radius: 32px;
  color: white;
  cursor: pointer;
  flex: 1 0 300px;
  padding: 10px 20px;
  margin: 0 10px;
  text-align: center;
  transition: all 2s ease-in-out;
  width: 100px;
`;

export const Item = styled.div`
  border-radius: 32px;
  color: black;
  cursor: pointer;
  flex: 1 0 300px;
  margin: 0 10px;
  padding: 10px 20px;
  text-align: center;
  transition: all .1s ease-in-out;
  width: 100px;


  &:hover {
    background: blue;
    border-radius: 32px;
    color: white;
    opacity: .5;
  }
`;