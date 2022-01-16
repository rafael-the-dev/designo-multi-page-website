import { Hidden, Typography } from '@mui/material'
import classNames from 'classnames'; /**/
import { useDisplay, useTypography } from '../../../styles';
import { useCallback } from 'react';

const Card = ({ mobileImage, desktopImage, address1, address2, title1, title2 }) => {
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
            <div className={classNames(display.alignCenter, display.flex, display.flexColumn)}>
                <div>
                    <Typography component="h2" className={classNames(text.font7)}>
                        { title1 }
                    </Typography>
                    <Typography className={classNames(text.rem9)}>
                        { address1 }
                    </Typography>
                </div>
                <div>
                    <Typography component="h2" className={classNames(text.font7)}>
                        { title2 }
                    </Typography>
                    <Typography className={classNames(text.rem9)}>
                        { address2 }
                    </Typography>
                </div>
            </div>
        </>
    )
};

export default Card;