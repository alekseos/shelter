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
      { placeholder }
      <ItemContainer
        onChange={handleChange}
        value={value}
        type='text'
        placeholder='Andrey'
      />
    </Wrapper>
  );
}

export default Input;
