import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import useStyles from '../classes';
import { Store } from '../../Store';

const AppTopBar: React.SFC = () => {
    const { state } = React.useContext(Store);
    const { showLeftDrawer: open } = state;
    const classes = useStyles();
    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
                <Typography variant="h6" noWrap style={open ? { marginLeft: '20%' } : { marginLeft: '5%' }}>
                    Feed Reader
                </Typography>
            </Toolbar>
        </AppBar>
    );
};
export default AppTopBar;
