import classNames from 'classnames';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-light.png';
import { useDisplay, useTypography } from '../../styles';
import { useStyles } from './styles'
import { Divider, Hidden, IconButton } from '@mui/material'

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
        </footer>
    );
};

export default Footer;