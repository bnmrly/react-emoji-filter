import React from 'react';

export default ({ emojiList }) => {
  return (
    <div className="emojis">
      {emojiList.map(({ symbol }) => <span>{symbol}</span>)}
    </div>
  );
};
