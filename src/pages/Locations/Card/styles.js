import { makeStyles } from "@mui/styles";
import bgPattern from '../../../assets/images/pattern/bg-pattern-three-circles.svg'

export const useStyles = makeStyles(theme => ({
    cardImageContainer: {
        height: 250,
        [theme.breakpoints.up('sm')]: {
            borderRadius: 15,
            marginBottom: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
            marginBottom: 0,
        }
    },
    cardImage: {
        borderRadius: 15,
        objectFit: 'cover'
    },
    cardContent: {
        backgroundColor: '#FDF3F0',
        backgroundImage: `url(${bgPattern})`,
        backgroundSize: 'cover',
        marginBottom: '2rem',
        [theme.breakpoints.up('sm')]: {
            borderRadius: 15,
            marginBottom: '5rem',
        },
        [theme.breakpoints.up('md')]: {
            marginBottom: 0,
        }
    },
    cardTitle: {
        color: '#E7816B'
    }
}));