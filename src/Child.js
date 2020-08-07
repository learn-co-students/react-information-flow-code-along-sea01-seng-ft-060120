import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {

  changeColor = () => {
    this.setState({
      color: getRandomColor()
    })
  }
  
  render() {
    console.log(this.props )
    return (
      <div
        onClick={()=>this.props.handleColorChange(getRandomColor())}
        className="child"
        style={{backgroundColor: this.props.color}}
      ></div>
    )
  }
} 

export default Child
