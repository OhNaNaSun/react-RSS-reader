import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FeedContainer from './FeedContainer';
import FeedListMenu from './FeedListMenu';
import useStyles from './classes';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import { Store } from './../Store';

const MiniDrawer: React.SFC = () => {
    const { state, dispatch } = React.useContext(Store);
    const classes = useStyles();
    const theme = useTheme();
    const { showLeftDrawer: open } = state;
    const [feedUrl, setFeedUrl] = React.useState('');
    function handleDrawerOpen(): void {
        dispatch({ type: 'TOGGLE_LEFT_DRAWER', payload: true });
    }

    function handleDrawerClose(): void {
        dispatch({ type: 'TOGGLE_LEFT_DRAWER', payload: false });
    }
    return (
        <div className={classes.root}>
            <CssBaseline />
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
                        onClick={handleDrawerOpen}
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
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <FeedListMenu
                    handleClickFeed={(feedUrl: string): void => {
                        setFeedUrl(feedUrl);
                    }}
                />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {feedUrl && <FeedContainer feedUrl={feedUrl} />}
            </main>
        </div>
    );
};
export default MiniDrawer;
