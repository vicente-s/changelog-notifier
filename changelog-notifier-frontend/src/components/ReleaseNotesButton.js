import React, { Component } from 'react';



export default class ReleaseNoteButton extends Component {

  state = {
    features: []
  }

  componentWillMount() {
    fetch('http://localhost:3000')
      .then(resp => resp.json())
      .then(json => this.setState({
        features : json
      }))
  }

  displayFeatures() {
    {/* display features in a modal*/}
  }

  render() {

    return (
      <button onClick={this.displayFeatures}>
        Release Notes
      </button>
    )
  }
}
