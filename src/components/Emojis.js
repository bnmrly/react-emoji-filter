import React from 'react';

export default ({ emojiList }) => {
  return (
    <div className="emojis">
      {emojiList.map(({ symbol }) => (
        <span className="emojiSymbol">{symbol}</span>
      ))}
    </div>
  );
};
