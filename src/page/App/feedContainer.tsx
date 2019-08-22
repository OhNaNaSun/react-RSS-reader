import React, { useState, useEffect, FunctionComponent } from 'react';
const Parser = require('rss-parser');

const parser = new Parser({
    customFields: {
        item: ['media:description', 'description'],
    },
});
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const FeedContainer: FunctionComponent = () => {
    const [data, dataSet] = useState([{ title: '', description: '' }]);
    const fetchMyAPI = async (): Promise<number> => {
        const feed = await parser.parseURL(CORS_PROXY + 'https://ponyfoo.com/articles/feed');
        dataSet(feed.items);
        return feed;
    };
    useEffect(() => {
        fetchMyAPI();
    }, []);

    return (
        <div>
            {data.slice(0, 1).map(item => (
                <div key={item.title} dangerouslySetInnerHTML={{ __html: item.description }}></div>
            ))}
        </div>
    );
};
export default FeedContainer;
