import { makeStyles } from "@mui/styles";
import bgPattern from '../../assets/images/contact/bg-pattern-hero-contact-mobile.svg'
import bgPatternDesktop from '../../assets/images/contact/bg-pattern-hero-desktop.svg'

export const useStyles = makeStyles(theme => ({
    hero: {
        backgroundColor: '#E7816B',
        backgroundImage: `url(${bgPattern})`,
        backgroundSize: 775,
        backgroundPosition: 'left -58px top',
        borderRadius: 15,
        height: 400,
        paddingLeft: '3%',
        paddingRight: '3%',
        [theme.breakpoints.up('md')]: {
            backgroundImage: `url(${bgPatternDesktop})`,
        }
    },
    australiaAvatar: {
        "&::before": {
            transform: 'rotate(25deg)'
        }
    },
    canadaAvatar: {
        "&::before": {
            transform: 'rotate(71deg)'
        }
    },
    ukAvatar: {
        "&::before": {
            transform: 'rotate(264deg)'
        }
    },
}));