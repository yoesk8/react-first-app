import React, { Component } from 'react'
import LifeCycleCDUChild from './LifeCycleCDUChild'

export default class LifeCycleCDU extends Component {
    constructor(props) {
      console.log('Constructor called')
      super(props)
    
      this.state = {
         greeting: 'hello'
      }
    }
    updateGreeting = () => {
        console.log('Update method called')
        this.setState(prevState =>{
            return {
                greeting: prevState.greeting === 'hello' ? 'goodbye' : 'hello'
            }
        })
    }
    componentDidUpdate(){
        console.log('Component updated')
    } 
  render() {
    console.log('render method called')
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <button onClick={this.updateGreeting}> Update Greeting </button>
        <LifeCycleCDUChild parentGreeting={this.state.greeting}/>
      </div>
    )
  }
}
