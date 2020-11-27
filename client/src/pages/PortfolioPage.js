import React from 'react';
import { Grid } from '@material-ui/core/';

import PortfolioCard from "../components/PortfolioCard";
import portfolioItems from '../apis/portfolioItems';

export const PortfolioPage = () => {

  return (
    <Grid container spacing={2}>
      {  portfolioItems.map(({title, description, githubUrl, appUrl, imageUrl}) => {
        return (
          <Grid item xs={12} sm={3}>
            <PortfolioCard
              key={title}
              title={title}
              description={description}
              githubUrl={githubUrl}
              appUrl={appUrl}
              imageUrl={imageUrl}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}
