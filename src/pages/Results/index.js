import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import queryString from 'query-string';

import { searchMovie } from '../../redux/actions/search'
import { movieResults, isSearchLoading } from "../../redux/selectors";

export default ({ location }) => {

    const dispatch = useDispatch();
    const movies = useSelector(state => movieResults(state));

    useEffect(() => {
        const { movieName } = queryString.parse(location.search);
        if (movieName && !movies) {
            dispatch(searchMovie({ movieName }));
        }
    });

    return (
        <Container>
           Result
        </Container>
    )
}