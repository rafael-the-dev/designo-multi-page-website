import { Button, Grid, Typography } from '@mui/material'
import classNames from 'classnames'; /**/
import { useStyles } from './styles'
import { useBackground, useDisplay, useResponsive, useTypography } from '../../styles';
import Card from './Card'
import australiaIcon from '../../assets/images/contact/illustration-australia.svg'
import canadaIcon from '../../assets/images/contact/illustration-canada.svg'
import ukIcon from '../../assets/images/contact/illustration-united-kingdom.svg'

const Contact = () => {
    const bg = useBackground();
    const display = useDisplay();
    const classes = useStyles();
    const responsive = useResponsive();
    const text = useTypography();

    return (
        <>
            <section className={classNames(display.px)}>
                <div className={classNames(classes.hero, bg.noRepeat, display.pt3)}>
                    <div>
                        <Typography 
                            component="h2" 
                            variant="h5" 
                            className={classNames(text.font7, text.alignCenter, text.textLight)}>
                            Contact Us
                        </Typography>
                        <Typography className={classNames(text.rem9, display.mt1, text.alignCenter, text.textLight,
                            display.opacity8)}>
                            Ready to take it to the next level? Let’s talk about your project or idea 
                            and find out how we can help your business grow. If you are looking for 
                            unique digital experiences that’s relatable to your users, drop us a line.
                        </Typography>
                    </div>
                    <form></form>
                </div>
            </section>
            <Grid container className={classNames(display.px)}>
                <Card 
                    image={canadaIcon}
                    imageClassName={classes.canadaAvatar}
                    title="Canada"
                />
                <Card 
                    image={australiaIcon}
                    imageClassName={classes.australiaAvatar}
                    title="Australia"
                />
                <Card 
                    image={ukIcon}
                    imageClassName={classes.ukAvatar}
                    title="United Kingdom"
                />
            </Grid>
        </>
    );
};

export default Contact;