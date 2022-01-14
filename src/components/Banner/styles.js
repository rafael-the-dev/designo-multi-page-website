import { makeStyles } from "@mui/styles";
import bannerImage from '../../assets/images/pattern/bg-pattern-design-pages-intro-mobile.svg'
import bannerImageTablet from '../../assets/images/pattern/bg-pattern-call-to-action.svg'

export const useStyles = makeStyles(theme => ({
    banner: {
        backgroundColor: '#E7816B',
        backgroundImage: `url(${bannerImage})`,
        backgroundPosition: 'right 4% center',
        backgroundSize: 655,
        borderRadius: 20,
        boxSizing: 'border-box',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '4.2rem 4%',
        transform: 'translate(0px, 50%)',
        width: '85%',
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `url(${bannerImageTablet})`,
        },
        [theme.breakpoints.up(900)]: {
            flexDirection: 'row !important',
            justifyContent: 'space-between',
            transform: 'translate(0px, 36%)',
        },
        [theme.breakpoints.up(1200)]: {
            width: '80%'
        }
    },
    bannerContent: {
        [theme.breakpoints.up(900)]: {
            maxWidth: '70%'
        },
        [theme.breakpoints.up(1200)]: {
            maxWidth: 455
        }
    },
    bannerDescription: {
        lineHeight: '1.8rem !important',
    },
    mdAlignLeft: {
        [theme.breakpoints.up(900)]: {
            alignItems: 'flex-start !important'
        }
    },
    mdTextLeft: {
        [theme.breakpoints.up(900)]: {
            textAlign: 'left !important'
        }
    },
    bannerButton: {
        backgroundColor: '#FFF !important',
        padding: '9px 16px !important',
        [theme.breakpoints.up(900)]: {
            marginTop: '0 !important'
        }
    }
}));