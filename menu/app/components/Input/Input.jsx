import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 20px 0;
`;

const ItemContainer= styled.input`
  border: 1px solid rgba(35, 34, 38, .5);
  box-sizing: border-box;
  color: rgba(35, 34, 38, .5);
  display: block;
  height: 50px;
  font-size: 16px;
  margin: 0 auto;
  padding: 20px;
  width: 380px;
`

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
