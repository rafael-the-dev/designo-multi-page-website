import { Button, Grid, Typography } from '@mui/material'
import classNames from 'classnames'; /**/
import { useStyles } from './styles'
import { useBackground, useDisplay, useResponsive, useTypography } from '../../styles';
import Card from './Card'
import australiaIcon from '../../assets/images/contact/illustration-australia.svg'
import canadaIcon from '../../assets/images/contact/illustration-canada.svg'
import ukIcon from '../../assets/images/contact/illustration-united-kingdom.svg'

const Contact = () => {
    const display = useDisplay();
    const classes = useStyles();
    const responsive = useResponsive();
    const text = useTypography();

    return (
        <>
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