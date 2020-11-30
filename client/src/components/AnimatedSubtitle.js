import React, {useEffect} from 'react';
import anime from 'animejs/lib/anime.es.js';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    cursor: "pointer",
  },
});

export const AnimatedSubtitle = (props) => {
  const classes = useStyles();
  anime({
    targets: '#subtitle',
    translateY: [100, 0],
    duration: 1200,
    opacity: [0, 1],
    delay: 500,
    easing: 'easeInOutExpo'
  });
  useEffect(() => {
    const subtitleEl = document.querySelector('#subtitle');
    function subtitleHover(scale, duration, elasticity) {
      anime.remove(subtitleEl);
      anime({
        targets: subtitleEl,
        scale: scale,
        duration: duration,
        elasticity: elasticity,
        easing: 'easeInOutExpo',
      });
    }

    function enterButton() { subtitleHover(1.2, 800, 400) };
    function leaveButton() { subtitleHover(1.0, 600, 300) };

    subtitleEl.addEventListener('mouseenter', enterButton, false);
    subtitleEl.addEventListener('mouseleave', leaveButton, false);

  }, [])

  return (
    <Typography className={classes.root} id="subtitle" component="h2" variant="button" onClick={props.onClick}>
      Fullstack developer currently based in San Francisco
    </Typography>
  )
}
