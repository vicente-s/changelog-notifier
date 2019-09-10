import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReleaseNoteButton from './components/ReleaseNotesButton'
import NewFeaturesModal from './components/NewFeaturesModal'


class App extends Component {

  state = {
    user : {},
    featuresDisplayed : false
  }

  render() {
    return (
      <div className="App">
        <navbar>
        <ReleaseNoteButton />
        </navbar>
        <NewFeaturesModal />
      </div>
    );
  }
}

export default App;
