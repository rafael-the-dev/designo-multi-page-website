import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
import classNames from 'classnames';
import logo from '../../assets/images/logo-dark.png';
import { useDisplay} from '../../styles';
import { useStyles } from './styles'

const Header = () => {
    const classes = useStyles();
    const display = useDisplay();

    return (
        <header className={classNames(classes.header)}>
            <div className={classNames(display.alignCenter, display.flex, display.justifyBetween)}>
                <Link to="/" className={classNames(classes.logoContainer)}>
                    <img 
                        src={logo} 
                        alt="logo" 
                        className={classNames(display.block, display.h100, display.w100)} 
                    />
                </Link>
                <IconButton>
                    <MenuIcon />
                </IconButton>
            </div>
        </header>
    );
};

export default Header;