import React, {useRef, useEffect, useState, Component} from 'react'
import {TweenMax, Power3, TimelineMax} from 'gsap'
import ScrollMagic from 'scrollmagic'

import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'

class Circles extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: false
    }

    this.controller = new ScrollMagic.Controller({addIndicators: true})

    this.timeline = new TimelineMax()

    this.expand = this.expand.bind(this)
    this.shrink = this.shrink.bind(this)
  }

  componentDidMount() {
    const container = TweenMax.to('#container', 0, {
      css: {visibility: 'visible'}
    })

    const firstCircle = TweenMax.from('#first', 1.5, {
      opacity: 0,
      x: 250,
      ease: Power3.easeOut
    })

    const secondCircle = TweenMax.from('#second', 1.5, {
      opacity: 0,
      x: 250,
      ease: Power3.easeOut,
      delay: 0.4
    })

    const thirdCircle = TweenMax.from('#third', 1.5, {
      opacity: 0,
      x: 250,
      ease: Power3.easeOut,
      delay: 0.8
    })

    this.timeline
      .add(container)
      .add(firstCircle)
      .add(secondCircle)
      .add(thirdCircle)

    new ScrollMagic.Scene({
      triggerElement: '.circle-container',
      triggerHook: 0,
      duration: '50%'
    })
      .setTween(this.timeline)
      .setPin('#container')
      .addTo(this.controller)
  }

  expand() {
    TweenMax.to('#second', 0.8, {width: 200, height: 200, ease: Power3.easeOut})
    this.setState({clicked: true})
  }

  shrink() {
    TweenMax.to('#second', 0.8, {width: 75, height: 75, ease: Power3.easeOut})
    this.setState({clicked: false})
  }

  render() {
    return (
      <div id="container" className="circle-container">
        <div id="first" className="circle" />

        <div
          onClick={this.state.clicked !== true ? this.expand : this.shrink}
          id="second"
          className="circle red"
        />

        <div id="third" className="circle green" />
      </div>
    )
  }
}

export default Circles
