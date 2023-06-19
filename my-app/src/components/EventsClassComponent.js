import React, { Component } from 'react'

export class EventsClassComponent extends Component {
    clickHandler(){
        console.log('Class button clicked')
    }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me class component</button>
      </div>
    )
  }
}

export default EventsClassComponent