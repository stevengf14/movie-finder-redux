import { Container, CircularProgress, Typography, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeIcon from "../../icons/HomeIcon";

import { searchMovieById } from "../../redux/actions/search_action";
import { movieResult as movieResultSelector } from "../../redux/selectors/selector";

export default ({ match, history }) => {
    const dispatch = useDispatch();
    const movieResult = useSelector(state => movieResultSelector(state));

    useEffect(() => {
        const movieId = match.params.id;
        if (!movieResult || (movieResult && movieResult.imdbID !== movieId)) {
            dispatch(searchMovieById({ movieId }));
            dispatch(searchMovieById({ movieId }));
        }
    });

    if (!movieResult) {
        return <CircularProgress size={100} color="primary" />
    }

    const handleHome = event => {
        history.push('/');
    }

    return (
        <Container>
            <Typography variant="h3">{movieResult.Title}</Typography>
            <img src={movieResult.Poster} alt={movieResult.Title} />
            <Typography><strong>Actors: </strong>{movieResult.Actors}</Typography>
            <Typography><strong>Director: </strong>{movieResult.Director}</Typography>
            <Typography><strong>Country: </strong>{movieResult.Country}</Typography>
            <Typography><strong>Rated: </strong>{movieResult.Rated}</Typography>
            <Typography><strong>Awards: </strong>{movieResult.Awards}</Typography>
            <Typography><strong>Plot: </strong>{movieResult.Plot}</Typography>

            <Button onClick={handleHome}>
                <HomeIcon />
                Home
            </Button>
        </Container>
    )
}