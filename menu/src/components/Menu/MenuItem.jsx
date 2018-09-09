import React from 'react';

import { Item, ItemActive } from './styled.js';

const MenuItem = ({
  title,
  onClick,
  active = null,
  readableTitle,
}) => {
  if (active !== null) {
    return <ItemActive onClick={() => onClick(title)}>{readableTitle}</ItemActive>
  } else {
    return <Item onClick={() => onClick(title)}>{readableTitle}</Item>
  }
}

export default MenuItem;
