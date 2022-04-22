import React, { useState } from 'react';
import { Container, Card, Grid, Typography, TextField, Button } from '@mui/material';
import styles from './Home_style';
import { MovieIcon } from '../../icons/icons';

export default function ({ history }) {
	const [searchText, setSearchText] = useState('');
	const [isHidden, setIsHidden] = useState(true);
	const classes = styles();

	const handleSearchTextChange = event => {
		setSearchText(event.target.value);
	}

	const handleCleanText = event => {
		setSearchText('');
	}

	const handleSearchText = event => {
		if (searchText === '') {
			setIsHidden(false);
		} else {
			setIsHidden(true);
			history.push(`/results?movieName=${searchText}`);
		}

	}

	return (
		<Container className={classes.container}>
			<Card className={classes.cardContainer}>
				<Grid container className={classes.titleGridContainer}>
					<Grid>
						<Typography className={classes.title}><strong>Find your movie!</strong></Typography>
					</Grid>
					<Grid>
						<MovieIcon className={classes.movieIcon} />
					</Grid>
				</Grid>
				<TextField
					value={searchText}
					placeholder="Search..."
					className={classes.TextFieldSearch}
					onChange={handleSearchTextChange} />
				<Grid className={classes.buttonsContainer} >
					<Button
						variant="contained"
						color="secondary"
						onClick={handleCleanText}>
						Clean
					</Button>
					<Button
						variant="contained"
						className={classes.searchButton}
						color="primary"
						onClick={handleSearchText}>
						Search
					</Button>
				</Grid>
			</Card>
			<Typography color="secondary" hidden={isHidden}>Textbox is empty!</Typography>
		</Container>
	);
}