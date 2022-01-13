import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: '#1D1C1E',
        padding: '4rem 3% 2rem 3%'
    },
    logoContainer: {
        height: 25
    },
    footerDivider: {
        backgroundColor: '#979797'
    },
    footerNav: {
        marginTop: '1rem',
        [theme.breakpoints.up('sm')]: {
            marginTop: 0,
        }
    },
    headerListItem: {
        fontSize: '.8rem',
        marginBottom: '1.3rem',
        '&:last-child': {
            marginBottom: 0
        },
        [theme.breakpoints.up('sm')]: {
            marginBottom: 0,
            marginRight: '.8rem',
            '&:last-child': {
                marginRight: 0
            },

        }
    },
    footerAddress: {
        lineHeight: '1.4rem'
    },
    footerSocialMediaItem: {
        marginRight: '.8rem',
        '&:last-child': {
            marginRight: 0
        }
    },
    footerSocialMediaIcon: {
        color: '#E7816B !important'
    }
}));