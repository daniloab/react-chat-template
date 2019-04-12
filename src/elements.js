import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 500px;
    height: 500px;
`;

export const ChatContainer = styled.div`
    height: 100%;
    width: 800px;
    background-color: rgba(0,0,0,0.4) !important;
    border-radius: 4px;
    flex-direction: colunm;
`

export const ChatBody = styled.div`
    width: 100%;
    height: 60%;
    min-height: 60%;
    max-height: 60%;
    overflow: auto;
`;


