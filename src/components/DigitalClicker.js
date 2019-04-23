import React, {Component} from 'react';

  class DigitalClicker extends Component {
    constructor(props){
      super(props)
      this.state = {
        timesClicked: 0
      }
    }

    increment = () => {
      let newClickCount = this.state.timesClicked + 1
      this.setState({timesClicked: newClickCount})
    }

    render(){
    return (
      <button onClick={this.increment}>{this.state.timesClicked}</button>
    )}
  }



export default DigitalClicker
