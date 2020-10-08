import React from 'react';
import styled from 'styled-components';

//#region Props/State
type PlaceholderProps = {
}
//#endregion

const Wrapper = styled.div<{ color: string }>`
    color: ${({ color }) => color};
`;

export default function PlaceholderComponent(props: PlaceholderProps) {

    return (
        <div>
            <Wrapper color='hotpink'>
                Hello
            </Wrapper>
            <Wrapper color='aqua'>
                World
            </Wrapper>
        </div>
    )
}
