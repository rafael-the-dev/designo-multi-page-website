import { makeStyles } from "@mui/styles";
import heroImage from '../../assets/images/about/mobile/image-about-hero.jpg'
import heroBgPattern from '../../assets/images/about/mobile/bg-pattern-hero-about-mobile.svg'
import worldClassTalentImage from '../../assets/images/about/mobile/image-world-class-talent.jpg'
import realDealImage from '../../assets/images/about/mobile/image-real-deal.jpg'


import heroImageTablet from '../../assets/images/about/tablet/image-about-hero.jpg'
import worldClassTalentImageTablet from '../../assets/images/about/tablet/image-world-class-talent.jpg'
import realDealImageTablet from '../../assets/images/about/tablet/image-real-deal.jpg'

import heroImageDesktop from '../../assets/images/about/desktop/image-about-hero.jpg'
import worldClassTalentDesktopImage from '../../assets/images/about/desktop/image-world-class-talent.jpg'
import realDealDesktopImage from '../../assets/images/about/desktop/image-real-deal.jpg'
import heroBgPatternDesktop from '../../assets/images/about/desktop/bg-pattern-hero-about-desktop.svg'

export const useStyles = makeStyles(theme => ({
    container: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '5%',
            paddingRight: '5%'
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: '10%',
            paddingRight: '10%'
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
            height: 350,
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
        padding: '4rem 5%',
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
            paddingLeft: '5%',
            paddingRight: 0
        }
    },
    description: {
        lineHeight: '1.7rem !important',
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
    },
    details: {
        backgroundColor: '#FDF3F0',
        [theme.breakpoints.up('sm')]: {
            borderRadius: 15,
        },
    },
    detailsImageContainer: {
        backgroundImage: `url(${worldClassTalentImage})`,
        height: 390,
        objectFit: 'cover',
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `url(${worldClassTalentImageTablet})`,
            borderRadius: '15px 15px 0 0',
            height: 320,
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage: `url(${worldClassTalentDesktopImage})`,
            borderRadius: '15px 0 0 15px',
            height: 440,
            width: 355
        }
    },
    detailsContent: {
        padding: '4rem 5%',
        [theme.breakpoints.up('md')]: {
            maxWidth: '62%'
        }
    },
    detailsTitle: {
        color: '#E7816B'
    },
    cardsContainer: {
        marginTop: '7rem',
        [theme.breakpoints.up('md')]: {
            marginTop: '6rem'
        }
    },
    realDeal: {
        marginTop: '6rem'
    },
    realDealImageContainer: {
        backgroundImage: `url(${realDealImage})`,
        height: 390,
        objectFit: 'cover',
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `url(${realDealImageTablet})`,
            borderRadius: '15px 15px 0 0',
            height: 320,
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage: `url(${realDealDesktopImage})`,
            borderRadius: '0 15px 15px 0',
            height: 440,
            width: 355
        }
    }
}));