//import { Button, Grid, Typography } from '@mui/material'
import classNames from 'classnames'; /**/
import { useStyles } from './styles'
//import { useDisplay } from '../../styles';
import Card from './Card';

import canadaMobileImage from '../../assets/images/locations/tablet/image-map-canada.png'
import canadaDesktopImage from '../../assets/images/locations/desktop/image-map-canada.png'

import australiaMobileImage from '../../assets/images/locations/tablet/image-map-australia.png'
import australiaDesktopImage from '../../assets/images/locations/desktop/image-map-australia.png'

import unitedKingdomMobileImage from '../../assets/images/locations/tablet/image-map-uk.png'
import unitedKingdomDesktopImage from '../../assets/images/locations/desktop/image-map-united-kingdom.png'

const Locations = () => {
    const classes = useStyles();
    //const display = useDisplay();

    return (
        <div className={classNames(classes.cardsContainer)}>
            <Card
                address1={<>3886 Wellington Street<br/>Toronto, Ontario M9C 3J5</>}
                address2={<>P : +1 253-863-8967<br/>M : contact@designo.co</>}
                countryName="Canada"
                contentClassName={classes.canadaContent}
                imageClassName={classes.canadaImageContainer}
                linkRef="canada"
                mobileImage={canadaMobileImage}
                desktopImage={canadaDesktopImage}
                title1="Designo Central Office"
                title2="Contact"
             />
             <Card
                address1={<>19 Balonne Street<br/>New South Wales 2443</>}
                address2={<>P : (02) 6720 9092<br/>M : contact@designo.au</>}
                countryName="Australia"
                contentClassName={classes.australiaContent}
                imageClassName={classes.australiaImageContainer}
                linkRef="australia"
                mobileImage={australiaMobileImage}
                desktopImage={australiaDesktopImage}
                title1="Designo AU Office"
                title2="Contact"
             />
             <Card
                address1={<>13  Colorado Way<br/>Rhyd-y-fro SA8 9GA</>}
                address2={<>P : 078 3115 1400<br/>M : contact@designo.uk</>}
                countryName="United Kingdom"
                contentClassName={classes.ukContent}
                imageClassName={classes.ukImageContainer}
                linkRef="united-kingdom"
                mobileImage={unitedKingdomMobileImage}
                desktopImage={unitedKingdomDesktopImage}
                title1="Designo UK Office"
                title2="Contact"
             />
        </div>
    );
};

export default Locations;