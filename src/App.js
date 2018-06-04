import React, { Component } from 'react';
// import bgHeader from './bgHeader.png';
import './App.css';
import emojiList from './emojiList';
import Emojis from './components/Emojis';
import SearchBox from './components/SearchBox';
// import ReactAudioPlayer from 'react-audio-player';

class App extends Component {
  state = {
    emojiList
  };

  render() {
    return (
      <div className="App-container">
        <Header />
        {/* <ReactAudioPlayer src="hbsw.mp3" autoPlay controls /> */}
        <h2 className="searchText">Search Emojis here!</h2>
        <SearchBox filterEmoji={this.filterEmoji} />
        <div className="emojiWrapper">
          <Emojis emojiList={this.state.emojiList} />
        </div>
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

function Header() {
  return (
    <header className="App-header">
      <h1 className="App-title">Happy 6th Birthday, Sienna!</h1>
      <audio id="happy-birthday-sienna" controls loop>
        <source type="audio/mpeg" src="./hbsw.mp3" />
      </audio>
    </header>
  );
}

export default App;
