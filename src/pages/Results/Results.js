import { Container, CircularProgress, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import queryString from 'query-string';

import { searchMovie } from '../../redux/actions/search_action'
import { movieResults } from "../../redux/selectors/selector";
import MovieResult from "../../components/MovieResult/MovieResult";
import HomeIcon from "../../icons/HomeIcon";

export default ({ location, history }) => {

    const dispatch = useDispatch();
    const movies = useSelector(state => movieResults(state));
    const [isLooked, setIsLooked] = useState(false);

    useEffect(() => {
        startDispatch()
    });

    function startDispatch(){
        const { movieName } = queryString.parse(location.search);
        if (movieName && !isLooked) {
            setIsLooked(true);
            dispatch(searchMovie({ movieName }));
        }
    }

    const renderMovies = () => {
        if (movies) {
            return movies.map((value, index) => <MovieResult key={index} {...value} />)
        } else {
            return <CircularProgress size={100} color="primary" />
        }
    };

    const handleHome = event => {
		history.push('/');
	}

    return (
        <Container>
            <Button onClick={handleHome}>
                <HomeIcon />
                Home
            </Button>
            {renderMovies()}
        </Container>
    )
}