import React, { Component, Fragment } from 'react';

import { FaLocationArrow } from 'react-icons/fa'

import GlobalStyle from './GlobalStyle'
import { Container, ChatContainer, ChatHead, ChatBody, ChatFooter } from './elements'

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Container>
          <ChatContainer>
            <ChatHead>
              <span>Cliente Lorem Ipsum Dolor&nbsp;</span>
              <span>online</span>
            </ChatHead>
            <ChatBody>
              <div class="d__flex m__sent">
                <div class="m m--sent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
              <div class="d__flex m__received">
                <div class="m m--received">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
              <div class="d__flex m__sent">
                <div class="m m--sent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. amet consectetur adipisicing elit.
                </div>
              </div>
              <div class="d__flex m__received">
                <div class="m m--received">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
              <div class="d__flex m__received">
                <div class="m m--received">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. tur adipisicing elit.
                </div>
              </div>
            </ChatBody>
            <ChatFooter>
              <input type="text" placeholder="Digite o texto que deseja enviar e pressione enter..." />
              <button>
                <FaLocationArrow />
              </button>
            </ChatFooter>
          </ChatContainer>
        </Container>
      </Fragment>
    );
  }
}

export default App;
