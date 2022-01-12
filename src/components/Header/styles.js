import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    header: {
        padding: '.8rem 3%'
    },
    logoContainer: {
        height: 25
    },
    headerList: {
        listStyleType: 'none',
        padding: '1.8rem 0',
        '& li:hover': {
            backgroundColor: '#ebebeb45',
            cursor: 'pointer'
        },
        '& a': {
            color: '#FFF'
        }
    },
    headerListItem: {
        padding: '.7rem 24px'
    },
    drawerRoot: {
        top: '64px !important',
        '& .MuiBackdrop-root': {
            top: '64px !important'
        }
    },
    drawerPaper: {
        backgroundColor: '#000 !important',
        top: '64px !important'
    },
}));