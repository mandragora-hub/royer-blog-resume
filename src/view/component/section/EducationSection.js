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

export default function EducationSection(props) {
  const classes = useStyles();

  return (
    <Grid container direction="column" spacing="2">
      <Grid item >
        <Grid container direction='column'>
          <Grid item>
            <Grid className={classes.noview} container direction='row'>
              <Grid item>
                <img
                  src='http://pngimg.com/uploads/lighthouse/lighthouse_PNG54.png'
                  alt="Girl in a jacket"
                  width="20"
                  height="30"
                ></img>
              </Grid>
              <Grid className={classes.noviewItem} item>
                <Typography component="div"> {'Educacion'} </Typography>
              </Grid>

            </Grid>
          </Grid>
          <Divider className={classes.shortDivider} />
        </Grid>
      </Grid>
      <Grid item >
        <Typography color='textSecondary'> {'2016'} </Typography>
        <Typography> {'Politecnico Simon Orozco'}</Typography>
        <Typography> {'Tecnico Prodesional de informatica'}</Typography>
      </Grid>
      <Grid item >
        <Typography color='textSecondary'> {'2017 - Presente'} </Typography>
        <Typography> {'Universidad APEC'}</Typography>
        <Typography> {'Ing. en Software'}</Typography>
      </Grid>
    </Grid>
  )
};