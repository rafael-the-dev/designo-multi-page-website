import { makeStyles } from "@mui/styles";
import avatarBg from '../../../assets/images/pattern/bg-pattern-small-circle.svg'

export const useStyles = makeStyles(theme => ({
    cardImage: {
        height: '190px !important',
        width: '190px !important',
        '&::before': {
            backgroundImage: `url(${avatarBg})`,
            content: '""',
            height: '100%',
            position: 'absolute',
            width: '100%'
        }
    },
    cardButton: {
        backgroundColor: '#E7816B !important',
        padding: '8px 16px !important'
    }
}));