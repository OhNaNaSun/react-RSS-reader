import React, { useState, useEffect, Fragment } from 'react';
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
interface FeedListProps {
    handleClickFeed: (feedUrl: string) => void;
}
const FeedListMenu: React.SFC<FeedListProps> = props => {
    const { handleClickFeed } = props;
    const [data, dataSet] = useState<FeedItem>();
    const fetchMyAPI = async (): Promise<object[]> => {
        const feed = await axios.get('/feeds');
        const originData = feed.data;
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
        <Fragment>
            {data &&
                Object.keys(data).map((key: string) => {
                    const item = data[key];
                    return <NestedList key={key} feedType={key} feeds={item} handleClickFeed={handleClickFeed} />;
                })}
            <Divider />
            <List>
                <AddFeedModal refreshList={fetchMyAPI} />
            </List>
        </Fragment>
    );
};
export default FeedListMenu;
