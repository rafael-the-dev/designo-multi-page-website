import { Button, Grid, Typography } from '@mui/material'
import classNames from 'classnames'; /**/
import { useStyles } from './styles'
import { useBackground, useDisplay, useResponsive, useTypography } from '../../styles';

const Contact = () => {
    const bg = useBackground();
    const display = useDisplay();
    const classes = useStyles();
    const responsive = useResponsive();
    const text = useTypography();

    return (
        <>
            <Grid container className={classNames(display.px)}>
                
            </Grid>
        </>
    );
};

export default Contact;