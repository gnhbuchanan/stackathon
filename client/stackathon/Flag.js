import React, {useRef, useEffect} from 'react'
import {TweenMax, Power3} from 'gsap'

/**
 * COMPONENT
 */
export const Flag = () => {
  let topBar = useRef(null)
  let bottomBar = useRef(null)
  let star1 = useRef(null)
  let star2 = useRef(null)
  let star3 = useRef(null)
  let star4 = useRef(null)

  //runs after every DOM element is loaded

  useEffect(() => {
    TweenMax.from(topBar, 3, {opacity: 0, x: 3000, ease: Power3.easeOut})

    TweenMax.from(bottomBar, 3, {
      opacity: 0,
      x: -3000,
      ease: Power3.easeOut,
      delay: 0.4
    })

    TweenMax.from(star1, 3, {x: -3000, ease: Power3.easeOut, delay: 0.4})

    TweenMax.from(star2, 3, {x: -3250, ease: Power3.easeOut})

    TweenMax.from(star3, 3, {x: 3250, ease: Power3.easeOut, delay: 0.5})

    TweenMax.from(star4, 3, {x: 3000, ease: Power3.easeOut, delay: 1})
  }, [])

  const expand = event => {
    console.log('this is event', event.target)
    TweenMax.to(event.target, 1, {
      width: 150,
      height: 150,
      ease: Power3.easeOut
    })
  }

  const shrink = event => {
    TweenMax.to(event.target, 1, {width: 80, height: 80})
  }

  return (
    <div className="flag">
      <div id="topRoom" />
      <div
        id="top"
        className="bar"
        ref={el => {
          topBar = el
        }}
      />
      <div className="star-container">
        <div
          onMouseEnter={expand}
          onMouseLeave={shrink}
          ref={el => {
            star1 = el
          }}
          className="star"
        />
        <div
          onMouseEnter={expand}
          onMouseLeave={shrink}
          ref={el => {
            star2 = el
          }}
          className="star"
        />
        <div
          onMouseEnter={expand}
          onMouseLeave={shrink}
          ref={el => {
            star3 = el
          }}
          className="star"
        />
        <div
          onMouseEnter={expand}
          onMouseLeave={shrink}
          ref={el => {
            star4 = el
          }}
          className="star"
        />
      </div>
      <div
        ref={el => {
          bottomBar = el
        }}
        id="bottom"
        className="bar"
      />
      <div id="bottomRoom" />
    </div>
  )
}

export default Flag
