import React, { Component, Fragment } from 'react';

import ChatHead from './components/ChatHead'
import Message from './components/Message'
import ChatFooter from './components/ChatFooter'

import GlobalStyle from './GlobalStyle'
import { Container, ChatContainer, ChatBody } from './elements'

function randomName() {
  const adjectives = ["autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark", "summer", "icy", "delicate", "quiet", "white", "cool", "spring", "winter", "patient", "twilight", "dawn", "crimson", "wispy", "weathered", "blue", "billowing", "broken", "cold", "damp", "falling", "frosty", "green", "long", "late", "lingering", "bold", "little", "morning", "muddy", "old", "red", "rough", "still", "small", "sparkling", "throbbing", "shy", "wandering", "withered", "wild", "black", "young", "holy", "solitary", "fragrant", "aged", "snowy", "proud", "floral", "restless", "divine", "polished", "ancient", "purple", "lively", "nameless"];
  const nouns = ["waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning", "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "glitter", "forest", "hill", "cloud", "meadow", "sun", "glade", "bird", "brook", "butterfly", "bush", "dew", "dust", "field", "fire", "flower", "firefly", "feather", "grass", "haze", "mountain", "night", "pond", "darkness", "snowflake", "silence", "sound", "sky", "shape", "surf", "thunder", "violet", "water", "wildflower", "wave", "water", "resonance", "sun", "wood", "dream", "cherry", "tree", "fog", "frost", "voice", "paper", "frog", "smoke", "star"];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${adjective.toUpperCase()} ${noun.toUpperCase()}`;
}

function getQuote(numberMessages) {
  var nouns = ["car", "horse", "apple", "person", "chimp"];
  var adjectives = ["red", "fast", "lonely", "hungry", "insane"];

  var messages = [];

  for (var i = 0; i <= numberMessages; i++) {
      var randomNounIndex = Math.floor(Math.random() * nouns.length);
      var randomAdjectiveIndex = Math.floor(Math.random() * adjectives.length);
      var retVal = i % 2 === 0 ?
                    `The ${nouns[randomNounIndex]} is ${adjectives[randomAdjectiveIndex]} and 
                    ${nouns[randomNounIndex]} is ${adjectives[randomAdjectiveIndex]} and
                    ${nouns[randomNounIndex]} is ${adjectives[randomAdjectiveIndex]}`
                  : 
                    `${nouns[randomNounIndex]} is ${adjectives[randomAdjectiveIndex]}`;
      messages.push({userId: i % 2 === 0 ? 1 : 2, message: retVal})
  }

  return messages;
}

class App extends Component {
  state = {
    name: randomName(),
    messages: getQuote(),
    toggleChat: false
  }

  onSubmitMessage = msg => {
    this.setState((prevState) => {
      const newMessage = {userId: 1, message:msg }
      return {   
        messages: [...prevState.messages, newMessage]
      }
    })
  }

  handleToggle = () => {
    this.setState({toggleChat: !this.state.toggleChat})
  }

  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Container>
          <ChatContainer
            toggle={this.state.toggleChat}
          >
            <ChatHead 
              name={this.state.name} 
              toggle={this.state.toggleChat}
              onClick={this.handleToggle}
            />
            <ChatBody toggle={this.state.toggleChat}>
              <Message messages={this.state.messages} />
            </ChatBody>
            <ChatFooter 
              toggle={this.state.toggleChat}
              onSubmitMessage={this.onSubmitMessage}/>
          </ChatContainer>
        </Container>        
      </Fragment>
    );
  }
}

export default App;
