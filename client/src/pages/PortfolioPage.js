import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton';
import CodeIcon from '@material-ui/icons/Code';
import ComputerIcon from '@material-ui/icons/Computer';

import {PortfolioCard} from "../components";
import portfolioItems from '../apis/portfolioItems';
import {withStyles} from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Hidden from "@material-ui/core/Hidden";

const TextOnlyTooltip = withStyles({
  tooltip: {
    backgroundColor: "black",
    fontSize: 14,
  }
})(Tooltip);

export const PortfolioPage = () => {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={10}>
        <div>
          {  portfolioItems.map(({title, description, githubUrl, appUrl, imageUrl}) => {
            return (
              <div className="slide" key={title}>
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <Box ml={3} mr={3}>
                      <Hidden smDown>
                        <Typography variant="h2">
                          {title}
                        </Typography>
                      </Hidden>
                      <Hidden mdUp>
                        <Typography variant="h2" style={{fontSize: 30}}>
                          {title}
                        </Typography>
                      </Hidden>
                      <Typography variant="subtitle">
                        {description}
                      </Typography>
                    </Box>
                    <Box ml={3} mr={3} mb={3}>
                      <TextOnlyTooltip title="GitHub Repository" placement="bottom">
                        <IconButton  color="inherit" href={githubUrl} target="_blank">
                          <CodeIcon/>
                        </IconButton>
                      </TextOnlyTooltip>
                      <TextOnlyTooltip title="Deployed Application" placement="bottom">
                        <IconButton color="inherit" href={appUrl} target="_blank">
                          <ComputerIcon/>
                        </IconButton>
                      </TextOnlyTooltip>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <PortfolioCard
                      title={title}
                      description={description}
                      githubUrl={githubUrl}
                      appUrl={appUrl}
                      imageUrl={imageUrl}
                    />
                  </Grid>
                </Grid>
              </div>
            )
          })}
        </div>
      </Grid>
    </Grid>
  )
}
