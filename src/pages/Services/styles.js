import { makeStyles } from "@mui/styles";
import heroPattern from '../../assets/images/pattern/bg-pattern-two-circles.svg';
import heroPatternTablet from '../../assets/images/pattern/bg-pattern-call-to-action.svg';


import webDesignMobile from '../../assets/images/home/mobile/image-web-design.jpg'
import appDesignMobile from '../../assets/images/home/mobile/image-app-design.jpg'
import graphicDesignMobile from '../../assets/images/home/mobile/image-graphic-design.jpg'

import webDesignTablet from '../../assets/images/home/tablet/image-web-design.jpg'
import appDesignTablet from '../../assets/images/home/tablet/image-app-design.jpg'
import graphicDesignTablet from '../../assets/images/home/tablet/image-graphic-design.jpg'

import webDesignDesktop from '../../assets/images/home/desktop/image-web-design-large.jpg'
import appDesignDesktop from '../../assets/images/home/desktop/image-app-design.jpg'
import graphicDesignDesktop from '../../assets/images/home/desktop/image-graphic-design.jpg'

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
        textTransform: 'capitalize',
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
        transform: 'translate(0, 2%)',
        [theme.breakpoints.up('md')]: {
            gridColumnGap: '2%',
            gridTemplateColumns: '32% 32% 32%',
            gridTemplateRows: 'auto auto',
            transform: 'translate(0, 4%)',
        }
    },
    projectsGrid: {
        display: 'grid',
        gridRowGap: 30,
        gridTemplateColumns: '100%',
        gridTemplateRows: '250px 250px',
        transform: 'translate(0, 14%)',
        [theme.breakpoints.up('sm')]: {
            gridTemplateRows: '230px 230px',
        },
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: '48.5% 48.5%',
            gridTemplateRows: '270px',
            gridGap: '25px 3%',
            transform: 'translate(0, 11%)',
        }
    },
    project: {
        borderRadius: 30
    },
    webDesign: {
        backgroundImage: `${linearGradient}, url(${webDesignMobile})`,
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `${linearGradient}, url(${webDesignTablet})`,
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage: `${linearGradient}, url(${webDesignDesktop})`,
        }
    },
    appDesign: {
        backgroundImage: `${linearGradient}, url(${appDesignMobile})`,
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `${linearGradient}, url(${appDesignTablet})`,
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage: `${linearGradient}, url(${appDesignDesktop})`,
        }
    },
    graphicDesign: {
        backgroundImage: `${linearGradient}, url(${graphicDesignMobile})`,
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `${linearGradient}, url(${graphicDesignTablet})`,
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage: `${linearGradient}, url(${graphicDesignDesktop})`,
        }
    },
    rightArrow: {
        color: '#E7816B !important',
        fontSize: '1rem !important'
    },
}));