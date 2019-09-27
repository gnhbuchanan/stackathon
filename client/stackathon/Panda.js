import React, {useRef, useEffect} from 'react'
import {TweenMax, Power3} from 'gsap'

/**
 * COMPONENT
 */
export const Panda = () => {
  let panda = useRef(null)

  //runs after every DOM element is loaded
  useEffect(() => {
    TweenMax.to(panda, 6, {
      opacity: 1,
      y: -150,
      ease: Power3.easeOut
    })
  }, [])

  return (
    <div className="scene centerScene">
      <img
        ref={el => {
          panda = el
        }}
        src="/panda.gif"
        className="panda"
      />
    </div>
  )
}

export default Panda
