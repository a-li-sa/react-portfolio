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
        delay: 1500,
        easing: 'linear',
      },
      loop: true,
    })
    anime({
      targets: '#logo',
      translateY: [100, 0],
      duration: 1200,
      opacity: [0, 1],
      delay: (el, i) => {
        return 300 + 100 * i;
      },
    });
  }, [])
  return (
    <img id="logo" src={logo} alt="logo" height="400"/>
  )
}
