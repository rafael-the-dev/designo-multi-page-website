import { Button, Grid, Typography } from '@mui/material'
import Card from './Card';
import passionaleIllustration from '../../assets/images/home/illustration-passionate.svg'
import resourcefulIllustration from '../../assets/images/home/illustration-resourceful.svg'
import friendlyIllustration from '../../assets/images/home/illustration-friendly.svg'
import classNames from 'classnames'; /**/
import { useStyles } from './styles'
import { useBackground, useDisplay, useResponsive, useTypography } from '../../styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom'

const Home = () => {
    const bg = useBackground();
    const display = useDisplay();
    const classes = useStyles();
    const responsive = useResponsive();
    const text = useTypography();

    return (
        <>
            <section className={classNames(display.px, display.mb3)}>
                <div className={classNames(display.flex, display.alignCenter, display.flexColumn, bg.noRepeat,
                     classes.hero, display.pt2, responsive.smPt3, responsive.mdAlignStart, responsive.mdJustifyCenter,
                     responsive.mdPt0)} >
                    <Typography 
                        gutterBottom 
                        component="h2" 
                        variant="h5" 
                        className={classNames(text.alignCenter, text.textLight, display.opacity9, text.mdAlignLeft)}>
                        Award-winning custom<br />designs and digital<br />branding solutions
                    </Typography>
                    <Typography className={classNames(text.alignCenter, text.textLight, display.opacity8, 
                        text.rem9, display.mt1, text.mdAlignLeft, classes.heroDescription)}>
                        With over 10 years in the industry, we are experienced in creating fully responsive 
                        websites, apps, and engaging brand experiences. Find out more about our services.
                    </Typography>
                    <Link to="/" className={classNames(text.noUnderline, display.mt1)}>
                        <Button variant="contained" className={classNames(text.textDark, classes.heroButton)}>Learn more</Button>
                    </Link>
                </div>
            </section>
            <div className={classNames(classes.projectsGrid, display.px)}>
                <div className={classNames(display.alignCenter, display.flex, display.flexColumn, display.justifyCenter, classes.project, bg.noReapeat, bg.center, bg.cover, classes.webDesign)}>
                    <Typography component="h2" variant="h6" className={classNames(text.font7, text.textLight)}>
                        Web Design
                    </Typography>
                    <Link to="/services/web-design" className={classNames(display.mt1, display, text.noUnderline)}>
                        <Button className={classNames(text.textLight)} endIcon={<ArrowForwardIosIcon className={classNames(classes.rightArrow)} />}>
                            View projects
                        </Button>
                    </Link>
                </div>
                <div className={classNames(display.alignCenter, display.flex, display.flexColumn, display.justifyCenter, classes.project, bg.noReapeat, bg.center, bg.cover, classes.appDesign)}>
                    <Typography component="h2" variant="h6" className={classNames(text.font7, text.textLight)}>
                        App Design
                    </Typography>
                    <Link to="/services/app-design" className={classNames(display.mt1, display, text.noUnderline)}>
                        <Button className={classNames(text.textLight)} endIcon={<ArrowForwardIosIcon className={classNames(classes.rightArrow)} />}>
                            View projects
                        </Button>
                    </Link>
                </div>
                <div className={classNames(display.alignCenter, display.flex, display.flexColumn, display.justifyCenter, classes.project, bg.noReapeat, bg.center, bg.cover, classes.graphicDesign)}>
                    <Typography component="h2" variant="h6" className={classNames(text.font7, text.textLight)}>
                        Graphic Design
                    </Typography>
                    <Link to="/services/graphic-design" className={classNames(display.mt1, display, text.noUnderline)}>
                        <Button className={classNames(text.textLight)} endIcon={<ArrowForwardIosIcon className={classNames(classes.rightArrow)} />}>
                            View projects
                        </Button>
                    </Link>
                </div>
            </div>
            <Grid container className={classNames(display.px, classes.cardsSection)}>
                <Card 
                    description="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
                    image={passionaleIllustration}
                    title="Passionate"
                />
                <Card 
                    avatarClassName={classNames(classes.resourcefulAvatar)}
                    description="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
                    image={resourcefulIllustration}
                    title="Resouceful"
                />
                <Card 
                    avatarClassName={classNames(classes.friendlyAvatar)}
                    description=" We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
                    image={friendlyIllustration}
                    title="Friendly"
                />
            </Grid>
        </>
    )
};

export default Home;