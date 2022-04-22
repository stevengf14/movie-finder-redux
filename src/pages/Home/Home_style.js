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
        width: 600,
        height: 300,
        padding: '3rem',
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
        marginLeft: '1rem'
    },
    buttonsContainer: {
        marginTop: '.5rem'
    },
    movieIcon: {
        paddingLeft: '1rem',
        fontSize: '5rem'
    }
});