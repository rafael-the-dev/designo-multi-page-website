import { makeStyles } from "@mui/styles";
import heroImage from '../../assets/images/about/mobile/image-about-hero.jpg'
import heroBgPattern from '../../assets/images/about/mobile/bg-pattern-hero-about-mobile.svg'


import heroImageTablet from '../../assets/images/about/tablet/image-about-hero.jpg'
import heroImageDesktop from '../../assets/images/about/desktop/image-about-hero.jpg'
import heroBgPatternDesktop from '../../assets/images/about/desktop/bg-pattern-hero-about-desktop.svg'

export const useStyles = makeStyles(theme => ({
    container: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '5%',
            paddingRight: '5%'
        },
    },
    hero: {
        backgroundColor: '#E7816B',
        [theme.breakpoints.up('sm')]: {
            borderRadius: 15,
        },
    },
    image: {
        height: 250,
        [theme.breakpoints.up('sm')]: {
            height: 320
        },
        [theme.breakpoints.up('md')]: {
            height: 320,
            width: 320
        }
    },
    heroImageContainer: {
        backgroundImage: `url(${heroImage})`,
        objectFit: 'cover',
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `url(${heroImageTablet})`,
            borderRadius: '15px 15px 0 0',
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage: `url(${heroImageDesktop})`,
            borderRadius: '0 15px 15px 0',
        }
    },
    heroContent: {
        backgroundImage: `url(${heroBgPattern})`,
        backgroundPosition: 'right 2px top -140px',
        paddingBottom: '4rem',
        paddingTop: '4rem',
        [theme.breakpoints.up('sm')]: {
            backgroundPosition: 'left -818px top -230px',
            backgroundSize: 1200,
            borderRadius: '0 0 15px 15px'
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage: `url(${heroBgPatternDesktop})`,
            backgroundPosition: 'left -99px top -214px',
            backgroundSize: 500,
            maxWidth: '48%',
            paddingLeft: '5%'
        }
    },
    description: {
        [theme.breakpoints.up('sm')]: {
            marginLeft: 'auto !important',
            marginRight: 'auto !important',
            maxWidth: '70%'
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '0 !important',
            marginRight: '0 !important',
            maxWidth: '100%'
        }
    }
}));