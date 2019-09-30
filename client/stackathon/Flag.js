import React, {useRef, useEffect, Component} from 'react'
import {TweenMax, Power3, TimelineMax} from 'gsap'
import ScrollMagic from 'scrollmagic'

import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'

/**
 * COMPONENT
 */
class Flag extends Component {
  constructor(props) {
    super(props)

    this.controller = new ScrollMagic.Controller({addIndicators: true})

    this.timeline = new TimelineMax()
    this.expand = this.expand.bind(this)
    this.shrink = this.shrink.bind(this)
  }

  componentDidMount() {
    const topBar = TweenMax.from('#top', 3, {
      opacity: 0,
      x: 3000,
      ease: Power3.easeOut
    })

    const bottomBar = TweenMax.from('#bottom', 3, {
      opacity: 0,
      x: -3000,
      ease: Power3.easeOut,
      delay: 0.4
    })

    const star1 = TweenMax.from('#star1', 3, {
      x: -3000,
      ease: Power3.easeOut,
      delay: 0.4
    })

    const star2 = TweenMax.from('#star2', 3, {x: -3250, ease: Power3.easeOut})

    const star3 = TweenMax.from('#star3', 3, {
      x: 3250,
      ease: Power3.easeOut,
      delay: 0.4
    })

    const star4 = TweenMax.from('#star4', 3, {
      x: 3000,
      ease: Power3.easeOut,
      delay: 0.1
    })

    this.timeline
      .add(topBar)
      .add(bottomBar)
      .add(star1)
      .add(star2)
      .add(star3)
      .add(star4)

    new ScrollMagic.Scene({
      triggerElement: '.flag',
      triggerHook: 0,
      duration: '50%'
    })
      .setTween(this.timeline)
      .setPin('.flag')
      .addTo(this.controller)
  }

  expand(event) {
    TweenMax.to(event.target, 1, {
      width: 175,
      height: 175,
      ease: Power3.easeOut
    })
  }

  // shrink(event){
  //     TweenMax.to(event.target, 1, {width: 80, height: 80})
  // }

  shrink(event) {
    TweenMax.to(event.target, 1, {width: 125, height: 125})
  }

  render() {
    return (
      <div className="flag">
        <div id="topRoom" />
        <div id="top" className="bar" />
        <div className="star-container">
          {/* <div
          onMouseEnter={this.expand}
          onMouseLeave={this.shrink}
          id='star1'
          className="star"
        />
        <div
          onMouseEnter={this.expand}
          onMouseLeave={this.shrink}
          id='star2'
          className="star"
        />
        <div
          onMouseEnter={this.expand}
          onMouseLeave={this.shrink}
          id='star3'
          className="star"
        />
        <div
          onMouseEnter={this.expand}
          onMouseLeave={this.shrink}
          id='star4'
          className="star"
        /> */}

          <img
            src="/star.png"
            onMouseEnter={this.expand}
            onMouseLeave={this.shrink}
            id="star1"
            className="star"
          />
          <img
            src="/star.png"
            onMouseEnter={this.expand}
            onMouseLeave={this.shrink}
            id="star2"
            className="star"
          />
          <img
            src="/star.png"
            onMouseEnter={this.expand}
            onMouseLeave={this.shrink}
            id="star3"
            className="star"
          />
          <img
            src="/star.png"
            onMouseEnter={this.expand}
            onMouseLeave={this.shrink}
            id="star4"
            className="star"
          />
        </div>
        <div id="bottom" className="bar" />
        <div id="bottomRoom" />
      </div>
    )
  }
}

export default Flag
