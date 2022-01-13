import { Avatar, Grid, Typography } from '@mui/material';
import { useBackground, useDisplay, useResponsive, useTypography } from '../../../styles';
import { useStyles } from './styles'
import classNames from 'classnames';

const Card = ({ image, description, title, avatarClassName }) => {
    const bg = useBackground();
    const classes = useStyles();
    const display = useDisplay();
    const responsive = useResponsive();
    const text = useTypography();

    return (
        <Grid item component="article" xs={12} md={4}>
            <div className={classNames(display.flex, display.alignCenter, display.flexColumn,
                responsive.smRow, display.w100, display.mb2, responsive.mdColumn)}>
                <Avatar 
                    src={image}
                    className={classNames(classes.avatar, bg.noRepeat, avatarClassName)}
                    alt="illustration"
                />
                <div className={classNames(display.flex, display.alignCenter, display.flexColumn,
                    responsive.smAlignStart, display.mt1, responsive.smMt0, responsive.smMl2, responsive.ml0,
                    responsive.mt1)}>
                    <Typography 
                        component="h2" 
                        className={classNames(text.uppercase, text.font7, classes.cardTitle, classes.darkText,
                        display.w100, text.smAlignStart, text.alignCenter, text.mdAlignCenter )}>
                        { title }
                    </Typography>
                    <Typography className={classNames(text.rem85, classes.cardDescription, display.mt1, 
                        text.alignCenter, text.smAlignStart, classes.darkText, text.mdAlignCenter)}>
                        { description }
                    </Typography>
                </div>
            </div>
        </Grid>
    );
};

export default Card;