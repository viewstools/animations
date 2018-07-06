import { animated, Spring as ReactSpring } from 'react-spring/dist/web'
import React from 'react'
import SpringAnimation from './dom-spring-animation.js'

export { animated }

export const Spring = ({
  bounciness,
  children,
  delay,
  native,
  onDone,
  speed,
  to,
}) => (
  <ReactSpring
    config={{ bounciness, speed }}
    delay={delay}
    impl={SpringAnimation}
    native={native}
    onRest={onDone}
    to={to}
  >
    {children}
  </ReactSpring>
)
