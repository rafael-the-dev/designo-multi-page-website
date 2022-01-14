import { makeStyles } from "@mui/styles";
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
    projectsGrid: {
        display: 'grid',
        gridRowGap: 30,
        gridTemplateColumns: '100%',
        gridTemplateRows: '250px 250px 250px',
        [theme.breakpoints.up('sm')]: {
            gridTemplateRows: '230px 230px 230px',
        },
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: '48.5% 48.5%',
            gridTemplateRows: '270px 270px',
            gridGap: '25px 3%',
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
            gridRow: '1 / span 2'
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
    resourcefulAvatar: {
        "&::before": {
            transform: 'rotate(290deg)'
        }
    },
    friendlyAvatar: {
        "&::before": {
            transform: 'rotate(87deg)'
        }
    }
}));