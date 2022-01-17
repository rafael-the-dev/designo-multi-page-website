import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    australiaAvatar: {
        "&::before": {
            transform: 'rotate(25deg)'
        }
    },
    canadaAvatar: {
        "&::before": {
            transform: 'rotate(71deg)'
        }
    },
    ukAvatar: {
        "&::before": {
            transform: 'rotate(264deg)'
        }
    },
}));