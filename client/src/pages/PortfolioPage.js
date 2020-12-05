import React from 'react';
import Grid from "@material-ui/core/Grid";

import {PortfolioCard} from "../components";
import portfolioItems from '../apis/portfolioItems';

export const PortfolioPage = () => {

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={10}>
        <div>
          {  portfolioItems.map(({title, description, githubUrl, appUrl, imageUrl}) => {
            return (
              <div className="slide" key={title}>
                <PortfolioCard
                  title={title}
                  description={description}
                  githubUrl={githubUrl}
                  appUrl={appUrl}
                  imageUrl={imageUrl}
                />
              </div>
            )
          })}
        </div>
      </Grid>
    </Grid>
  )
}
