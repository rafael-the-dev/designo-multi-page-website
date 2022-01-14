import { makeStyles } from "@mui/styles";
import heroPattern from '../../assets/images/pattern/bg-pattern-two-circles.svg';
import heroPatternTablet from '../../assets/images/pattern/bg-pattern-call-to-action.svg';

const linearGradient = 'linear-gradient(to bottom, rgba(0, 0, 0, .1), rgba(0, 0, 0, .4))';
export const useStyles = makeStyles(theme => ({
    hero: {
        backgroundColor: '#E7816B',
        backgroundImage: `url(${heroPattern})`,
        backgroundPosition: 'right -43px bottom 23px',
        borderRadius: 15,
        height: 300,
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `url(${heroPatternTablet})`,
            backgroundPosition: 'right -43px center',
            height: 250,
        },
        [theme.breakpoints.up('md')]: {
            height: 285,
        }
    },
    heroTitle: {
        [theme.breakpoints.up('sm')]: {
            fontSize: '2.35rem !important'
        }
    },
    heroDescription: {
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.02rem !important',
            maxWidth: '70%',
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '50%'
        }
    },
    cardsContainer: {
        display: 'grid',
        gridRowGap: 36,
        gridTemplateColumns: '100%',
        gridTemplateRows: 'auto auto auto auto auto auto',
        transform: 'translate(0, 3%)'
    }
}));