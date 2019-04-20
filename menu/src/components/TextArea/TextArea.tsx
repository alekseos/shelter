import React from 'react';

import { TextAreaItem, Wrapper } from './styled.ts';

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