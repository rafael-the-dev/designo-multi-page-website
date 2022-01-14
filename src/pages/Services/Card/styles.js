import { makeStyles } from "@mui/styles";

const linearGradient = 'linear-gradient(to bottom, rgba(0, 0, 0, .1), rgba(0, 0, 0, .4))';
export const useStyles = makeStyles(theme => ({
    card: {
        borderRadius: 15
    },
    cardImageContainer: {
        borderRadius: '15px 15px 0 0',
        height: 300,
        [theme.breakpoints.up('sm')]: {
            borderRadius: '15px 0 0 15px',
            width: '60%'
        },
        [theme.breakpoints.up('md')]: {
            borderRadius: '15px 15px 0 0',
            width: '100%'
        }
    },
    cardImage: {
        borderRadius: '15px 15px 0 0',
        [theme.breakpoints.up('sm')]: {
            borderRadius: '15px 0 0 15px',
        },
        [theme.breakpoints.up('md')]: {
            borderRadius: '15px 15px 0 0',
        }
    },
    cardContent: {
        backgroundColor: '#FDF3F0',
        borderRadius: '0 0 15px 15px',
        paddingLeft: '5%',
        paddingRight: '5%',
        [theme.breakpoints.up('sm')]: {
            borderRadius: '0 15px 15px 0',
            width: '40%'
        },
        [theme.breakpoints.up('md')]: {
            borderRadius: '0 0 15px 15px',
            boxSizing: 'border-box',
            width: '100%'
        }
    },
    cardTitle: {
        color: '#E7816B'
    }
}));