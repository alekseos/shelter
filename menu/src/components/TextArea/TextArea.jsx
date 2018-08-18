import React from 'react';
import styled from 'styled-components';

const TextArea = ({
    placeholder
}) => {
    return (
        <Wrapper>
            <TextAreaItem
                placeholder={placeholder}
            />
        </Wrapper>
    )
}

const Wrapper = styled.section`
  padding: 20px 0;`;
const TextAreaItem = styled.textarea`
  border: 1px solid rgba(35, 34, 38, .5);
  box-sizing: border-box;
  color: rgba(35, 34, 38, .5);
  display: block;
  height: 50px;
  font-size: 16px;
  margin: 0 auto;
  padding: 20px;
  width: 380px;`

export default TextArea;