import React from 'react';
import { Typography, Grid, Container} from '@material-ui/core';
import {Mood as MoodIcon} from '@material-ui/icons';

const MainTitle = (props) => {
    return ( 
        <Container>
            <Grid container spacing="1" alignItems="flex-end">
            <Grid item >
                <MoodIcon/>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="h1" >
                    Hi there, I'm Royer.
                </Typography>
            </Grid>
            </Grid>     
            <Typography variant="body1" component="h2" gutterBottom>
                {'Soy un programador que busca desarollar productos utiles e innovadores'}
            </Typography>
        </Container>
    );
};


export default MainTitle;