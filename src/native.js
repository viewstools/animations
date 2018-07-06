import { Spring as ReactSpring } from 'react-spring/dist/native'
import { TimingAnimation, Easing } from 'react-spring/dist/addons'
import React from 'react'
import SpringAnimation from './native-spring-animation.js'

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
    impl={SpringAnimation}
    delay={delay}
    native={native}
    onDone={onDone}
    to={to}
  >
    {children}
  </ReactSpring>
)

export const Timing = ({
  children,
  curve,
  duration,
  delay,
  native,
  onDone,
  to,
}) => (
  <ReactSpring
    config={{ delay, duration, easing: Easing[curve] }}
    impl={TimingAnimation}
    native={native}
    onDone={onDone}
    to={to}
  >
    {children}
  </ReactSpring>
)
