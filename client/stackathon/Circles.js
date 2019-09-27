import React, {useRef, useEffect, useState} from 'react'
import {TweenMax, Power3} from 'gsap'

export const Circles = () => {
  let container = useRef(null)
  let circle = useRef(null)
  let circleRed = useRef(null)
  let circleGreen = useRef(null)

  const [state, setState] = useState(false)

  const expand = () => {
    TweenMax.to(circleRed, 0.8, {width: 200, height: 200, ease: Power3.easeOut})
    setState(true)
  }

  const shrink = () => {
    TweenMax.to(circleRed, 0.8, {width: 75, height: 75, ease: Power3.easeOut})
    setState(false)
  }

  useEffect(() => {
    TweenMax.to(container, 0, {css: {visibility: 'visible'}})
    TweenMax.from(circle, 1.5, {opacity: 0, x: 250, ease: Power3.easeOut})
    TweenMax.from(circleRed, 1.5, {
      opacity: 0,
      x: 250,
      ease: Power3.easeOut,
      delay: 0.4
    })
    TweenMax.from(circleGreen, 1.5, {
      opacity: 0,
      x: 250,
      ease: Power3.easeOut,
      delay: 0.8
    })
  }, [])

  return (
    <div
      ref={el => {
        container = el
      }}
      className="circle-container"
    >
      <div
        ref={el => {
          circle = el
        }}
        className="circle"
      />

      <div
        onClick={state !== true ? expand : shrink}
        ref={el => {
          circleRed = el
        }}
        className="circle red"
      />

      <div
        ref={el => {
          circleGreen = el
        }}
        className="circle green"
      />
    </div>
  )
}

export default Circles
