import { Avatar, Button, Grid, Typography } from '@mui/material';
import classNames from 'classnames'; /**/
import { useStyles } from './styles'
import { useDisplay, useResponsive, useTypography } from '../../styles';
import { Link } from 'react-router-dom';

const Card = ({ image, title, link, imageClassName }) => {
    const classes = useStyles();
    const display = useDisplay();
    const responsive = useResponsive();
    const text = useTypography();

    return (
        <Grid item xs={12} md={4} component="article">
            <div className={classNames(display.flex, display.flexColumn, 
                display.alignCenter, display.w100, display.mb3, responsive.mdMb0)}>
                <Avatar 
                    src={image}
                    alt={title}
                    className={classNames(classes.cardImage, imageClassName)}
                />
                <Typography component="h2" variant="h5" className={classNames(text.font7, display.mt1)}>
                    { title }
                </Typography>
                <Link to={`/locations#${link}`} className={classNames(display.mt1, text.noUnderline)}>
                    <Button 
                        className={classNames(classes.cardButton, text.textLight)}
                        variant="containded">
                        See location
                    </Button>
                </Link>
            </div>
        </Grid>
    );
};

export default Card;