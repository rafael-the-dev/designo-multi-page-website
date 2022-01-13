import { Grid } from '@mui/material'
import Card from './Card';
import passionaleIllustration from '../../assets/images/home/illustration-passionate.svg'
import resourcefulIllustration from '../../assets/images/home/illustration-resourceful.svg'
import friendlyIllustration from '../../assets/images/home/illustration-friendly.svg'
import classNames from 'classnames'; /*useResponsive, useTypography*/
import { useStyles } from './styles'
import { useDisplay, } from '../../styles';

const Home = () => {
    const display = useDisplay();
    const classes = useStyles();

    return (
        <Grid container className={classNames(display.px)}>
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
    )
};

export default Home;