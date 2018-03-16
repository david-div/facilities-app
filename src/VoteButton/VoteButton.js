import React from 'react';
import './VoteButton.css';

const voteButton = (props) => {
    return (
      <div className={props.className}>
        <button id={props.buttonID} onClick={props.onclick}>
          Vote {props.buttonText}!
        </button>
        <p id={props.buttonText + "voteDisplay"}>
          Current votes for {props.buttonText}: {props.count}
        </p>
      </div>
    );
}
//find root and replace
export default voteButton;
