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
       // height: 400,
        padding: '4rem 5%',
        [theme.breakpoints.up('md')]: {
            backgroundImage: `url(${bgPatternDesktop})`,
        }
    },
    inputGroup: {
        borderBottom: '1px solid #ffffffa6'
    },
    input: {
        height: 30,
    },
    inputColor: {
        color: '#ffffffcf'
    },
    formButton: {
        backgroundColor: '#FFF !important',
        marginLeft: 'auto !important',
        marginRight: 'auto !important',
        padding: '8px 43px !important'
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