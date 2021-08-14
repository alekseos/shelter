import * as React from 'react';

import { Description, Image, Item, Mask, Wrapper } from './styled';

const WorksItem = ({
  title,
  image,
}) => {
  return <Wrapper>
    <Item>
      <Image src={image} />
      <Mask className="mask">
        <Description>{title}</Description>
      </Mask>
    </Item>
  </Wrapper>
};

export default WorksItem;
