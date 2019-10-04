import React from 'react';
import useStyles from './../classes';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FeedListMenu from './FeedListMenu';
import { Store } from '../../Store';
import { toggleLeftDrawer, setCurrentFeedUrl } from '../../actions';

const LeftDrawer: React.SFC = () => {
    const { state, dispatch } = React.useContext(Store);
    const classes = useStyles();
    const { showLeftDrawer: open } = state;
    const theme = useTheme();
    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
            open={open}
        >
            <div className={classes.toolbar}>
                <RssFeedIcon />
                <Typography variant="h6" noWrap className={classes.feedTitle}>
                    FEEDS
                </Typography>
                <IconButton
                    onClick={(): void => {
                        console.log('hello', open);
                        toggleLeftDrawer(!open, dispatch);
                    }}
                >
                    {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </div>
            <Divider />
            <FeedListMenu />
        </Drawer>
    );
};
export default LeftDrawer;
