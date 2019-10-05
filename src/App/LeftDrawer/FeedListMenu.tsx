import React, { useEffect, Fragment } from 'react';
import NestedList from './NestedList';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import AddFeedModal from './AddFeedModal';
import { fetchFeedsDataAction, setCurrentFeedUrl } from '../../actions';
import { Store } from '../../Store';

interface FeedItem {
    [key: string]: string[];
}
interface ObjectLiteral {
    [key: string]: string[];
}

const FeedListMenu: React.SFC = () => {
    const { state, dispatch } = React.useContext(Store);
    const { feeds } = state;
    useEffect(() => {
        Object.entries(feeds).length === 0 && fetchFeedsDataAction(dispatch);
        const firstTypeFeeds = feeds[Object.keys(feeds)[0]];
        setCurrentFeedUrl(firstTypeFeeds && firstTypeFeeds[0], dispatch);
    }, [feeds]);
    return (
        <Fragment>
            {feeds &&
                Object.keys(feeds).map((key: string, index: number) => {
                    const item = feeds[key];
                    return <NestedList makeListOpen={index === 0} key={key} feedType={key} feeds={item} />;
                })}
        </Fragment>
    );
};
export default FeedListMenu;
