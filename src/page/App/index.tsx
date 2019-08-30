import React, { useState, useEffect } from 'react';
import MiniDrawer from './MiniDrawer';
import NestedList from './NestedList';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import AddFeedModal from './AddFeedModal';
import axios from 'axios';

interface FeedItem {
    [key: string]: string[];
}
interface ObjectLiteral {
    [key: string]: string[];
}
const App: React.SFC = () => {
    const [data, dataSet] = useState<FeedItem>();
    const fetchMyAPI = async (): Promise<object[]> => {
        const feed = await axios.get('/feeds');
        const originData = feed.data;
        console.log('fetch from index', originData);
        const dataMap: ObjectLiteral = {};
        originData.forEach((item: { type: string; feed: string }) => {
            const { type, feed } = item;
            dataMap[type] = dataMap[type] || [];
            dataMap[type].push(feed);
        });
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
