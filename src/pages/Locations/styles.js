import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    cardsContainer: {
        display: 'grid',
        gridTemplateColumns: '100%',
        gridTemplateRows: 'auto auto auto auto auto auto',
        [theme.breakpoints.up('sm')]: {

        }
    }
}));