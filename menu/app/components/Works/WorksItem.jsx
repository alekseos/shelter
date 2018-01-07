import React from 'react';

import styled from 'styled-components';

const Item = styled.div`
  cursor: pointer;
  flex: 0 1 24%;
  padding: 10px;
  margin: 0 10px 30px 10px;
  background-color: blue;
  height: 200px;
  width: 200px;
`

const WorksItem= ({
  title,
  image,
}) => {
  return <Item>
    <img src={image} />
  </Item>
}

export default WorksItem;
