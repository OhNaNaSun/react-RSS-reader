import React, { useState, useEffect } from 'react';
import MiniDrawer from './MiniDrawer';
import NestedList from './NestedList';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
// import feedsDataActions from './feedsDataActions';
import AddFeedModal from './AddFeedModal';
import _ from 'lodash';
import axios from 'axios';
// console.log('fetch', data);
// const fecthFeedData = feedsDataActions.getValue;
interface FeedItem {
    // type: string;
    [key: string]: string[];
    // items: { name: string; link: string }[];
}
const App: React.SFC = () => {
    const [data, dataSet] = useState<FeedItem>();
    const fetchMyAPI = async (): Promise<object[]> => {
        const feed = await axios.get('/feeds');
        // const objectData = convertData(feed.data);
        const originData = feed.data;

        console.log('fetch from index', originData);
        const dataMap = {};
        originData.forEach((item: { type: string; feed: string }) => {
            const { type, feed } = item;
            dataMap[type] = dataMap[type] || [];
            dataMap[type].push(feed);
        });

        console.log('objectData', dataMap);
        dataSet(dataMap);
        return feed.data;
    };
    useEffect(() => {
        fetchMyAPI();
    }, []);
    return (
        <div>
            <MiniDrawer>
                {data &&
                    Object.keys(data).map((key: string) => {
                        console.log('dd', data);
                        const item = data[key];
                        return <NestedList key={key} feedType={key} feeds={item} />;
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
