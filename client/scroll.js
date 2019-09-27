import React, {Component} from 'react'
import Panda from './stackathon/Panda'
import Text1 from './stackathon/Text1'
import Circles from './stackathon/Circles'

class Scroll extends Component {
  render() {
    return (
      <div>
        <Panda />
        <Text1 />
        <Circles />
      </div>
    )
  }
}

export default Scroll
