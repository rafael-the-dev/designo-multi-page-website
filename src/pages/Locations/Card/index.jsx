import { Hidden, Typography } from '@mui/material'
import classNames from 'classnames'; /**/
import { useBackground, useDisplay, useTypography } from '../../../styles';
import { useCallback } from 'react';
import { useStyles } from './styles';

const Card = ({ countryName, mobileImage, desktopImage, address1, address2, title1, title2 }) => {
    const bg = useBackground();
    const classes = useStyles();
    const display = useDisplay();
    const text = useTypography();

    const imageMemo = useCallback((image) => (
        <img 
            src={image}
            alt="" 
            className={classNames(classes.cardImage, display.block, display.h100, display.w100)} 
        />
    ), [ classes, display ])

    return (
        <>
            <div className={classNames(classes.cardImageContainer)}>
                <Hidden mdUp>{ imageMemo(mobileImage) }</Hidden>
                <Hidden mdDown>{ imageMemo(desktopImage) }</Hidden>
            </div>
            <div className={classNames(display.alignCenter, display.flex, display.flexColumn, classes.cardContent,
                display.pb3, display.pt3, bg.noRepeat)}>
                <Typography component="h2" variant="h5" className={classNames(text.font7, text.alignCenter,
                    classes.cardTitle)}>
                    { countryName }
                </Typography>
                <div className={classNames(display.alignCenter, display.flex, display.flexColumn, display.mt2)} >
                    <div>
                        <Typography component="h3" className={classNames(text.font7, text.alignCenter)}>
                            { title1 }
                        </Typography>
                        <Typography className={classNames(text.rem9, text.alignCenter)}>
                            { address1 }
                        </Typography>
                    </div>
                    <div className={classNames(display.mt1)}>
                        <Typography component="h3" className={classNames(text.font7, text.alignCenter)}>
                            { title2 }
                        </Typography>
                        <Typography className={classNames(text.rem9, text.alignCenter)}>
                            { address2 }
                        </Typography>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Card;