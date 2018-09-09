import React from 'react';

import { ButtonContainer, WrapperContainer } from './styled.js';

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