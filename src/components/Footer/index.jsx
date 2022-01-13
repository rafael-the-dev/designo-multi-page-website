import classNames from 'classnames';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-light.png';
import { useDisplay, useTypography } from '../../styles';
import { useStyles } from './styles'
import { Divider, Hidden, Typography } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    const classes = useStyles();
    const display = useDisplay();
    const text = useTypography();

    return (
        <footer className={classNames(classes.footer)}>
            <div className={classNames(display.flex, display.flexColumn, display.alignCenter)}>
                <Link to="/" className={classNames(classes.logoContainer)}>
                    <img 
                        src={logo} 
                        alt="logo" 
                        className={classNames(display.block, display.h100, display.w100)} 
                    />
                </Link>
                <Hidden smUp>
                    <Divider className={classNames(classes.footerDivider, display.mt2, display.mb1, display.w100)}/>
                </Hidden>
                <nav className={classNames(classes.footerNav)}>
                    <ul className={classNames(display.flex, display.flexColumn, display.alignCenter)}>
                        <li  className={classNames(classes.headerListItem)}>
                            <Link to="/" className={classNames(text.noUnderline, text.uppercase, text.textLight, display.opacity8)}>
                                Our company
                            </Link>
                        </li>
                        <li  className={classNames(classes.headerListItem)}>
                            <Link to="/" className={classNames(text.noUnderline, text.uppercase, text.textLight, display.opacity8)}>
                                Locations
                            </Link>
                        </li>
                        <li  className={classNames(classes.headerListItem)}>
                            <Link to="/" className={classNames(text.noUnderline, text.uppercase, text.textLight, display.opacity8)}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={classNames(display.flex, display.alignCenter, display.flexColumn, display.justifyBetween, display.mt2)}>
                <div className={classNames(display.flex, display.flexColumn, display.alignCenter,)}>
                    <div className={classNames(display.flex, display.flexColumn, display.alignCenter)}>
                        <Typography gutterBottom component="h2" className={classNames(classes.footerSubtitle, text.textLight, display.opacity7)}>
                            Designo Central Office
                        </Typography>
                        <address className={classNames(text.alignCenter, text.textLight, display.opacity7, classes.footerAddress)}>
                            3886 Wellington Street<br />Toronto, Ontario M9C 3J5
                        </address>
                    </div>
                    <div className={classNames(display.flex, display.flexColumn, display.alignCenter, display.mt1)}>
                        <Typography gutterBottom component="h2" className={classNames(classes.footerSubtitle, text.textLight, display.opacity7)}>
                            Contact Us (Central Office)
                        </Typography>
                        <Typography gutterBottom className={classNames(text.rem9, text.textLight, display.opacity7)}>
                            P : +1 253-863-8967
                        </Typography>
                        <Typography className={classNames(text.rem9, text.textLight, display.opacity7)}>
                            M : contact@designo.co
                        </Typography>
                    </div>
                </div>
                <ul className={classNames(display.flex, display.alignCenter, display.mt2)}>
                    <li className={classNames(classes.footerSocialMediaItem)}>
                        <Link to="/"><FacebookIcon classes={{root: classes.footerSocialMediaIcon }}/></Link>
                    </li>
                    <li className={classNames(classes.footerSocialMediaItem)}>
                        <Link to="/"><YouTubeIcon classes={{root: classes.footerSocialMediaIcon }}/></Link>
                    </li>
                    <li className={classNames(classes.footerSocialMediaItem)}>
                        <Link to="/"><TwitterIcon classes={{root: classes.footerSocialMediaIcon }}/></Link>
                    </li>
                    <li className={classNames(classes.footerSocialMediaItem)}>
                        <Link to="/"><PinterestIcon classes={{root: classes.footerSocialMediaIcon }}/></Link>
                    </li>
                    <li className={classNames(classes.footerSocialMediaItem)}>
                        <Link to="/"><InstagramIcon classes={{root: classes.footerSocialMediaIcon }}/></Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;