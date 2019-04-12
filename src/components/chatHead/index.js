import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa'

import {Head} from './elements'

const ChatHead = props => (
    <Head toggle={props.toggle}>
        <div>
            <span>{props.name}&nbsp;</span>
            <span>online</span>
        </div>
        <div>
            <FaBars onClick={props.onClick}/>
        </div>
    </Head>
);

export default ChatHead;

