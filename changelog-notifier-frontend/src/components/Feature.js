import React, { Component } from 'react'

export default class Feature extends Component {
  render() {
    return (
      <div className="Feature">
        <div>{this.props.feature.type}</div>
        <div>{this.props.feature.headline}</div>
        <div>{this.props.feature.description}</div>
      </div>
    )
  }
}
