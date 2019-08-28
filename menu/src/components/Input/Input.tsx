import * as React from 'react';

import { ItemContainer, Wrapper } from './styled';

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
