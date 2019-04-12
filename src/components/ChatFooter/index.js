import React, { Component } from 'react';
import { FaLocationArrow } from 'react-icons/fa'

import { StyledFooter } from './elements'

class ChatFooter extends Component {
    state = {
        message: ''
    }

    handleOnChange = (e) => this.setState({ message: e.target.value })

    handleKeyUp = (e) => {
        const ENTER = 13

        if (e.keyCode === ENTER) {
            this.props.onSubmitMessage(this.state.message);
        }
    }
    render() {
        return (
            <StyledFooter>
                <input
                    onChange={this.handleOnChange}
                    onKeyUp={this.handleKeyUp}
                    type="text"
                    placeholder="Digite o texto que deseja enviar e pressione enter..." />
                <button>
                    <FaLocationArrow color="white" />
                </button>
            </StyledFooter>
        );
    }
}

export default ChatFooter