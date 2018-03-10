import React from 'react';
import styled from 'styled-components';
const ItemActive = styled.div`
  background-color: blue;
  border-radius: 32px;
  color: white;
  cursor: pointer;
  flex: 1 0;
  padding: 10px;
  margin: 0 10px;
  text-align: center;
  width: 100px;
  transition: all 2s ease-in-out;`
const Item = styled.div`
  color: black;
  cursor: pointer;
  flex: 1 0;
  padding: 10px;
  margin: 0 10px;
  text-align: center;
  width: 100px;
  transition: all 2s ease-in-out;`

const MenuItem = ({
  title,
  onClick,
  active = null,
}) => {
  if (active !== null) {
    return <ItemActive onClick={() => onClick(title)}>{title}</ItemActive>
  } else {
    return <Item onClick={() => onClick(title)}>{title}</Item>
  }
}

export default MenuItem;
