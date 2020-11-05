import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { WorkSection, ProjectSection, EducationSection } from './section'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  }
}));

export default function Tabloid(props) {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing="7">
        <Grid item lg={4} sm={12} xs={12}>
          <EducationSection />
        </Grid>
        <Grid item lg={4} sm={12} xs={12}>
          <WorkSection />
        </Grid>
        <Grid item lg={4} sm={12} xs={12}>
          <ProjectSection />
        </Grid>
      </Grid>
    </Container>
  )
};


// return (
//   <Container className={classes.root}> 
//   <Grid container spacing="2">
//     <Grid item lg={4} sm={12} xs={12}>
//       <Grid container direction="column" spacing="2">
//         <Grid item>
//           <Typography variant="body1">
//             a test
//           </Typography>
//         </Grid>
//         <Divider />
//         <Grid item>
//         <Typography variant="body1" component="h2" gutterBottom>
//           {"ffffffffffffffffffffffffffffffffffff"}
//           {"ffffffffffffffffffffffffff"}
//         </Typography>
//         </Grid>
//       </Grid>
//     </Grid>
//     <Grid item lg={4} sm={12} xs={12}>
//       <Typography variant="body1">
//         a test
//       </Typography>
//     </Grid>
//     <Grid item lg={4} sm={12} xs={12}>
//       <Typography variant="body1">
//         a test
//       </Typography>
//     </Grid>
//   </Grid>
// </Container>
// )