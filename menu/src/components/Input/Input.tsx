import React from 'react';

import { ItemContainer, Wrapper } from './styled.ts';

const Input = ({
  placeholder
}) => {
  return (
    <Wrapper>
      <ItemContainer
        placeholder={placeholder}
      />
    </Wrapper>
  )
}

export default Input;
