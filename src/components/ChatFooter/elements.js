import React from 'react'
import styled, {keyframes} from 'styled-components';

const heightToggled = `
    height: 0%; 
    padding: 0px;
    opacity: 0;
    display: none;
`

const height = `
    height: 20%; 
    padding: 10px;
    opacity: 1;
`

export const StyledFooter = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;

    ${props => props.toggle === true ? heightToggled : height}  

    border-radius: 0px 0px 4px 4px;
    background-color: rgba(0,0,0,.03);

	transition: all 1s ease;

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

const head = ({toggle, children}) => (
    <StyledFooter
        toggle={toggle}
    >
        {children}
    </StyledFooter>
)