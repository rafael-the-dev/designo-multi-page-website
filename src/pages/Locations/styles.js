import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    cardsContainer: {
        display: 'grid',
        gridTemplateColumns: '100%',
        gridTemplateRows: 'auto auto auto auto auto auto',
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '5%',
            paddingRight: '5%'
        },
        [theme.breakpoints.up('md')]: {
            gridGap: '30px 1.3333%',
            gridTemplateColumns: '32% 32% 32%',
            gridTemplateRows: 'auto auto auto',
            paddingLeft: '10%',
            paddingRight: '10%',
        }
    },
    canadaContent: {
        [theme.breakpoints.up('md')]: {
            gridColumn: '1 / span 2',
            gridRow: '1 / span 1'
        }
    },
    canadaImageContainer: {
        [theme.breakpoints.up('md')]: {
            gridColumn: '3 / span 1',
            gridRow: '1 / span 1'
        }
    },
    australiaContent: {
        [theme.breakpoints.up('md')]: {
            gridColumn: '2 / span 2',
            gridRow: '2 / span 1'
        }
    },
    australiaImageContainer: {
        [theme.breakpoints.up('md')]: {
            gridColumn: '1 / span 1',
            gridRow: '2 / span 1'
        }
    },
    ukContent: {
        [theme.breakpoints.up('md')]: {
            gridColumn: '1 / span 2',
            gridRow: '3 / span 1'
        }
    },
    ukImageContainer: {
        [theme.breakpoints.up('md')]: {
            gridColumn: '3 / span 1',
            gridRow: '3 / span 1'
        }
    }
}));