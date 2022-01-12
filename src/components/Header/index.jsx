import { Drawer, Hidden, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'
import classNames from 'classnames';
import logo from '../../assets/images/logo-dark.png';
import { useDisplay, useTypography } from '../../styles';
import { useStyles } from './styles'
import { useCallback, useState } from 'react';

const Header = () => {
    const classes = useStyles();
    const display = useDisplay();
    const text = useTypography();

    const [ openMenu, setOpenMenu ] = useState(false);

    const getList = useCallback(() => (
        <>
            <li  className={classNames(classes.headerListItem)}>
                <Link to="/" className={classNames(text.noUnderline, text.uppercase)}>
                    Our company
                </Link>
            </li>
            <li  className={classNames(classes.headerListItem)}>
                <Link to="/" className={classNames(text.noUnderline, text.uppercase)}>
                    Locations
                </Link>
            </li>
            <li  className={classNames(classes.headerListItem)}>
                <Link to="/" className={classNames(text.noUnderline, text.uppercase)}>
                    Contact
                </Link>
            </li>
        </>
    ), [ classes, text ]);

    return (
        <header className={classNames(classes.header, display.flex, display.alignCenter, display.justifyBetween)}>
            <div className={classNames(display.alignCenter, display.flex, display.justifyBetween)}>
                <Link to="/" className={classNames(classes.logoContainer)}>
                    <img 
                        src={logo} 
                        alt="logo" 
                        className={classNames(display.block, display.h100, display.w100)} 
                    />
                </Link>
                <Hidden smUp>
                    <IconButton onClick={() => setOpenMenu(b => !b)}>
                        { openMenu ? <CloseIcon /> : <MenuIcon /> }
                    </IconButton>
                </Hidden>
            </div>
            <Hidden smDown>
                <nav>
                    <ul 
                        className={classNames(classes.headerNavList, display.flex, display.alignCenter)}>
                        { getList() }
                    </ul>
                </nav>
            </Hidden>
            <Hidden smUp>
                <Drawer
                    anchor="top"
                    open={openMenu}
                    classes={{ paper: classes.drawerPaper, root: classes.drawerRoot }}
                    onClose={() => setOpenMenu(false)}
                    >
                    <ul 
                        className={classNames(classes.headerList, display.flex, display.flexColumn)}>
                        { getList() }
                    </ul>
                </Drawer>
            </Hidden>
        </header>
    );
};

export default Header;