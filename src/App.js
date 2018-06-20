import React, { Component } from 'react';
// import bgHeader from './bgHeader.png';
import './App.css';
import emojiList from './emojiList';
import Emojis from './components/Emojis';
import SearchBox from './components/SearchBox';

class App extends Component {
  state = {
    emojiList
  };

  render() {
    return (
      <div className="App-container">
        <Header />
        <SearchBox filterEmoji={this.filterEmoji} />
        <Emojis emojiList={this.state.emojiList} />
      </div>
    );
  }

  filterEmoji = searchTerm => {
    const filteredList = emojiList.filter(({ keywords }) =>
      keywords.includes(searchTerm)
    );
    this.setState({
      emojiList: filteredList
    });
  };
}

function Header(props) {
  return (
    <header className="App-header">
      <h1 className="App-title">Happy 6th Birthday, Sienna!</h1>
      <audio id="audio" controls loop>
        <source type="audio/mpeg" src="./song.mp3" />
      </audio>
    </header>
  );
}

export default App;
