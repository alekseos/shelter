import React from 'react';

import { TextAreaItem, Wrapper } from './styled.js';

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

export default TextArea;