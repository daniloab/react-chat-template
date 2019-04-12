import React from 'react'
import styled from 'styled-components'

const heightToggled = `
    height: 100%;
`

const height = `
    height: 20%;
`

export const Head = styled.div`
    display: flex;
    align-items: center;
    width: 100%;

    ${props => props.toggle === true ? heightToggled : height}   
	transition: all 0.5s ease; 

    padding: 8px;
    justify-content: space-between;

    border-radius: 4px 4px 0px 0px;
    background-color: rgba(0,0,0,.03); 

    div:first-child {
        display: flex;
        align-items: center;
    }

    div:nth-child(2) {
        margin-right: 5px;

        svg:hover {
            cursor: pointer;
        }
    }

    span {
        font-size: 28px;
        font-weight: bold;
    }

    span:nth-child(2) {
        font-size: 10px;
        color: lightgreen;
    }
`;

const h = ({toggle, children}) => (
    <Head 
        toggle={toggle}
    >
        {children}
    </Head>
)