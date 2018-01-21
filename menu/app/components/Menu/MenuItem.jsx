import React from 'react';

import styled from 'styled-components';

const Item = styled.div`
  background-color: blue;
  border-radius: 32px;
  color: white;
  cursor: pointer;
  flex: 1 0;
  padding: 10px;
  margin: 0 10px;
`

const MenuItem = ({
  title,
  key,
  onClick
}) => {
  return <Item key={key} onClick={onClick}>{title}</Item>
}

export default MenuItem;
