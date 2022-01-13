import { useStyles } from './styles'
import { useBackground, useDisplay, useResponsive, useTypography } from '../../styles';
import classNames from 'classnames';
import { Button, Typography } from '@mui/material'

const Banner = () => {
    const bg = useBackground();
    const classes = useStyles();
    const display = useDisplay();
    const text = useTypography();

    return (
        <section className={classNames(display.alignCenter, display.flex, display.flexColumn, bg.noRepeat, 
            classes.banner, display.pb3, display.pt3)}>
            <div className={classNames(display.alignCenter, display.flex, display.flexColumn)}>
                <Typography className={classNames(text.alignCenter, text.font7, text.textLight, display.opacity8)} component="h2" variant="h5">
                    Let’s talk about<br />your project
                </Typography>
                <Typography className={classNames(display.mt1, text.alignCenter, text.rem9, text.textLight, 
                    display.opacity8, classes.bannerDescription)}>
                    Ready to take it to the next level? Contact us today and find out how our expertise can help 
                    your business grow.
                </Typography>
            </div>
            <Button 
                variant="contained" 
                className={classNames(classes.button, display.mt2, classes.bannerButton, text.font7, text.textDark)}>
                Get in touch
            </Button>
        </section>
    )
};

export default Banner;