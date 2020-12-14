import React from 'react';
import { Grid } from "@material-ui/core";

import {PortfolioCard} from "../components";
import portfolioItems from '../apis/portfolioItems';

export const PortfolioPage = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={10}>
        { portfolioItems.map(({title, description, githubUrl, appUrl, imageUrl}) => {
          return (
            <PortfolioCard
              title={title}
              description={description}
              githubUrl={githubUrl}
              appUrl={appUrl}
              imageUrl={imageUrl}
              key={title}
            />
          )
        })}
      </Grid>
    </Grid>
  )
}
