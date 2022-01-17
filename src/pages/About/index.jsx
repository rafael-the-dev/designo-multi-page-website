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
            <section className={classNames(display.alignStretch, display.flex, display.flexColumn, display.w100, 
                classes.hero, responsive.mdRowReverse, responsive.mdJustifyBetween)}>
                <div className={classNames(bg.cover, bg.noRepeat, bg.center, classes.image, classes.heroImageContainer)}></div>
                <div className={classNames(classes.heroContent, bg.noRepeat)}>
                    <Typography component="h1" variant="h5" className={classNames(text.textLight, text.alignCenter, text.smAlignStart)}>
                        About us
                    </Typography>
                    <Typography className={classNames(text.rem9, text.textLight, display.opacity9, text.alignCenter,
                        display.mt1, classes.description, text.smAlignStart)}>
                        Founded in 2010, we are a creative agency that produces lasting results for 
                        our clients. We’ve partnered with many startups, corporations, and nonprofits 
                        alike to craft designs that make real impact. We’re always looking 
                        forward to creating brands, products, and digital experiences that 
                        connect with our clients’ audiences.
                    </Typography>
                </div>
            </section>
            <section className={classNames(display.alignStretch, display.flex, display.flexColumn, display.w100, 
                classes.details, responsive.mdRow, responsive.mdJustifyBetween)}>
                <div className={classNames(bg.cover, bg.noRepeat, bg.center, classes.image, classes.detailsImageContainer)}></div>
                <div className={classNames(classes.detailsContent, bg.noRepeat)}>
                    <Typography component="h2" variant="h5" className={classNames(text.alignCenter, text.smAlignStart,
                        classes.detailsTitle, text.font7)}>
                        World-class talent
                    </Typography>
                    <Typography className={classNames(text.rem9, display.opacity9, text.alignCenter,
                        display.mt1, classes.description, text.smAlignStart)}>
                        We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.   
                    </Typography>
                    <Typography className={classNames(text.rem9, display.opacity9, text.alignCenter,
                        display.mt1, classes.description, text.smAlignStart)}>
                        Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.
                    </Typography>
                </div>
            </section>
        </div>
    );
};

export default About;