import React from 'react';

export default ({ emojiList }) => {
  return <div>{emojiList.map(({ symbol }) => <span>{symbol}</span>)}</div>;
};
