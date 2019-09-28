import React, {useRef, useEffect, Component} from 'react'
import {TweenMax, Power3, TimelineMax, Power0} from 'gsap'
import ScrollMagic from 'scrollmagic'

import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'

/**
 * COMPONENT
 */

class Panda extends Component {
  // let panda = useRef(null)

  // //runs after every DOM element is loaded
  // useEffect(() => {
  //   TweenMax.to(panda, 6, {
  //     opacity: 1,
  //     y: -150,
  //     ease: Power3.easeOut
  //   })
  // }, [])

  constructor(props) {
    super(props)

    this.controller = new ScrollMagic.Controller({addIndicators: true})
  }

  componentDidMount() {
    new ScrollMagic.Scene({
      triggerElement: '#panda-start',
      triggerHook: 0,
      duration: '50%'
    })
      .setTween(
        TweenMax.to('.panda', 6, {opacity: 1, y: -150, ease: Power3.easeOut})
      )
      .setPin('#panda-start')
      .addTo(this.controller)
  }

  render() {
    return (
      <div id="panda-start" className="scene centerScene">
        <img className="panda" src="/panda.gif" />
      </div>
    )
  }
}

export default Panda
