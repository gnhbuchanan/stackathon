import React, {Component} from 'react'
import {TweenMax, Power3, TimelineMax} from 'gsap'

import ScrollMagic from 'scrollmagic'

import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'

class Text1 extends Component {
  constructor(props) {
    super(props)

    this.timeline = new TimelineMax()

    this.controller = new ScrollMagic.Controller()
  }

  componentDidMount() {
    const tween1 = TweenMax.to('#text1', 1.5, {
      y: '-150%',
      ease: Power3.easeOut
    })

    const tween2 = TweenMax.to('#text2', 1.5, {
      y: '-150%',
      ease: Power3.easeOut,
      delay: 0.3
    })

    const tween3 = TweenMax.to('#text3', 1.5, {
      y: '-150%',
      ease: Power3.easeOut,
      delay: 0.6
    })

    const tween4 = TweenMax.to('#text4', 1.5, {
      y: '-150%',
      ease: Power3.easeOut,
      delay: 0.9
    })

    this.timeline
      .add(tween1)
      .add(tween2)
      .add(tween3)
      .add(tween4)

    new ScrollMagic.Scene({
      triggerElement: '.text1',
      triggerHook: 0,
      duration: '50%'
    })
      .setTween(this.timeline)
      .setPin('.text1')
      .addTo(this.controller)
  }

  render() {
    return (
      <div className="text1">
        <h1 className="h1">
          <span id="text1" className="hide">
            MARY HAD
          </span>
        </h1>

        <h1 className="h1">
          <span id="text2" className="hide">
            A LITTLE
          </span>
        </h1>

        <h1 className="h1">
          <span id="text3" className="hide">
            LAMB WHO'S
          </span>
        </h1>

        <h1 className="h1">
          <span id="text4" className="hide">
            FLEECE WAS
          </span>
        </h1>
      </div>
    )
  }
}

export default Text1
