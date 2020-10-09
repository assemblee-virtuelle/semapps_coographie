import React from 'react';
import { Container, Box, Grid, Hidden, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';

const useStyles = makeStyles(theme => ({
  header: {
    position: 'relative',
    height: 65
  },
  logo: {
    position: 'absolute',
    top: -15,
    height: 110,
    width: 110,
    [theme.breakpoints.down('xs')]: {
      position: 'relative',
      top: 0,
      width: 65,
      height: 65
    }
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box bgcolor="primary.main">
      <Container maxWidth="lg" className={classes.header}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Link to="/Note">
              <img src={process.env.PUBLIC_URL + '/av.png'} alt="Assemblée Virtuelle" className={classes.logo} />
            </Link>
          </Grid>
          <Hidden xsDown>
            <Grid item sm={6}>
              <Box pt={2}>
                <SearchForm />
              </Box>
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
