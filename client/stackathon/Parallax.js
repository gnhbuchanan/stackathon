import React, {Component, useRef, useEffect} from 'react'
import {TweenMax, Power3, TimelineMax, Power0} from 'gsap'
import {Controller, Scene} from 'react-scrollmagic'
import {Tween, Timeline} from 'react-gsap'
import {ScrollMagicPluginGsap} from 'scrollmagic-plugin-gsap'

import ScrollMagic from 'scrollmagic'

import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'

// ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

/**
 *
 * COMPONENT
 */
class Parallax extends Component {
  // const controller = new ScrollMagic.Controller();

  // const slideParallaxScene = new ScrollMagic.Scene({
  //   triggerElement: '.bcg-parallax',
  //   triggerHook: 1,
  //   duration: '200%'
  // })
  // .setTween(TweenMax.from('.bcg', 1, {y: '-30%', ease: Power0.easeNone}))
  // .addTo(controller)

  constructor(props) {
    super(props)
    this.controller = new ScrollMagic.Controller({addIndicators: true})
  }

  componentDidMount() {
    new ScrollMagic.Scene({
      triggerElement: '.bcg-parallax',
      triggerHook: 1,
      duration: 1000
    })
      .setTween(TweenMax.from('.bcg', 1, {y: '-30%', ease: Power0.easeNone}))
      .addTo(this.controller)
  }

  render() {
    return (
      <div className="bcg-parallax">
        <div className="bcg" />

        <div className="content-wrapper">
          <h1>Parallax Effect</h1>
          <p>
            Parallax (from Ancient Greek παράλλαξις (parallaxis), meaning
            'alternation') is a displacement or difference in the apparent
            position of an object viewed along two different lines of sight, and
            is measured by the angle or semi-angle of inclination between those
            two lines.[1][2] Due to foreshortening, nearby objects show a larger
            parallax than farther objects when observed from different
            positions, so parallax can be used to determine distances.
          </p>
        </div>
      </div>
    )
  }
}

export default Parallax
