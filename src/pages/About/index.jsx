import { Typography } from '@mui/material'
import { useBackground, useDisplay, useResponsive, useTypography } from '../../styles';
import classNames from 'classnames'; /**/
import { useStyles } from './styles'

const About = () => {
    const bg = useBackground();
    const display = useDisplay();
    const classes = useStyles();
    const responsive = useResponsive();
    const text = useTypography();

    return (
        <div className={classNames(classes.container)}>
            <section className={classNames(display.alignStretch, display.flex, display.flexColumn, display.w100, classes.hero)}>
                <div className={classNames(bg.cover, bg.noRepeat, bg.center, classes.image, classes.heroImageContainer)}></div>
                <div className={classNames(classes.heroContent, bg.noRepeat)}>
                    <Typography component="h1" variant="h5" className={classNames(text.textLight, text.alignCenter)}>
                        About us
                    </Typography>
                    <Typography className={classNames(text.rem9, text.textLight, display.opacity9, text.alignCenter,
                        display.mt1, classes.description)}>
                        Founded in 2010, we are a creative agency that produces lasting results for 
                        our clients. We’ve partnered with many startups, corporations, and nonprofits 
                        alike to craft designs that make real impact. We’re always looking 
                        forward to creating brands, products, and digital experiences that 
                        connect with our clients’ audiences.
                    </Typography>
                </div>
            </section>
        </div>
    );
};

export default About;