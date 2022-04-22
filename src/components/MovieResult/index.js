import React from 'react';
import { Button, Card, Grid, Typography } from '@mui/material';

export default function MovieResult({ Title, Year, Type, imdbID, Poster }) {
    return (
        <Card>
            <Grid container>
                <Grid item>
                    <img src={Poster} alt={Title} />
                </Grid>
                <Grid item>
                    <Typography>{Title}</Typography>
                    <Typography>{Year}</Typography>
                    <Typography>{Type}</Typography>
                    <Button color='primary' variant='contained'>more...</Button>
                </Grid>
            </Grid>
        </Card>
    );
}