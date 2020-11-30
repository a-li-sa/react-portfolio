import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

import logo from "../assets/logo.svg";

export const AnimatedLogo = () => {
  useEffect(() => {
    anime({
      targets: '#logo',
      rotate: {
        value: '-1turn',
        duration: 9000,
        easing: 'linear',
      },
      loop: true,
    })
    anime({
      rotate: {
        value: '-1turn',
        duration: 9000,
        easing: 'linear',
      },
      targets: '#logo',
      translateY: [100, 0],
      duration: 1000,
      opacity: [0, 1],
      easing: 'easeInOutExpo'
    });
  }, [])
  return (
    <img id="logo" src={logo} alt="logo" height="400"/>
  )
}
