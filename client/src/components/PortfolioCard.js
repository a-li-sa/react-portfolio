import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import CodeIcon from '@material-ui/icons/Code';
import ComputerIcon from '@material-ui/icons/Computer';
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
  media: {
    height: '50vh',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  action: {
    display: 'flex',
    justifyContent: 'center',
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
    <Box m={4}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            className={classes.media}
            image={props.imageUrl}
            title={props.title}
          />
        </CardActionArea>
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
            <img src={props.imageUrl} alt={props.title} style={{height: '100%'}}/>
          </Fade>
        </Modal>
        <CardActions className={classes.action}>
          <TextOnlyTooltip title="GitHub Repository" placement="left">
            <IconButton  color="inherit" href={props.githubUrl} target="_blank">
              <CodeIcon/>
            </IconButton>
          </TextOnlyTooltip>
          <TextOnlyTooltip title="Deployed Application" placement="right">
            <IconButton color="inherit" href={props.appUrl} target="_blank">
              <ComputerIcon/>
            </IconButton>
          </TextOnlyTooltip>
        </CardActions>
      </Card>
    </Box>
  );
}
