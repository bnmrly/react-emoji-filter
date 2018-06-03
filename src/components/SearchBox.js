import React, { Component } from 'react';

export default class SearchBox extends Component {
  state = {
    input: ''
  };
  render() {
    return (
      <input
        className="emojiInput"
        value={this.state.input}
        onChange={this.onChange}
      />
    );
  }
  onChange = ({ target }) => {
    const { value } = target;
    this.setState({
      input: value
    });
    this.props.filterEmoji(value);
  };
}
