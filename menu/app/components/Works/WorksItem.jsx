import React from 'react';

import styled from 'styled-components';

const Item = styled.div`
  cursor: pointer;
  position: relative;
  padding: 10px;
  margin: 0 10px 20px 10px;
  background-color: blue;
  height: 200px;
  overflow: hidden;
`

const Image = styled.img`
  height: 100%;
`

const WorksItem= ({
  title,
  image,
}) => {
  return <Item>
    <Image src={image} />
  </Item>
}

export default WorksItem;
