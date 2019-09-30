import React, {useRef, useEffect, useState, Component} from 'react'
import {TweenMax, Power1, TimelineMax, BezierPlugin} from 'gsap'
import ScrollMagic from 'scrollmagic'

import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'

class Bee extends Component {
  constructor(props) {
    super(props)

    this.controller = new ScrollMagic.Controller({addIndicators: true})

    this.timeline = new TimelineMax()
  }

  componentDidMount() {
    const flightPath = {
      curviness: 1.25,
      autoRotate: true,
      values: [
        {x: 100, y: -20},
        {x: 300, y: 10},
        {x: 500, y: 100},
        {x: 750, y: -100},
        {x: 350, y: -50},
        {x: 600, y: 100},
        {x: 800, y: 0},
        {x: window.innerWidth + 265, y: -150}
      ]
    }

    const bee = TweenMax.to('.bee', 1, {
      bezier: flightPath,
      ease: Power1.easeInOut
    })

    this.timeline.add(bee)

    new ScrollMagic.Scene({
      triggerElement: '.bee-container',
      triggerHook: 0,
      duration: '50%'
    })
      .setTween(this.timeline)
      .setPin('.bee-container')
      .addTo(this.controller)
  }

  render() {
    return (
      <div className="bee-container">
        <img className="bee" src="/bee.png" />
      </div>
    )
  }
}

export default Bee
