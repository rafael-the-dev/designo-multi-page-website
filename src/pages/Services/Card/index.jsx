import { Typography } from '@mui/material'
import classNames from 'classnames';
import { useStyles } from './styles'
import { useDisplay, useResponsive, useTypography } from '../../../styles';

const Card = ({ description, image, title }) => {
    const display = useDisplay();
    const classes = useStyles();
    const responsive = useResponsive();
    const text = useTypography();

    return (
        <article className={classNames(display.flex, display.flexColumn, classes.card, responsive.smRow, 
            display.alignStretch, responsive.mdColumn)}>
            <div className={classNames(classes.cardImageContainer)}> 
                <img 
                    src={image}
                    alt={title}
                    className={classNames(display.block, display.h100, display.w100, classes.cardImage)}
                />
            </div>
            <div className={classNames(display.flex, display.flexColumn, display.alignCenter, classes.cardContent,
                display.pt2, display.pb2, responsive.smJustifyCenter)}>
                <Typography component="h2" variant="h5" className={classNames(text.alignCenter, text.uppercase,
                    classes.cardTitle)}>
                    { title }
                </Typography>
                <Typography className={classNames(text.alignCenter, display.mt1, text.rem9)}>
                    { description }
                </Typography>
            </div>
        </article>
    );
};

export default Card;