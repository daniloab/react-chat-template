import React from 'react'
import styled from 'styled-components';

// wrapper message ------------------------------------------------------------------------------------------------
const wrapperSentProps = `
    justify-content: flex-end;
    text-align: right;
`

const wrapperReceivedProps = `
    justify-content: flex-start;
    text-align: left;
`

export const StyledMessageWrapper = styled.div`   
    display: flex;

    ${props => props.type === 'sent' && wrapperSentProps}
    ${props => props.type === 'received' && wrapperReceivedProps}
`;

const Wrapper = ({ type, children }) => (
    <StyledMessageWrapper
        type={type}
    >
        {children}
    </StyledMessageWrapper>
)

// message wrapper ------------------------------------------------------------------------------------------------
const messageSentProps = `
    background-color: lightblue;
    margin: 0px 25px 5px 5px;
`

const messageReceivedProps = `
    background-color: lightgreen;
    margin: 0px 5px 5px 5px;
`
export const StyledMessage = styled.div`
    position: relative;    
    padding: 10px 5px;
    border-radius: 10px;
    color: black;

    ${props => props.type === 'sent' && messageSentProps}
    ${props => props.type === 'received' && messageReceivedProps}
`
  
const Message = ({ type, children}) => (
    <StyledMessage
        type={type}
    >
        {children}
    </StyledMessage>
)