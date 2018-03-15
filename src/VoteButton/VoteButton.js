import React from 'react';
import './VoteButton.css';

class VoteButton extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <header className="App-header" />
        <button id={this.props.buttonID} onClick={this.props.onclick}>
          Vote {this.props.buttonText}!
        </button>
        <p id={this.props.buttonText+ "voteDisplay"}>
          Current votes for {this.props.buttonText}: {this.props.count}
        </p>
      </div>
    );
  }
}
//find root and replace
export default VoteButton;
