import * as React from 'react';

import { TextAreaItem, Wrapper } from './styled';

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