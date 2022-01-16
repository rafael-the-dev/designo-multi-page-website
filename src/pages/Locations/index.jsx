import { Button, Grid, Typography } from '@mui/material'
import classNames from 'classnames'; /**/
import { useStyles } from './styles'
import { useDisplay } from '../../styles';

const Locations = () => {
    const classes = useStyles();
    const display = useDisplay();

    return (
        <div>
            <img 
                src="" 
                alt="" 
                className={classNames()} 
            />
            <div className={classNames()}></div>
        </div>
    );
};

export default Locations;