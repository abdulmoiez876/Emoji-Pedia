import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var currentYear = new Date().getFullYear();

ReactDOM.render(
    <div>
        <App />
        <p className = "copyRight">Copyright {currentYear}</p>
    </div>
    
    ,document.getElementById('root')
);

//------------------------------------------------javascript---------------------------------------------------------
for(var i = 0; i < document.querySelectorAll('.targetEmojiCard').length; i++) {
    document.querySelectorAll('.emoji-card')[i].addEventListener('mouseover', function () {
        document.getElementById(this.getAttribute('id')).classList.add('emoji-card-hover');
    });
    
    document.querySelectorAll('.emoji-card')[i].addEventListener('mouseout', function () {
        document.getElementById(this.getAttribute('id')).classList.remove('emoji-card-hover');
    });
    
    document.querySelectorAll('.targetEmojiCard')[i].addEventListener('mouseover', function () {
        var targetId = document.getElementById(this.getAttribute('id'));
        document.getElementById(this.getAttribute('id')).classList.add('hoverCheck');
        var targetPara = this.getAttribute('id') + 'para';
        document.getElementById(targetPara).classList.add('displayPara');
        
        for(var j = 0; j < document.querySelectorAll('.targetEmojiCard').length; j++) {
            if(targetId !== document.querySelectorAll('.targetEmojiCard')[j]) {
                document.querySelectorAll('.targetEmojiCard')[j].classList.add('backgroundBlur');
            }
        }
    });
    
    document.querySelectorAll('.targetEmojiCard')[i].addEventListener('mouseout', function () {
        document.getElementById(this.getAttribute('id')).classList.remove('hoverCheck');
        var targetId = document.getElementById(this.getAttribute('id'));
        var targetPara = this.getAttribute('id') + 'para';
        document.getElementById(targetPara).classList.remove('displayPara');
        document.getElementById(this.getAttribute('id') + 'emojiCard').classList.remove('emoji-card-hover');
        
        for(var j = 0; j < document.querySelectorAll('.targetEmojiCard').length; j++) {
        if(targetId !== document.querySelectorAll('.targetEmojiCard')[j]) {
            document.querySelectorAll('.targetEmojiCard')[j].classList.remove('backgroundBlur');
        }
    }
    });

}