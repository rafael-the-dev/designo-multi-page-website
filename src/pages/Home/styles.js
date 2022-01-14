import { makeStyles } from "@mui/styles";
import webDesignMobile from '../../assets/images/home/mobile/image-web-design.jpg'
import appDesignMobile from '../../assets/images/home/mobile/image-app-design.jpg'
import graphicDesignMobile from '../../assets/images/home/mobile/image-graphic-design.jpg'

export const useStyles = makeStyles(theme => ({
    projectsGrid: {
        display: 'grid',
        gridRowGap: 30,
        gridTemplateColumns: '100%',
        gridTemplateRows: '250px 250px 250px',
    },
    project: {
        borderRadius: 30
    },
    webDesign: {
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .1), rgba(0, 0, 0, .4)), url(${webDesignMobile})`
    },
    appDesign: {
        backgroundImage: `url(${appDesignMobile})`
    },
    graphicDesign: {
        backgroundImage: `url(${graphicDesignMobile})`
    },
    rightArrow: {
        color: '#E7816B !important',
        fontSize: '1rem !important'
    },
    resourcefulAvatar: {
        "&::before": {
            transform: 'rotate(290deg)'
        }
    },
    friendlyAvatar: {
        "&::before": {
            transform: 'rotate(87deg)'
        }
    }
}));