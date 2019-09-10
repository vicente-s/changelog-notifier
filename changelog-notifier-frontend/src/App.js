import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReleaseNoteButton from './components/ReleaseNotesButton'
import NewFeaturesModal from './components/NewFeaturesModal'


class App extends Component {

  state = {
    user : {},
    featuresDisplaying : false
  }

  displayFeaturesModal = () => {
      this.setState(prevState => ({
        featuresDisplaying : !prevState
      })
    )
  }

  render() {
    return (
      <div className="App">
        <navbar>
        <ReleaseNoteButton displayFeatures = {this.displayFeaturesModal}/>
        </navbar>
        <NewFeaturesModal isDisplaying = {this.state.featuresDisplaying} />
      </div>
    );
  }
}

export default App;
