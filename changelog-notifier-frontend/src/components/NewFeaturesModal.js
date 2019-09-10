import React, { Component } from 'react'
import Feature from './Feature'

export default class NewFeaturesModal extends Component {

  state = {
    features : []
  }

  componentWillMount() {
    fetch('http://localhost:3000/features')
      .then(resp => resp.json())
      .then(json => this.setState({
        features : json
      }))
  }

  render() {
    let features = this.state.features.map(feature => <Feature feature={feature} key={feature.id}/>)
    let isDisplayed = function() {
      if(this.props.isDisplaying) {
        return "NewFeaturesModal"
      }
    }
    return (
      <div className={isDisplayed}>
        <div> Latest Changes </div>
        <hr/>
          {features}
      </div>
    )
  }
}
