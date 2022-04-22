import React from 'react';
import { Button, Card, Grid, Typography } from '@mui/material';
import { withRouter } from 'react-router-dom';
import style from './MovieResult_style';

function MovieResult({ Title, Year, Type, imdbID, Poster, history }) {
    const classes = style();

    const handleSeeMovieClick = () => {
        history.push(`/movie/${imdbID}`);
    }

    return (
        <Card className={classes.cardContainer}>
            <Grid container>
                <Grid item>
                    <img src={Poster} alt={Title} className={classes.poster} />
                </Grid>
                <Grid item className={classes.titlesContainer}>
                    <Typography>{Title}</Typography>
                    <Typography>{Year}</Typography>
                    <Typography>{Type}</Typography>
                    <Button color='primary' variant='contained' onClick={handleSeeMovieClick}>Detail</Button>
                </Grid>
            </Grid>
        </Card>
    );
}; export default withRouter(MovieResult);