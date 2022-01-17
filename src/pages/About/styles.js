import { makeStyles } from "@mui/styles";
import heroImage from '../../assets/images/about/mobile/image-about-hero.jpg'
import heroBgPattern from '../../assets/images/about/mobile/bg-pattern-hero-about-mobile.svg'

export const useStyles = makeStyles(theme => ({
    hero: {
        backgroundColor: '#E7816B',
    },
    image: {
        height: 250
    },
    heroImageContainer: {
        backgroundImage: `url(${heroImage})`,
        objectFit: 'cover'
    },
    heroContent: {
        backgroundImage: `url(${heroBgPattern})`,
        backgroundPosition: 'right 2px top -140px',
        paddingBottom: '4rem',
        paddingTop: '4rem'
    }
}));