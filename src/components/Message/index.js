import React, { Fragment } from 'react'

import { StyledMessageWrapper, StyledMessage } from './elements'

function renderMessages(messages) {
    return messages.map((m, i) => (
        <StyledMessageWrapper key={i} type={m.userId === 1 ? 'sent' : 'received'}>
            <StyledMessage type={m.userId === 1 ? 'sent' : 'received'}>
                {m.message}
            </StyledMessage>
        </StyledMessageWrapper>
    ))
}

export default props => (
    <Fragment>
        {renderMessages(props.messages)}
    </Fragment>
)