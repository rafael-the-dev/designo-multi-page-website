import { makeStyles } from "@mui/styles";
import bannerImage from '../../assets/images/pattern/bg-pattern-design-pages-intro-mobile.svg'

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
        width: '85%'
    },
    bannerDescription: {
        lineHeight: '1.8rem !important'
    },
    bannerButton: {
        backgroundColor: '#FFF !important',
        padding: '9px 16px !important'
    }
}));