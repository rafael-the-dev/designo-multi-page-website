import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    cardImageContainer: {
        height: 250
    },
    cardImage: {
        objectFit: 'cover'
    },
    cardContent: {
        backgroundColor: '#FDF3F0',
        marginBottom: '2rem',
        [theme.breakpoints.up('sm')]: {
            marginBottom: 0
        }
    }
}));