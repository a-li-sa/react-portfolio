import React from 'react';
import anime from 'animejs/lib/anime.es.js';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Tooltip from '@material-ui/core/Tooltip';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    cursor: "pointer",
    textAlign: "center",
  },
});

const TextOnlyTooltip = withStyles({
  tooltip: {
    backgroundColor: "black",
    fontSize: 14,
    textAlign: "center",
  }
})(Tooltip);

export const AnimatedPrompt = () => {
  const classes = useStyles();
  anime({
    targets: '#prompt',
    duration: 500,
    opacity: [1, 0],
    delay: 500,
    easing: 'linear',
    direction: 'alternate',
    loop: true,
  });
  anime({
    targets: '#prompt',
    translateY: [100, 0],
    duration: 1200,
    opacity: [0, 1],
    delay: 500,
    easing: 'easeInOutExpo'
  });

  return (
    <TextOnlyTooltip title="Scroll, swipe, use arrow keys, or use navigation menu to continue." placement="bottom">
      <KeyboardArrowDownIcon fontSize="large" id="prompt" className={classes.root} />
    </TextOnlyTooltip>
  )
}
