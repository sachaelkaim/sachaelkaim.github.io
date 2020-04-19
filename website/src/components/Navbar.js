import React from 'react'
import {Transition} from 'react-spring/renderprops'
import '../App.css'

export default function Viewpager() {
  const items = [1,2,3,4]
  return (
    <div>
    <Transition
  items={items} keys={item => item.key}
  from={{ transform: 'translate3d(0,-40px,0)' }}
  enter={{ transform: 'translate3d(0,0px,0)' }}
  leave={{ transform: 'translate3d(0,-40px,0)' }}>
  {item => props => <div style={props}>{item.text}</div>}
</Transition>
    </div>
  )
}

