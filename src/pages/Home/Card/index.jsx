import { Avatar, Grid, Typography } from '@mui/material';
import { useDisplay, useResponsive, useTypography } from '../../../styles';
import { useStyles } from './styles'
import classNames from 'classnames';

const Card = ({ image, description, title }) => {
    const classes = useStyles();
    const display = useDisplay();
    const responsive = useResponsive();
    const text = useTypography();

    return (
        <Grid item component="article" >
            <div className={classNames(display.flex, display.alignCenter, display.flexColumn,
                responsive.smRow, display.w100, display.mb2)}>
                <Avatar 
                    src={image}
                    className={classNames(classes.avatar)}
                    alt="illustration"
                />
                <Typography 
                    component="h2" 
                    className={classNames(display.mt1, text.uppercase, text.font7, classes.cardTitle)}>
                    { title }
                </Typography>
                <Typography className={classNames(text.rem85, classes.cardDescription, display.mt1, text.alignCenter)}>
                    { description }
                </Typography>
            </div>
        </Grid>
    );
};

export default Card;