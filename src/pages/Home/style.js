//import { makeStyles } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const centeredStyleObj = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

export default makeStyles({
    container: {
        height: '100vh',
        flexDirection: 'column',
        ...centeredStyleObj
    },
    cardContainer: {
        flexDirection: 'column',
        width: 400,
        height: 200,
        padding: '2rem',
        ...centeredStyleObj
    },
    title: {
        fontSize: '4rem'
    },
    titleGridContainer: {
        ...centeredStyleObj
    },
    textFieldSearch: {
        width: '90%'
    },
    searchButton: {
        marginLeft: 'r5em'
    },
    buttonsContainer: {
        marginTop: '.5rem'
    },
    movieIcon: {
        fontSize: '4rem'
    }
});