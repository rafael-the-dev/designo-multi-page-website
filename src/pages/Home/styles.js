import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    resourcefulAvatar: {
        "&::before": {
            transform: 'rotate(290deg)'
        }
    },
    friendlyAvatar: {
        "&::before": {
            transform: 'rotate(87deg)'
        }
    }
}));