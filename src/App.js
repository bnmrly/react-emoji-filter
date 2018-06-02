import React, { Component } from 'react';
// import bgHeader from './bgHeader.png';
import './App.css';
import emojiList from './emojList';
import Emojis from './components/Emojis';
import SearchBox from './components/SearchBox';

class App extends Component {
  state = {
    emojiList
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Happy 6th Birthday, Sienna!</h1>
        </header>
        <main>
          <h2>Search Emojis here!</h2>
          <SearchBox filterEmoji={this.filterEmoji} />
          <Emojis emojiList={this.state.emojiList} />
        </main>
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

export default App;
