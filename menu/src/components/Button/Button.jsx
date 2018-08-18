import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  background-color: blue;
  color: white;
  border-radius: 65px;
  width: inherit;
  font-size: 24px;
  font-family: roboto_slabregular;
  padding: 10px 20px;
  display: inline-block;
  margin: 30px auto 0 auto;
  cursor: pointer;
  min-width: 100px;
  text-align: center;
`;

const WrapperContainer = styled.section`
    display: flex;
`;

const Button = ({
    content = 'default content',
    onClick = () => {},
    style,
}) => {
    return <WrapperContainer>
        <ButtonContainer onClick={() => onClick()} style={style}>
            {content}
        </ButtonContainer>
    </WrapperContainer>
}

export default Button;