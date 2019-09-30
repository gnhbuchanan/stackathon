import React, {Component} from 'react'
import Panda from './stackathon/Panda'
import Text1 from './stackathon/Text1'
import Circles from './stackathon/Circles'
import Flag from './stackathon/Flag'
import End from './stackathon/End'
import Parallax from './stackathon/Parallax'
import Bee from './stackathon/Bee'

class Scroll extends Component {
  render() {
    return (
      <div>
        <Panda />
        <Text1 />
        <Circles />
        <Parallax />
        <Flag />
        <Bee />
        <End />
      </div>
    )
  }
}

export default Scroll
