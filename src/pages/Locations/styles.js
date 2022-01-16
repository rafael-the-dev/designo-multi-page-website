import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    cardsContainer: {
        display: 'grid',
        gridRowGap: 30,
        gridTemplateColumns: '100%',
        gridTemplateRows: 'auto auto auto auto auto auto'
    }
}));