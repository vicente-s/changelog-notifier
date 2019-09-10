import React, { Component } from 'react';

export default class ReleaseNoteButton extends Component {

  render() {

    return (
      <button onClick={this.props.displayFeatures}>
        Release Notes
      </button>
    )
  }
}
