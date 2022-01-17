import { Button, Grid, Typography } from '@mui/material'
import classNames from 'classnames'; /**/
import { useStyles } from './styles'
import { useBackground, useDisplay, useResponsive, useTypography } from '../../styles';
import Card from './Card'
import australiaIcon from '../../assets/images/contact/illustration-australia.svg'
import canadaIcon from '../../assets/images/contact/illustration-canada.svg'
import ukIcon from '../../assets/images/contact/illustration-united-kingdom.svg'
import ErrorIcon from '@mui/icons-material/Error';
import { useForm } from "react-hook-form";

const Contact = () => {
    const bg = useBackground();
    const display = useDisplay();
    const classes = useStyles();
    const responsive = useResponsive();
    const text = useTypography();

    const { formState: { errors }, handleSubmit, register } = useForm();

    const onSubmit = data => console.log(data);

    return (
        <>
            <section className={classNames(display.px)}>
                <div className={classNames(classes.hero, bg.noRepeat, responsive.mdAlignCenter)}>
                    <div className={classNames(classes.heroContent)}>
                        <Typography 
                            component="h2" 
                            variant="h5" 
                            className={classNames(text.font7, text.alignCenter, text.textLight, text.smAlignStart)}>
                            Contact Us
                        </Typography>
                        <Typography className={classNames(text.rem9, display.mt1, text.alignCenter, text.textLight,
                            display.opacity9, text.smAlignStart)}>
                            Ready to take it to the next level? Let’s talk about your project or idea 
                            and find out how we can help your business grow. If you are looking for 
                            unique digital experiences that’s relatable to your users, drop us a line.
                        </Typography>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className={classNames(display.mt2, classes.heroForm,
                        responsive.mdMt0)}>
                        <div className={classNames(display.alignCenter, display.flex, display.w100, classes.inputGroup)}>
                            <input
                                className={classNames(display.flexGrow1, display.borderNone, display.outlineNone,
                                bg.transparent, classes.input, classes.inputColor, text.rem9)}
                                placeholder='Name'
                                {...register("name-field", { required: true })}
                            />
                            { errors["name-field"] && <label htmlFor='name-field' className={classNames(text.textLight, display.flex, display.alignCenter, text.rem8)}>
                                Can't be empty <ErrorIcon />
                            </label> }
                        </div>
                        <div className={classNames(display.alignCenter, display.flex, display.w100, classes.inputGroup,
                            display.mt1)}>
                            <input
                                className={classNames(display.flexGrow1, display.borderNone, display.outlineNone,
                                bg.transparent, classes.input, classes.inputColor, text.rem9)}
                                placeholder='Email Address'
                                {...register("email-field", { required: true })}
                            />
                            { errors["email-field"] && <label htmlFor='email-field' className={classNames(text.textLight, display.flex, display.alignCenter, text.rem8)}>
                                Can't be empty <ErrorIcon />
                            </label>}
                        </div>
                        <div className={classNames(display.alignCenter, display.flex, display.w100, classes.inputGroup,
                            display.mt1)}>
                            <input
                                className={classNames(display.flexGrow1, display.borderNone, display.outlineNone,
                                bg.transparent, classes.input, classes.inputColor, text.rem9)}
                                placeholder='Phone'
                                {...register("phone-field", { required: true })}
                            />
                            {errors["phone-field"] && <label htmlFor='phone-field' className={classNames(text.textLight, display.flex, display.alignCenter, text.rem8)}>
                                Can't be empty <ErrorIcon />
                            </label> }
                        </div>
                        <div className={classNames(display.alignCenter, display.flex, display.w100, classes.inputGroup,
                            display.mt1)}>
                            <textarea
                                className={classNames(display.flexGrow1, display.borderNone, display.outlineNone,
                                bg.transparent, classes.inputColor, text.rem9 )}
                                placeholder='Message'
                                rows={6}
                                {...register("message-field", { required: true })}
                            ></textarea>
                            {errors["message-field"] && <label htmlFor='message-field' className={classNames(text.textLight, display.flex, display.alignCenter, text.rem8)}>
                                Can't be empty <ErrorIcon />
                            </label> }
                        </div>
                        <Button type='submit' variant="contained" className={classNames(classes.formButton, display.mt2, 
                            text.textDark, display.block)}>
                            Submit
                        </Button>
                    </form>
                </div>
            </section>
            <Grid container className={classNames(display.px, classes.cardsContainer, responsive.mdMt3, responsive.mdMb2)}>
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