import React from 'react';
import emojiPedia from './emojipedia';
import EmojiCard from './EmojiCard';

function createEmojiCard(details) {
  return (
    <div className="col-3 shadow p-3 mb-5 bg-body rounded emoji-card"
     id={details.name.replace(/\s+/g, '') +'emojiCard'}>
      <EmojiCard
        emoji={details.emoji}
        title={details.name}
        description={details.meaning}
      />
    </div>
  )
}

function App() {
  return (
    <div>
      <h1 className="header">EmojiPedia</h1>
      <div className="row">
        {emojiPedia.map(createEmojiCard)}
      </div>
    </div>
  )
}

export default App;