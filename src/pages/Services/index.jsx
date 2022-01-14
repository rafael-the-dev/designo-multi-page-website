import { Button, Typography } from "@mui/material";
import classNames from "classnames";
import { useBackground, useDisplay, useResponsive, useTypography } from '../../styles';
import { useStyles } from './styles'
import Card from './Card'
import expressImage from '../../assets/images/services/image-express.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom'

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
                    <Typography component="h1" variant="h5" className={classNames(text.textLight, text.alignCenter,
                        text.font7, classes.heroTitle )}>
                        Web Design
                    </Typography>
                    <Typography className={classNames(text.textLight, text.alignCenter, text.rem9, display.mt1,
                        classes.heroDescription)}>
                        We build websites that serve as powerful marketing tools and bring memorable brand experiences.
                    </Typography>
                </div>
            </section>
            <div className={classNames(display.px, classes.cardsContainer, responsive.mdMt2)}>
                <Card 
                    description="A multi-carrier shipping website for ecommerce businesses"
                    image={expressImage}
                    title="Express"
                />
                <Card 
                    description="A multi-carrier shipping website for ecommerce businesses"
                    image={expressImage}
                    title="Express"
                />
                <Card 
                    description="A multi-carrier shipping website for ecommerce businesses"
                    image={expressImage}
                    title="Express"
                />
                <Card 
                    description="A multi-carrier shipping website for ecommerce businesses"
                    image={expressImage}
                    title="Express"
                />
                <Card 
                    description="A multi-carrier shipping website for ecommerce businesses"
                    image={expressImage}
                    title="Express"
                />
                <Card 
                    description="A multi-carrier shipping website for ecommerce businesses"
                    image={expressImage}
                    title="Express"
                />
            </div>
            <div className={classNames(classes.projectsGrid, display.px, display.mt3, display.pt1, responsive.mdPt2, responsive.mdMb2)}>
                <div className={classNames(display.alignCenter, display.flex, display.flexColumn, display.justifyCenter, classes.project, bg.noReapeat, bg.center, bg.cover, classes.webDesign)}>
                    <Typography component="h2" variant="h6" className={classNames(text.font7, text.textLight)}>
                        Web Design
                    </Typography>
                    <Link to="/" className={classNames(display.mt1, display, text.noUnderline)}>
                        <Button className={classNames(text.textLight)} endIcon={<ArrowForwardIosIcon className={classNames(classes.rightArrow)} />}>
                            View projects
                        </Button>
                    </Link>
                </div>
                <div className={classNames(display.alignCenter, display.flex, display.flexColumn, display.justifyCenter, classes.project, bg.noReapeat, bg.center, bg.cover, classes.appDesign)}>
                    <Typography component="h2" variant="h6" className={classNames(text.font7, text.textLight)}>
                        App Design
                    </Typography>
                    <Link to="/" className={classNames(display.mt1, display, text.noUnderline)}>
                        <Button className={classNames(text.textLight)} endIcon={<ArrowForwardIosIcon className={classNames(classes.rightArrow)} />}>
                            View projects
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Services;