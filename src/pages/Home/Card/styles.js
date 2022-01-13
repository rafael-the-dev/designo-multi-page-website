import { makeStyles } from "@mui/styles";
import avatarBg from '../../../assets/images/pattern/bg-pattern-small-circle.svg'

export const useStyles = makeStyles(theme => ({
    avatar: {
        height: '180px !important',
        width: '180px !important',
        '&::before': {
            backgroundImage: `url(${avatarBg})`,
            content: '""',
            height: '100%',
            position: 'absolute',
            width: '100%'
        }
    },
    darkText: {
        color: '#333136'
    },
    cardTitle: {

    },
    cardDescription: {
    }
}));