import React from 'react';
import styled from 'styled-components';

export const Head = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 20%;
    padding: 8px;

    border-radius: 4px 4px 0px 0px;
    background-color: rgba(0,0,0,.03); 

    span {
        font-size: 28px;
        font-weight: bold;
    }

    span:nth-child(2) {
        font-size: 10px;
        color: lightgreen;
    }
`;

const ChatHead = props => (
    <Head>
        <span>{props.name}&nbsp;</span>
        <span>online</span>
    </Head>
);

export default ChatHead;
