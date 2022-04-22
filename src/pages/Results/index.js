import { Container, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import queryString from 'query-string';

import { searchMovie } from '../../redux/actions/search'
import { movieResults, isSearchLoading } from "../../redux/selectors";
import MovieResult from "../../components/MovieResult";

export default ({ location }) => {

    const dispatch = useDispatch();
    const movies = useSelector(state => movieResults(state));
    const isLoading = useSelector(state => isSearchLoading(state));

    useEffect(() => {
        const { movieName } = queryString.parse(location.search);
        if (movieName && !movies) {
            dispatch(searchMovie({ movieName }));
        }
    });

    const renderMovies = () => {
        if (movies) {
            return movies.map((value, index) => <MovieResult key={index} {...value} />)
        } else {
            return <CircularProgress size={100} color="primary" />
        }
        return <div></div>
    };

    return (
        <Container>
            {renderMovies()}
        </Container>
    )
}