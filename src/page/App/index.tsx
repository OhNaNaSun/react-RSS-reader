import React, { useState, useEffect } from 'react';
import MiniDrawer from './MiniDrawer';
import NestedList from './NestedList';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import feedsDataActions from './feedsDataActions';
import AddFeedModal from './AddFeedModal';

// console.log('fetch', data);
const fecthFeedData = feedsDataActions.getValue;
const App: React.SFC = () => {
    const [data, dataSet] = useState({});
    // console.log(data);
    const fetchMyAPI = async (): Promise<object> => {
        const feed = await fecthFeedData();
        dataSet(feed.data);
        return feed;
    };
    useEffect(() => {
        fetchMyAPI();
    }, []);
    return (
        <div>
            <MiniDrawer>
                <NestedList feedType={'testttttType'} feeds={[{ name: 'a', link: 'b' }]} />
                <Divider />
                <List>
                    <AddFeedModal />
                </List>
            </MiniDrawer>
        </div>
    );
};
export default App;
