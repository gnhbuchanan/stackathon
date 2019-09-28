// import React, {useRef, useEffect} from 'react'
// import {TweenMax, Power3} from 'gsap'

// /**
//  * COMPONENT
//  */
// export const Flag = () => {
//   let topBar = useRef(null)
//   let bottomBar = useRef(null)
//   let star1 = useRef(null)
//   let star2 = useRef(null)
//   let star3 = useRef(null)
//   let star4 = useRef(null)

//   //runs after every DOM element is loaded

//   useEffect(() => {
//     TweenMax.from(topBar, 3, {opacity: 0, x: 3000, ease: Power3.easeOut})

//     TweenMax.from(bottomBar, 3, {
//       opacity: 0,
//       x: -3000,
//       ease: Power3.easeOut,
//       delay: 0.4
//     })

//     TweenMax.from(star1, 3, {x: -3000, ease: Power3.easeOut, delay: 0.4})

//     TweenMax.from(star2, 3, {x: -3250, ease: Power3.easeOut})

//     TweenMax.from(star3, 3, {x: 3250, ease: Power3.easeOut, delay: 0.5})

//     TweenMax.from(star4, 3, {x: 3000, ease: Power3.easeOut, delay: 1})
//   }, [])

//   const expand = event => {
//     console.log('this is event', event.target)
//     TweenMax.to(event.target, 1, {
//       width: 150,
//       height: 150,
//       ease: Power3.easeOut
//     })
//   }

//   const shrink = event => {
//     TweenMax.to(event.target, 1, {width: 80, height: 80})
//   }

//   return (
//     <div className="flag">
//       <div id="topRoom" />
//       <div
//         id="top"
//         className="bar"
//         ref={el => {
//           topBar = el
//         }}
//       />
//       <div className="star-container">
//         <div
//           onMouseEnter={expand}
//           onMouseLeave={shrink}
//           ref={el => {
//             star1 = el
//           }}
//           className="star"
//         />
//         <div
//           onMouseEnter={expand}
//           onMouseLeave={shrink}
//           ref={el => {
//             star2 = el
//           }}
//           className="star"
//         />
//         <div
//           onMouseEnter={expand}
//           onMouseLeave={shrink}
//           ref={el => {
//             star3 = el
//           }}
//           className="star"
//         />
//         <div
//           onMouseEnter={expand}
//           onMouseLeave={shrink}
//           ref={el => {
//             star4 = el
//           }}
//           className="star"
//         />
//       </div>
//       <div
//         ref={el => {
//           bottomBar = el
//         }}
//         id="bottom"
//         className="bar"
//       />
//       <div id="bottomRoom" />
//     </div>
//   )
// }

// export default Flag

// export const Panda = () => {
//     let panda = useRef(null)

//     //runs after every DOM element is loaded
//     useEffect(() => {
//       TweenMax.to(panda, 6, {
//         opacity: 1,
//         y: -150,
//         ease: Power3.easeOut
//       })
//     }, [])

//     return (
//       <div className="scene centerScene">
//         <img
//           ref={el => {
//             panda = el
//           }}
//           src="/panda.gif"
//           className="panda"
//         />
//       </div>
//     )
//   }

//   export default Panda

// import React, {useRef, useEffect} from 'react'
// import {TweenMax, Power3} from 'gsap'

// export const Text1 = () => {
//   let text1 = useRef(null)
//   let text2 = useRef(null)
//   let text3 = useRef(null)
//   let text4 = useRef(null)

//   useEffect(() => {
//     TweenMax.to(text1, 1.5, {
//       y: '-150%',
//       ease: Power3.easeOut
//     })

//     TweenMax.to(text2, 1.5, {
//       y: '-150%',
//       ease: Power3.easeOut,
//       delay: 0.3
//     })

//     TweenMax.to(text3, 1.5, {
//       y: '-150%',
//       ease: Power3.easeOut,
//       delay: 0.6
//     })

//     TweenMax.to(text4, 1.5, {
//       y: '-150%',
//       ease: Power3.easeOut,
//       delay: 0.9
//     })
//   }, [])

//   return (
//     <div className="text1">
//       <h1 className="h1">
//         <span
//           ref={el => {
//             text1 = el
//           }}
//           className="hide"
//         >
//           MARY HAD
//         </span>
//       </h1>

//       <h1 className="h1">
//         <span
//           ref={el => {
//             text2 = el
//           }}
//           className="hide"
//         >
//           A LITTLE
//         </span>
//       </h1>

//       <h1 className="h1">
//         <span
//           ref={el => {
//             text3 = el
//           }}
//           className="hide"
//         >
//           LAMB WHO'S
//         </span>
//       </h1>

//       <h1 className="h1">
//         <span
//           ref={el => {
//             text4 = el
//           }}
//           className="hide"
//         >
//           FLEECE WAS
//         </span>
//       </h1>
//     </div>
//   )
// }

// export default Text1

// import React, {useRef, useEffect, useState} from 'react'
// import {TweenMax, Power3} from 'gsap'

// export const Circles = () => {
//   let container = useRef(null)
//   let circle = useRef(null)
//   let circleRed = useRef(null)
//   let circleGreen = useRef(null)

//   const [state, setState] = useState(false)

//   const expand = () => {
//     TweenMax.to(circleRed, 0.8, {width: 200, height: 200, ease: Power3.easeOut})
//     setState(true)
//   }

//   const shrink = () => {
//     TweenMax.to(circleRed, 0.8, {width: 75, height: 75, ease: Power3.easeOut})
//     setState(false)
//   }

//   useEffect(() => {
//     TweenMax.to(container, 0, {css: {visibility: 'visible'}})

//     TweenMax.from(circle, 1.5, {opacity: 0, x: 250, ease: Power3.easeOut})

//     TweenMax.from(circleRed, 1.5, {
//       opacity: 0,
//       x: 250,
//       ease: Power3.easeOut,
//       delay: 0.4
//     })

//     TweenMax.from(circleGreen, 1.5, {
//       opacity: 0,
//       x: 250,
//       ease: Power3.easeOut,
//       delay: 0.8
//     })
//   }, [])

//   return (
//     <div
//       ref={el => {
//         container = el
//       }}
//       className="circle-container"
//     >
//       <div
//         ref={el => {
//           circle = el
//         }}
//         className="circle"
//       />

//       <div
//         onClick={state !== true ? expand : shrink}
//         ref={el => {
//           circleRed = el
//         }}
//         className="circle red"
//       />

//       <div
//         ref={el => {
//           circleGreen = el
//         }}
//         className="circle green"
//       />
//     </div>
//   )
// }

// export default Circles
