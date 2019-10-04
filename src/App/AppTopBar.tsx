import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import useStyles from './classes';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Store } from './../Store';
import { toggleLeftDrawer } from './../actions';

const AppTopBar: React.SFC = () => {
    const { state, dispatch } = React.useContext(Store);
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
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={(): void => {
                        console.log('open', open);
                        toggleLeftDrawer(true, dispatch);
                    }}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: open,
                    })}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    RSS Feeder
                </Typography>
            </Toolbar>
        </AppBar>
    );
};
export default AppTopBar;
