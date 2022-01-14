import { Typography } from "@mui/material";
import classNames from "classnames";
import { useBackground, useDisplay, useResponsive, useTypography } from '../../styles';
import { useStyles } from './styles'


const Services = () => {
    const bg = useBackground();
    const display = useDisplay();
    const classes = useStyles();
    const responsive = useResponsive();
    const text = useTypography();

    return (
        <>
            <section className={classNames(display.px,)}>
                <div className={classNames(display.w100, display.flex, display.flexColumn, display.alignCenter, 
                    bg.noRepeat, classes.hero, display.justifyCenter, bg.cover)}>
                    <Typography component="h1" variant="h5" className={classNames(text.textLight, text.alignCenter )}>
                        Web Design
                    </Typography>
                    <Typography className={classNames(text.textLight, text.alignCenter, text.rem9, display.mt1,
                        classes.heroDescription)}>
                        We build websites that serve as powerful marketing tools and bring memorable brand experiences.
                    </Typography>
                </div>
            </section>
        </>
    );
};

export default Services;