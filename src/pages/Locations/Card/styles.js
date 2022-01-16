import { makeStyles } from "@mui/styles";
import bgPattern from '../../../assets/images/pattern/bg-pattern-three-circles.svg'

export const useStyles = makeStyles(theme => ({
    cardImageContainer: {
        height: 250
    },
    cardImage: {
        objectFit: 'cover'
    },
    cardContent: {
        backgroundColor: '#FDF3F0',
        backgroundImage: `url(${bgPattern})`,
        backgroundSize: 'cover',
        marginBottom: '2rem',
        [theme.breakpoints.up('sm')]: {
            marginBottom: 0
        }
    },
    cardTitle: {
        color: '#E7816B'
    }
}));