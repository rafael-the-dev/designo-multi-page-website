import { Grid, Typography } from '@mui/material'
import { useBackground, useDisplay, useResponsive, useTypography } from '../../styles';
import classNames from 'classnames'; /**/
import { useStyles } from './styles'
import australiaIcon from '../../assets/images/contact/illustration-australia.svg';
import canadaIcon from '../../assets/images/contact/illustration-canada.svg';
import ukIcon from '../../assets/images/contact/illustration-united-kingdom.svg';
import Card from '../../components/Card';

const About = () => {
    const bg = useBackground();
    const display = useDisplay();
    const classes = useStyles();
    const responsive = useResponsive();
    const text = useTypography();

    return (
        <div className={classNames(classes.container)}>
            <section className={classNames(display.alignStretch, display.flex, display.flexColumn, display.w100, 
                classes.hero, responsive.mdRowReverse, responsive.mdJustifyBetween)}>
                <div className={classNames(bg.cover, bg.noRepeat, bg.center, classes.image, classes.heroImageContainer)}></div>
                <div className={classNames(classes.heroContent, bg.noRepeat)}>
                    <Typography component="h1" variant="h5" className={classNames(text.textLight, text.alignCenter, 
                        text.mdAlignLeft)}>
                        About us
                    </Typography>
                    <Typography className={classNames(text.rem9, text.textLight, display.opacity9, text.alignCenter,
                        display.mt1, classes.description, text.mdAlignLeft)}>
                        Founded in 2010, we are a creative agency that produces lasting results for 
                        our clients. We’ve partnered with many startups, corporations, and nonprofits 
                        alike to craft designs that make real impact. We’re always looking 
                        forward to creating brands, products, and digital experiences that 
                        connect with our clients’ audiences.
                    </Typography>
                </div>
            </section>
            <section className={classNames(display.alignStretch, display.flex, display.flexColumn, display.w100, 
                classes.details, responsive.mdRow, responsive.mdJustifyBetween, responsive.smMt3)}>
                <div className={classNames(bg.cover, bg.noRepeat, bg.center, classes.image, classes.detailsImageContainer)}></div>
                <div className={classNames(classes.detailsContent, bg.noRepeat)}>
                    <Typography component="h2" variant="h5" className={classNames(text.alignCenter, text.mdAlignLeft,
                        classes.detailsTitle, text.font7)}>
                        World-class talent
                    </Typography>
                    <Typography className={classNames(text.rem9, display.opacity9, text.alignCenter,
                        display.mt1, classes.description, text.mdAlignLeft)}>
                        We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.   
                    </Typography>
                    <Typography className={classNames(text.rem9, display.opacity9, text.alignCenter,
                        display.mt1, classes.description, text.mdAlignLeft)}>
                        Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.
                    </Typography>
                </div>
            </section>
            <Grid container className={classNames(classes.cardsContainer, responsive.mdMb2)}>
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
            <section className={classNames(display.alignStretch, display.flex, display.flexColumn, display.w100, 
                classes.details, classes.realDeal, responsive.mdRow, responsive.mdJustifyBetween, responsive.mdRowReverse)}>
                <div className={classNames(bg.cover, bg.noRepeat, bg.center, classes.image, classes.realDealImageContainer)}></div>
                <div className={classNames(classes.detailsContent, bg.noRepeat)}>
                    <Typography component="h2" variant="h5" className={classNames(text.alignCenter, text.mdAlignLeft,
                        classes.detailsTitle, text.font7)}>
                        The real deal
                    </Typography>
                    <Typography className={classNames(text.rem9, display.opacity9, text.alignCenter,
                        display.mt1, classes.description, text.mdAlignLeft)}>
                        As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.
                    </Typography>
                    <Typography className={classNames(text.rem9, display.opacity9, text.alignCenter,
                        display.mt1, classes.description, text.mdAlignLeft)}>
                        We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.
                    </Typography>
                </div>
            </section>
        </div>
    );
};

export default About;