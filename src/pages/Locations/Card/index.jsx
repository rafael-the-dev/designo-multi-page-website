import { Hidden, Typography } from '@mui/material'
import classNames from 'classnames'; /**/
import { useDisplay, useTypography } from '../../../styles';
import { useCallback } from 'react';
import { useStyles } from './styles';

const Card = ({ mobileImage, desktopImage, address1, address2, title1, title2 }) => {
    const classes = useStyles();
    const display = useDisplay();
    const text = useTypography();

    const imageMemo = useCallback((image) => (
        <img 
            src={image}
            alt="" 
            className={classNames(display.block, display.h100, display.w100)} 
        />
    ), [ display ])

    return (
        <>
            <div className={classNames()}>
                <Hidden mdUp>{ imageMemo(mobileImage) }</Hidden>
                <Hidden mdDown>{ imageMemo(desktopImage) }</Hidden>
            </div>
            <div className={classNames(display.alignCenter, display.flex, display.flexColumn, classes.cardContent,
                display.pb2, display.pt2)}>
                <div>
                    <Typography component="h2" className={classNames(text.font7, text.alignCenter)}>
                        { title1 }
                    </Typography>
                    <Typography className={classNames(text.rem9, text.alignCenter)}>
                        { address1 }
                    </Typography>
                </div>
                <div className={classNames(display.mt1)}>
                    <Typography component="h2" className={classNames(text.font7, text.alignCenter)}>
                        { title2 }
                    </Typography>
                    <Typography className={classNames(text.rem9, text.alignCenter)}>
                        { address2 }
                    </Typography>
                </div>
            </div>
        </>
    )
};

export default Card;