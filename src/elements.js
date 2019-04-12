import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const ChatContainer = styled.div`
    height: 100%;
    width: 800px;
    background-color: rgba(0,0,0,0.4) !important;
    border-radius: 4px;
    flex-direction: colunm;
`
export const ChatHead = styled.div`
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

export const ChatBody = styled.div`
    width: 100%;
    height: 60%;
    max-height: 60%;
    overflow: auto;
`;

export const ChatFooter = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 20%;

    padding: 10px;

    border-radius: 0px 0px 4px 4px;
    background-color: rgba(0,0,0,.03);

    input {
        width: 100%;
        background: none;
        border: none;
        outline: none;
        background-color: rgba(0,0,0,0.3) !important;
        height: 70%;
        border-radius: 10px;
        color: white;
        padding: 10px;
        font-size: 16px;
    }

    button {
        position: absolute;
        right: 0;
        right: 20px;
        
        background: transparent;
        border: none;
        
        i {
            color: white;
        }
        
        &:hover {
            cursor: pointer;
        }
        
        &:active {
            i {
            color: purple;
            }
        }
        
        &:visited, &:focus {
            outline: none;    
        }
    }
`;

