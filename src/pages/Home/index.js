import React, { useState } from 'react';
import { Container, Card, Grid, Typography, TextField, Button } from '@mui/material';
import styles from './style';
import { MovieIcon } from '../../icons';

export default function ({ history }) {
	const [searchText, setSearchText] = useState('');
	const classes = styles();

	const handleSearchTextChange = event => {
		setSearchText(event.target.value);
	}

	const handleCleanText = event => {
		setSearchText('');
	}

	const handleSearchText = event => {
		history.push(`/results?movieName=${searchText}`);
	}

	return (
		<Container className={classes.container}>
			<Card className={classes.cardContainer}>
				<Grid container className={classes.titleGridContainer}>
					<Grid>
						<Typography className={classes.title}>Welcome!</Typography>
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
				<Grid className={classes.buttonsContainer}>
					<Button
						variant="contained"
						color="grey"
						onClick={handleCleanText}>
						Clean
					</Button>
					<Button
						variant="contained"
						className={classes.searchButton}
						color="primary"
						size="large"
						onClick={handleSearchText}>
						Search
					</Button>
				</Grid>
			</Card>
		</Container>
	);
}