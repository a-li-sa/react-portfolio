import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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
          <Box square component={Paper} variant="outlined" style={{backgroundColor: '#eaeaea', padding: '0px 150px 4px 150px',}}>
            <Box elevation={0} square style={{borderRadius: '0px 0px 30px 30px', backgroundColor: '#dedddd', padding: '2px 20px'}}>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
