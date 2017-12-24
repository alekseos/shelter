import React from 'react';

import styled from 'styled-components';

const Item = styled.div`
  background-color: blue;
  border-radius: 32px;
  color: white;
  cursor: pointer;
  flex: 1 0;
  padding: 10px;
`

const MenuItem = ({
  title
}) => {
  return <Item>{title}</Item>
}

export default MenuItem;
