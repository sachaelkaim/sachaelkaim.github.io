import React from 'react'
import '../App.css'
import orbit from '../images/orbit.png'
import { useSpring, animated } from "react-spring";
import {Keyframes} from 'react-spring/renderprops'

export default function Enter() {
    const initial = 360;
    const destination = 0;
  
    

    const spring = useSpring({
      from: {
        rotate: initial,
        transform: `rotateZ(${initial}deg)`
      },
      to: {
        rotate: destination,
        transform: `rotateZ(${destination}deg)`
      },
      reset: true,
      config: {
        mass: 1,
        tension: 10,
        friction: 10
      }
    });
  return (
    <div id="containerEnter">
       
        <div className="d-flex justify-content-center d-flex align-items-center min-vh-100">
        <animated.div className="test" style={spring} />
        </div>
    </div>
  )
}

