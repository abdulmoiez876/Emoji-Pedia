import React from 'react';

function EmojiCard(props) {
    return (
        <div className="targetEmojiCard" id={props.title.replace(/\s+/g, '')}>
            <h1 className="emojiCardHeader">{props.title}</h1>
            <h1 id='targetEmoji'>{props.emoji}</h1>
            <p id={props.title.replace(/\s+/g, '') + 'para'}>{props.description}</p>
        </div>
    )
}

export default EmojiCard;