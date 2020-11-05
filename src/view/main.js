import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


import { MainTitle, Tabloid } from './component'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: '#FFFFFF',
  },
  main: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(2),
  },
  message: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(5)

  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="md">
        <MainTitle />
        <Tabloid />
      </Container>
      {/* <Typography className={classes.message} variant='h5'> Este sitio esta en construccion. </Typography> */}
      {/* <footer className={classes.footer}>
        <Container maxWidth="md">
          <Typography variant="body1">My sticky footer can be found here.</Typography>
          <Copyright />
        </Container>
      </footer> */}
    </div>
  );
}