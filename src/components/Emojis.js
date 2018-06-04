import React from 'react';

export default ({ emojiList }) => {
  return (
    <div className="emojiWrapper">
      {emojiList.map(({ symbol }) => (
        <span className="emojiSymbol">{symbol}</span>
      ))}
    </div>
  );
};
