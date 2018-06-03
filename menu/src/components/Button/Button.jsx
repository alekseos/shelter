import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  background-color: blue;
  color: white;
  border-radius: 65px;
  width: inherit;
  font-family: roboto_slabregular;
  padding: 10px 20px;
  display: inline-block;
  margin: 30px 0 0 0;
  cursor: pointer;
`;

const Button = ({
    content = 'default content',
    onClick = () => {},
}) => {
    return <ButtonContainer
        onClick={() => onClick()}
    >
        {content}
    </ButtonContainer>
}

export default Button;