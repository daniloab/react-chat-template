import React from 'react'
import styled from 'styled-components';

const heightToggled = `
    height: 0%;
    min-height: 0%;
    opacity: 0;
`

const height = `
    height: 60%;
    opacity: 1;
`

const heightContainerToggled = `
    height: 100px;
`

const heightContainer = `
    height: 500px;
`

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    height: 100%;
`;

export const ChatContainer = styled.div`
    width: 500px;
    background-color: rgba(0,0,0,0.4) !important;
    border-radius: 4px 4px 0px 0px;
    flex-direction: colunm;
    margin-right: 10px;

    ${props => props.toggle === true ? heightContainerToggled : heightContainer}
	transition: all 0.5s ease;
`

export const ChatBody = styled.div`
    width: 100%;
    height: 60%;
    min-height: 60%;
    max-height: 60%;
    overflow: auto;

    ${props => props.toggle === true ? heightToggled : height}
`;

const body = ({toggle, children}) => (
    <ChatBody
        toggle={toggle}
    >
        {children}
    </ChatBody>
)

const container = ({toggle, children}) => (
    <ChatContainer
        toggle={toggle}
    >
        {children}
    </ChatContainer>
)
