import React from 'react';

import { Item, ItemActive } from './styled.ts';

const MenuItem = ({
  title,
  onClick,
  active = null,
  readableTitle,
  style
}) => {
  if (active !== null) {
    return <ItemActive style={style} onClick={() => onClick(title)}>{readableTitle}</ItemActive>
  } else {
    return <Item style={style} onClick={() => onClick(title)}>{readableTitle}</Item>
  }
}

export default MenuItem;
