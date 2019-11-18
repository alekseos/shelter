import * as React from 'react';

import { ItemContainer, Wrapper } from './styled';

const Input = ({
  placeholder
}) => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  }

  return (
    <Wrapper>
      <ItemContainer
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        type='text'
      />
    </Wrapper>
  );
}

export default Input;
