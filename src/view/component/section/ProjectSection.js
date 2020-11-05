import React from 'react';
import { Typography, Grid, Divider, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';

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
            <Grid container direction='column'>
              <Grid item>
                <Grid className={classes.noview} container direction='row'>
                  <Grid item>
                    <img
                      src='http://pngimg.com/uploads/bank/bank_PNG23.png'
                      alt="Girl in a jacket"
                      width="20"
                      height="30"
                    />
                  </Grid>
                  <Grid className={classes.noviewItem} item>
                    <Typography component="div"> {'Practicas'} </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Divider className={classes.shortDivider} />
            </Grid>
          </Grid>
          <Grid item>
            <Box mt="10px">
              <Typography >
                <Link href="https://clone-2fa9c.web.app/" target="_blank" color="inherit">
                  {'Amazon - Clone'}
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item >
            <Box mt="10px">
              <Typography >
                <Link href="https://iso-815.herokuapp.com/" target="_blank" color="inherit">
                  {'ISO815 - Restfull Api(CRUD)'}
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item >
            <Box mt="10px">
              <Typography >
                <Link href="https://github.com/mandragora-hub/royer-blog-resume" target="_blank" color="inherit">
                  {'Repository - CV Resumen'}
                </Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

  )
};