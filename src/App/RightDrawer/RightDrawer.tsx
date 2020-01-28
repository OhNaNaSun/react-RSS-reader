import React from 'react';
import useStyles from './../classes';
import Drawer from '@material-ui/core/Drawer';
import ArticleContainer from './ArticleContainer';
import { Store } from '../../Store';
import { toggleRightDrawer } from '../../actions';
import FeedContentContainer from './FeedContentContainer';

const RightDrawer: React.SFC = () => {
    const classes = useStyles();
    const { state, dispatch } = React.useContext(Store);
    const { currentArticle, showRightDrawer } = state;
    return (
        <main style={{ position: 'absolute', width: '100%' }} className={classes.content}>
            <div className={classes.toolbar} />
            <Drawer
                className={classes.rightDrawer}
                anchor="right"
                open={showRightDrawer}
                onClose={(): void => {
                    toggleRightDrawer(false, dispatch);
                }}
            >
                <ArticleContainer toggleRightDrawer={toggleRightDrawer} article={currentArticle} />
            </Drawer>
            <FeedContentContainer />
        </main>
    );
};
export default RightDrawer;
