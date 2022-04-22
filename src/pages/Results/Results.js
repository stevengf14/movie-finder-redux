import { Container, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import queryString from 'query-string';

import { searchMovie } from '../../redux/actions/search_action'
import { movieResults, isSearchLoading } from "../../redux/selectors/selector";
import MovieResult from "../../components/MovieResult/MovieResult";

export default ({ location }) => {

    const dispatch = useDispatch();
    const movies = useSelector(state => movieResults(state));
    const isLoading = useSelector(state => isSearchLoading(state));
    const [isLooked, setIsLooked] = useState(false);

    useEffect(() => {
        const { movieName } = queryString.parse(location.search);
        if (movieName && !isLooked) {
            setIsLooked(true);
            dispatch(searchMovie({ movieName }));
        }
    });

    const renderMovies = () => {
        if (movies) {
            return movies.map((value, index) => <MovieResult key={index} {...value} />)
        } else {
            return <CircularProgress size={100} color="primary" />
        }
    };

    return (
        <Container>
            {renderMovies()}
        </Container>
    )
}