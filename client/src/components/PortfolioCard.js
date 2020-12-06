import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import {Box, Grid, Paper, Modal, Backdrop, Fade, Hidden, Typography, IconButton, Tooltip} from '@material-ui/core'
import CodeIcon from "@material-ui/icons/Code";
import ComputerIcon from "@material-ui/icons/Computer";

const useStyles = makeStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    cursor: "pointer",
    textAlign: "center",
  }
});

const TextOnlyTooltip = withStyles({
  tooltip: {
    backgroundColor: "black",
    fontSize: 14,
  }
})(Tooltip);

export function PortfolioCard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="slide" key={props.title}>
      <Grid container alignItems="center">
        <Grid item xs={12} md={6} lg={8}>
          <Box ml={3} mr={3}>
            <Hidden smDown>
              <Typography variant="h2">
                {props.title}
              </Typography>
            </Hidden>
            <Hidden mdUp>
              <Typography variant="h2" style={{fontSize: 30}}>
                {props.title}
              </Typography>
            </Hidden>
            <Typography variant="body1">
              {props.description}
            </Typography>
          </Box>
          <Box ml={3} mr={3} mb={3}>
            <TextOnlyTooltip title="GitHub Repository" placement="bottom">
              <IconButton  color="inherit" href={props.githubUrl} target="_blank">
                <CodeIcon/>
              </IconButton>
            </TextOnlyTooltip>
            <TextOnlyTooltip title="Deployed Application" placement="bottom">
              <IconButton color="inherit" href={props.appUrl} target="_blank">
                <ComputerIcon/>
              </IconButton>
            </TextOnlyTooltip>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box>
            <Grid container direction="column" alignItems="center" justify="center" style={{textAlign: "center"}}>
              <Grid item>
                <Box component={Paper} variant="outlined" style={{backgroundColor: '#dedddd', padding: '4px'}}>
                  <Box component={Paper} variant="outlined" style={{color: '#dedddd', backgroundColor: 'black'}}>
                    ∙
                    <Box ml={2} mr={2} mb={2} component={Paper} elevation={0} square>
                      <img src={props.imageUrl} alt={props.title} width={250} onClick={handleOpen} className={classes.image}/>
                    </Box>
                  </Box>
                </Box>
                <Modal
                  className={classes.modal}
                  open={open}
                  onClick={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open}>
                    <img src={props.imageUrl} alt={props.title} style={{width: '90%'}}/>
                  </Fade>
                </Modal>
              </Grid>
              <Grid item>
                <Box component={Paper} square variant="outlined" style={{backgroundColor: '#eaeaea', padding: '0px 150px 4px 150px',}}>
                  <Box elevation={0} style={{borderRadius: '0px 0px 30px 30px', backgroundColor: '#dedddd', padding: '2px 20px'}}>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
