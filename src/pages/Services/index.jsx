import { Button, Typography } from "@mui/material";
import classNames from "classnames";
import { useBackground, useDisplay, useResponsive, useTypography } from '../../styles';
import { useStyles } from './styles'
import Card from './Card'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import data from '../../services-data.json';
import { useEffect, useRef, useState } from 'react';  
import { useParams } from 'react-router-dom';

import expressImage from '../../assets/images/services/web-design/image-express.jpg'
import transferImage from '../../assets/images/services/web-design/image-transfer.jpg'
import photonImage from '../../assets/images/services/web-design/image-photon.jpg'
import blogrImage from '../../assets/images/services/web-design/image-blogr.jpg'
import builderImage from '../../assets/images/services/web-design/image-builder.jpg'
import campImage from '../../assets/images/services/web-design/image-camp.jpg'

import airfilterImage from '../../assets/images/services/app-design/image-airfilter.jpg'
import eyecamImage from '../../assets/images/services/app-design/image-eyecam.jpg'
import faceitImage from '../../assets/images/services/app-design/image-faceit.jpg'
import loopstudiosImage from '../../assets/images/services/app-design/image-loopstudios.jpg'
import todoImage from '../../assets/images/services/app-design/image-todo.jpg'

import boxedWaterImage from '../../assets/images/services/graphic-design/image-boxed-water.jpg'
import changeImage from '../../assets/images/services/graphic-design/image-change.jpg'
import scienceImage from '../../assets/images/services/graphic-design/image-science.jpg'

const Services = () => {
    const bg = useBackground();
    const display = useDisplay();
    const classes = useStyles();
    const responsive = useResponsive();
    const text = useTypography();

    const { id } = useParams()
    const [ service, setService ] = useState({});

    useEffect(() => {
        const result = data[id];
        if(result) {
            setService(result);
        }
    }, [ id ]);

    const othersServicesImages = useRef({
        'app-design': classes.appDesign,
        'graphic-design': classes.graphicDesign,
        'web-design': classes.webDesign,
    });

    const cardsImages = useRef({
        "airfilter-card": airfilterImage,
        "blogr-card": blogrImage,
        "boxed-water-card": boxedWaterImage,
        "builder-card": builderImage,
        "camp-card": campImage,
        "change-card": changeImage,
        "eyecam-card": eyecamImage,
        "express-card": expressImage,
        "faceit-card": faceitImage,
        "loopstudios-card": loopstudiosImage,
        "photon-card": photonImage,
        "science-card": scienceImage,
        "todo-card": todoImage,
        "transfer-card": transferImage
    })

    return (
        <>
            <section className={classNames(display.px,)}>
                <div className={classNames(display.w100, display.flex, display.flexColumn, display.alignCenter, 
                    bg.noRepeat, classes.hero, display.justifyCenter, bg.cover)}>
                    <Typography component="h1" variant="h5" className={classNames(text.textLight, text.alignCenter,
                        text.font7, classes.heroTitle )}>
                        { service.title }
                    </Typography>
                    <Typography className={classNames(text.textLight, text.alignCenter, text.rem9, display.mt1,
                        classes.heroDescription)}>
                            { service.description }
                    </Typography>
                </div>
            </section>
            <div className={classNames(display.px, classes.cardsContainer, responsive.mdMt2)}>
                {
                    service.cards ? (
                        service.cards.map(item => (
                            <Card 
                                description={ item.description }
                                image={ cardsImages.current[item.key]}
                                title={ item.title }
                            />
                        ))
                    ) : <></>
                }
            </div>
            <div className={classNames(classes.projectsGrid, display.px, display.mt3, display.pt1, responsive.mdPt2, responsive.mdMb2)}>
                {
                    service['others services'] ? (
                        service['others services'].map((item, index) => (
                            <div key={index} className={classNames(display.alignCenter, display.flex, display.flexColumn, 
                                display.justifyCenter, classes.project, bg.noReapeat, bg.center, bg.cover, 
                                othersServicesImages.current[item.key])}>
                                <Typography component="h2" variant="h6" className={classNames(text.font7, text.textLight)}>
                                   { item.title }
                                </Typography>
                                <Link to={`/services/${item.link}`} className={classNames(display.mt1, display, text.noUnderline)}>
                                    <Button className={classNames(text.textLight)} endIcon={<ArrowForwardIosIcon className={classNames(classes.rightArrow)} />}>
                                        View projects
                                    </Button>
                                </Link>
                            </div>
                        ))
                    ) : <></>
                }
            </div>
        </>
    );
};

export default Services;

/**
 * 
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
 */