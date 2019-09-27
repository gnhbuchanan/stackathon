import React, {useRef, useEffect} from 'react'
import {TweenMax, Power3} from 'gsap'

export const Text1 = () => {
  let text1 = useRef(null)
  let text2 = useRef(null)
  let text3 = useRef(null)
  let text4 = useRef(null)

  //runs after every DOM element is loaded
  // useEffect(() => {

  //     TweenMax.to(panda, 3,
  //       {
  //         opacity: 1,
  //         y: -40,
  //         ease: Power3.easeOut
  //       }
  //     )
  // },[])

  useEffect(() => {
    TweenMax.to(text1, 1.5, {
      y: '-150%',
      ease: Power3.easeOut
    })

    TweenMax.to(text2, 1.5, {
      y: '-150%',
      ease: Power3.easeOut,
      delay: 0.3
    })

    TweenMax.to(text3, 1.5, {
      y: '-150%',
      ease: Power3.easeOut,
      delay: 0.6
    })

    TweenMax.to(text4, 1.5, {
      y: '-150%',
      ease: Power3.easeOut,
      delay: 0.9
    })
  }, [])

  return (
    <div className="text1">
      <h1 className="h1">
        <span
          ref={el => {
            text1 = el
          }}
          className="hide"
        >
          MARY HAD
        </span>
      </h1>

      <h1 className="h1">
        <span
          ref={el => {
            text2 = el
          }}
          className="hide"
        >
          A LITTLE
        </span>
      </h1>

      <h1 className="h1">
        <span
          ref={el => {
            text3 = el
          }}
          className="hide"
        >
          LAMB WHO'S
        </span>
      </h1>

      <h1 className="h1">
        <span
          ref={el => {
            text4 = el
          }}
          className="hide"
        >
          FLEECE WAS
        </span>
      </h1>
    </div>
  )
}

export default Text1
