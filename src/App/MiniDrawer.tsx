import React from 'react';
import useStyles from './classes';
import AppTopBar from './AppTopBar';
import LeftDrawer from './LeftDrawer/LeftDrawer';
import RightDrawer from './RightDrawer/RightDrawer';
import CssBaseline from '@material-ui/core/CssBaseline';

const MiniDrawer: React.SFC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppTopBar />
            <LeftDrawer />
            <RightDrawer />
        </div>
    );
};
export default MiniDrawer;
