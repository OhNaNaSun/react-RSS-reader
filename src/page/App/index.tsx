import React, { useState, useEffect } from 'react';
import MiniDrawer from './MiniDrawer';
import NestedList from './NestedList';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import feedsDataActions from './feedsDataActions';
import AddFeedModal from './AddFeedModal';

import axios from 'axios';
// console.log('fetch', data);
const fecthFeedData = feedsDataActions.getValue;
interface FeedItem {
    type: string;
    items: { name: string; link: string }[];
}
const App: React.SFC = () => {
    const [data, dataSet] = useState<FeedItem[]>([]);
    const fetchMyAPI = async (): Promise<object[]> => {
        const feed = await axios.get('/feeds');
        console.log('fetch from index', feed);
        dataSet(feed.data);
        return feed.data;
    };
    useEffect(() => {
        fetchMyAPI();
    }, []);
    return (
        <div>
            <MiniDrawer>
                {data.map((item: FeedItem) => {
                    return <NestedList key={item.type} feedType={item.type} feeds={item.items} />;
                })}
                <Divider />
                <List>
                    <AddFeedModal />
                </List>
            </MiniDrawer>
        </div>
    );
};
export default App;
