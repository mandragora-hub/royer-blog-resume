import React from 'react';
import { Typography, Grid, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  shortDivider: {
    width: '220px',
    height: '2px'
  },
  noview: {
    display: 'flex',
  },
  noviewItem: {
    marginLeft: theme.spacing(1),
    marginTop: '4px',
  },
}));

export default function WorkSection(props) {
  const classes = useStyles();

  return (
    <Grid container direction="column" spacing="2">
      <Grid item >
        <Grid container direction='column'>
          <Grid item>
            <Grid className={classes.noview} container direction='row'>
              <Grid item>
                <img
                  src='http://simpleicon.com/wp-content/uploads/embeb.svg'
                  alt="Girl in a jacket"
                  width="20"
                  height="30"
                />
              </Grid>
              <Grid className={classes.noviewItem} item>
                <Typography component="div"> {'Experiencia Laboral'} </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Divider className={classes.shortDivider} />
        </Grid>
      </Grid>
      <Grid item >
        <Typography color='textSecondary'> {'2018 - 2020'} </Typography>
        <Typography> {'Oficina Metropolitana De Autobuses - OMSA'}</Typography>
        <Typography> {'Tecnical Support'}</Typography>
      </Grid>
    </Grid>
  )
};