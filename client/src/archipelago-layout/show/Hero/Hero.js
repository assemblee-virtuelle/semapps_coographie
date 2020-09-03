import React, { useState } from 'react';
import { Box, Grid, Typography, makeStyles } from '@material-ui/core';
import DetailsList from './DetailsList';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  }
}));

const Hero = ({ basePath, children, record, resource, title, image }) => {
  const classes = useStyles();
  const [ fallback, setFallback ] = useState(false);
  return (
    <div className={classes.root}>
      <Box>
        <Typography variant="h3" color="primary" paragraph>
          {React.cloneElement(title, { record })}
        </Typography>
      </Box>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={5}>
          <img src={!fallback ? record[image] || image || process.env.PUBLIC_URL + '/gv.png' : process.env.PUBLIC_URL + '/gv.png'} width="100%" alt={title} onError={() => setFallback(true)} />
        </Grid>
        <Grid item xs={12} sm={7}>
          <DetailsList record={record} resource={resource} basePath={basePath}>
            {children}
          </DetailsList>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hero;
